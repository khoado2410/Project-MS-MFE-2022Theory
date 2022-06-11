import {Request, Response} from 'express';
import {createProduct, getAllProduct} from '../service/product.service';
import request from 'request';
import log from '../logger';

export async function createProductHandler(req:Request, res: Response) {
    try {

        const body = req.body;
        request('http://api-gateway:3333/category/check-branch-valid', {
            method: 'POST',
            body: {
                category: body.category,
                branch: body.branch
            },
            headers: {
                'Content-Type': 'application/json'
            },
            json: true
        }, async function(error, response){
            if(response){
                try{
                     const result =  response.body.ResponseResult.Result.check;
            		if(result == false){
                        console.log('inventory: ', result);
                         return res.json({
                             ResponseResult: {
                                ErrorCode: 401,
                                Message:'Category hoặc Branch không hợp lệ',
                                Result: null
                            }
                        });
                    } else{
                        try {
                            const inputProduct = {...req.body};
                            inputProduct.listImage = req.files;
                            console.log('input product: ', inputProduct);
                            const product = await createProduct(inputProduct);
                            request('http://api-gateway:3333/inventory-cart-ms/create-inventory', {
                                method: 'POST',
                                body: {
                                    id_product: product._id.toString(),
                                    amount: req.body.amount,
                                    category_product: product.category,
                                    branch_product: product.branch,
                                    name_product: product.name
                                },

                                headers: {
                                    'Content-Type': 'application/json'
                                },
                                json: true
                            }, function(err, resInventory){
                                console.log('inventory: ', err)
                                if(err){
                                    return res.json({
                                        ResponseResult: {
                                            ErrorCode: 0,
                                            Message:'Error when create inventory',
                                            Result: err
                                                    }
                                        });
                                }
                            });
                            return res.json({
                                ResponseResult: {
                                    ErrorCode: 0,
                                    Message:'Thành công',
                                    Result: null
                                            }
                                });
                        } catch (error) {
                            console.log('error: ', error);
                            return res.json({
                                ResponseResult: {
                                    ErrorCode: 401,
                                    Message:'Error when create product',
                                    Result: null
                                }
                            });
                        }
                       
                    }
                }catch(err){
                    console.log("Fail while parse json: " + err);
                    return res.json({
                    ResponseResult: {
                        ErrorCode: 401,
                        Message:'Error when check branch',
                        Result: null
                    }});
                }
        }});

       
    } catch (e) {
        log.error(e);
        return res.json({
            ResponseResult: {
                ErrorCode: 401,
                Message:'Error when create product',
                Result: null
            }});
    }
}

export async function handleGetAllProduct(req: Request, res: Response){
    try {
        const product = await getAllProduct();

        return res.json({
            ResponseResult: {
                ErrorCode: 0,
                Message: 'Thành công',
                Result: product
            }
        });
    } catch (e) {
        log.error(e);
        return res.status(400).send('Error when get promotion by product type');
    }
}

