import {DocumentDefinition, FilterQuery} from 'mongoose';
import Product, {ProductDocument} from '../model/product.model';
const dotenv = require('dotenv');
import request from 'request';
dotenv.config();
const port = process.env.NODE_DOCKER_PORT;

export async function createProduct(input: DocumentDefinition<ProductDocument>){
    try {
        return await Product.create(input);
    } catch (error) {
        throw error;
    }
}

function doRequest(url: any) {
    return new Promise(function (resolve, reject) {
      request(url, function (error: any, res: any, body: string) {
        if (!error && res.statusCode == 200) {
            const res = JSON.parse(body);
          resolve(res);
        } else {
          reject(error);
        }
      });
    });
  }

export async function getAllProduct(){
    try {
        const listProduct = await Product.find({is_delete: false}).select({
            isDelete: 0
        });
        const listRes: Array<Object> = [];
        let count = listProduct.length;
        var resInventory:any = {};
        resInventory = await doRequest(`http://api-gateway:3333/inventory-cart-ms/get-all-inventory`) as Object;
        const resultInventory = resInventory.Result;
        for(let i = 0; i < count; i++){
            let listPath: Array<String> = [];
            var countItem = listProduct[i].listImage.length;
            for(let j = 0; j < countItem; j++){
                listPath.push(`localhost:3333/product/upload/${listProduct[i].listImage[j].filename}`);

            }
            var res :any = {};
            res = await doRequest(`http://api-gateway:3333/price-promo/get-promotion-by-product?productId=${listProduct[i]._id}&productType=${listProduct[i].branch}`) as Object;
            let result = res.Result;
            for(let k = 0; k < resultInventory.length; k++){
              if(listProduct[i]._id == resultInventory[k].idProduct){
                listProduct[i].amount = resultInventory[k].amount
              }
            }
            let itemProduct = {
                    id: listProduct[i]._id,
                    name: listProduct[i].name,
                    description: listProduct[i].description,
                    price: listProduct[i].price,
                    numberOfReviews: listProduct[i].numberOfReviews,
                    quantitySold: listProduct[i].quantitySold,
                    category: listProduct[i].category,
                    branch: listProduct[i].branch,
                    numberStar: listProduct[i].numberStar,
                    linkPath: listPath,
                    nameDiscount: result != null ? result.name : '',
                    discount: result != null ? result.discount : '',
                    timeStart: result != null ? result.timeStart : '',
                    timeEnd: result != null ? result.timeEnd : '',
                    amount: listProduct[i].amount ?? 0
            };
            listRes.push(itemProduct);
        }
        return listRes;
    
    } catch (error) {
        throw error;
    }
}

