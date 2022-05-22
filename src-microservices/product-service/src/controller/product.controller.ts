import {Request, Response} from 'express';
import {createProduct, getAllProduct} from '../service/product.service';
import log from '../logger';

export async function createProductHandler(req:Request, res: Response) {
    try {
        const promotion = await createProduct(req.body);
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

