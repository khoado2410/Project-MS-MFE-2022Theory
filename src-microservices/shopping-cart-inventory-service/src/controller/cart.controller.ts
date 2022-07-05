import {Request, Response} from 'express';
import {createCart, getCartByAccount} from '../service/cart.service';
import request from 'request';
import config from '../../config/env/index';


function doRequest(url: any, header: object) {
    return new Promise(function (resolve, reject) {
      request(url, {
        headers: header
      }, function (error: any, res: any, body: string) {
        if (!error && res.statusCode == 200) {
            console.log('resss:', body);
            const res = JSON.parse(body);
          resolve(res);
        } else {
          reject(error);
        }
      });
    });
  }

export async function handleGetCartByAccount(req: Request, res: Response){
    try {
        const data = await getCartByAccount(req.query);
        if(data == null)
            return res.json({
                ErrorCode: 0,
                Message: 'Thành công',
                Result: null
            });
        const listItem = data.listItem;
        //console.log('list item: ', listItem)
        const listRes: Array<Object> = [];
        var resProduct:any = {};
        console.log('header: ', req.headers['authorization'])
        resProduct = await doRequest(`${config.index.url_product}/get-all-product`, {
            Authorization: req.headers['authorization'],
            'Content-Type': 'application/json'
        }) as Object;
        console.log('res: ', resProduct);
        // const listProduct = resProduct.ResponseResult.Result;
        // //console.log('list product: ', listProduct);
        // let count = listProduct.length;
        // for(let i = 0; i < listItem.length; i++){
        //     for(let k = 0; k < count; k++){
        //         if(listItem[i].idProduct == listProduct[k]._id){
        //             let itemProduct = {
        //                 id: listProduct[k]._id,
        //                 name: listProduct[k].name,
        //                 description: listProduct[k].description,
        //                 price: listProduct[k].price,
        //                 numberOfReviews: listProduct[k].numberOfReviews,
        //                 quantitySold: listProduct[k].quantitySold,
        //                 category: listProduct[k].category,
        //                 branch: listProduct[k].branch,
        //                 numberStar: listProduct[k].numberStar,
        //                 linkPath: listProduct[k].listImage,
        //                 nameDiscount: listProduct[k].nameDiscount,
        //                 discount: listProduct[k].discount,
        //                 timeStart: listProduct[k].timeStart,
        //                 timeEnd: listProduct[k].timeEnd,
        //                 amount: listProduct[k].amount ?? 0,
        //                 quantityCart: listItem[i].quantity
        //               };
        //             listRes.push(itemProduct)
        //         }
        //     }
        // }
        // return res.json({
        //     ErrorCode: 0,
        //     Message: 'Thành công',
        //     Result: {
        //         idCart: data.idCart,
        //         listItem: listRes
        //     }
        // });
    } catch (error) {
        console.log('error: ', error);
        return res.json({
                ErrorCode: 400,
                Message: 'Error when get cart by account',
                Result: null
        });
    }
}

export async function handleCreateCart(req: Request, res: Response){
    try {
        await createCart(req.body);
        return res.json({
            ErrorCode: 0,
            Message: 'Thành công',
            Result: null
        });
    } catch (error) {
        console.log('error: ', error);
        return res.json({
            ErrorCode: 0,
            Message: 'Error when create cart',
            Result: null
        });
    }
}