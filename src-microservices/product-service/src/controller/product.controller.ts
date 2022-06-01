import {Request, Response} from 'express';
import {createProduct, getAllProduct} from '../service/product.service';
import request from 'request';
import log from '../logger';

export async function createProductHandler(req:Request, res: Response) {
    try {
        let message = '';
        const body = req.body;
        request('http://api-gateway:3333/category/check-category-valid', {
            body: {
                category: body.category,
                category_detail: body.categoryDetail
            },
            headers: {
                'Content-Type': 'application/json'
            },
            json: true
        },function(error,response){
			if(response){
		    	try{
		    		console.log('response: ', response)
			    	
		    	}catch(err){
		    		console.log("Fail while parse json: " +err);
		    	}
        }
    });
    request('http://api-gateway:3333/category/check-branch-valid', {
        body: {
            branch: body.branch,
            category: body.category
        },
        headers: {
            'Content-Type': 'application/json'
        },
        json: true
    },function(error,response){
        if(response){
            try{
                console.log('response: ', response)
                
            }catch(err){
                console.log("Fail while parse json: " +err);
            }
    }
});


        await createProduct(body);
        return res.json({
            ResponseResult: {
                ErrorCode: 0,
                Message:'Thành công',
                Result: null
            }
        });
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

