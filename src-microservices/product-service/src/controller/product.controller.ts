import {Request, Response} from 'express';
import {createProduct, getAllProduct} from '../service/product.service';
import request from 'request';
import log from '../logger';

export async function createProductHandler(req:Request, res: Response) {
    try {
        const body = req.body;
        request('http://api-gateway:3333/category/check-category-branch', {
            method: 'POST',
            body: {
                category: body.category,
                category_detail: body.categoryDetail,
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
                         return res.json({
                             ResponseResult: {
                                ErrorCode: 401,
                                Message:'Category hoặc Branch không hợp lệ',
                                Result: null
                                    }
                        });
                    } else{
                        await createProduct(req.body);
                        return res.json({
                            ResponseResult: {
                                ErrorCode: 0,
                                Message:'Thành công',
                                Result: null
                                        }
                            });
                    }
                }catch(err){
                    console.log("Fail while parse json: " + err);
                    return res.json({
                    ResponseResult: {
                        ErrorCode: 401,
                        Message:'Error when check branch',
                        Result: null
                                }
                    });
                }
        }});

       
    } catch (e) {
        log.error(e);
        return res.status(400).send('Error when create bill');
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

