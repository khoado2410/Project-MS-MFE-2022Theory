import {Request, Response} from 'express';
import {createPromotion, getPromotionByTypeProduct, 
    getPromotionByProduct, updateProduct, removeProduct} from '../service/promotion.service';
import log from '../logger';

export async function createPromotionHandler(req:Request, res: Response) {
    try {
        const promotion = await createPromotion(req.body);
        return res.json({
            ErrorCode: 0,
            Message: null
        });
    } catch (e) {
        log.error(e);
        return res.status(400).send('Error when create promotion');
    }
}

export async function handleGetPromotionByProductType(req: Request, res: Response){
    try {
        const promotion = await getPromotionByTypeProduct(req.query);
        return res.json({
            ErrorCode: 0,
            Message: promotion
        });
    } catch (e) {
        log.error(e);
        return res.status(400).send('Error when get promotion by product type');
    }
}

export async function handleGetPromoByProduct(req: Request, res: Response){
    try {
        const listPromo = await getPromotionByProduct(req.query);
        return res.json({
            ErrorCode: 0,
            Message: listPromo
        });
    } catch (e) {
        log.error(e);
        return res.status(400).send('Error when get promotion by product');
    }
}

export async function handleUpdate(req: Request, res: Response){
    try {
        const listPromo = await updateProduct(req.body);
        return res.json({
            ErrorCode: 0,
            Message: null
        });
    } catch (e) {
        log.error(e);
        return res.status(400).send('Error when update promo');
    }
}

export async function handleRemove(req: Request, res: Response){
    try {
        const listPromo = await removeProduct(req.body);
        return res.json({
            ErrorCode: 0,
            Message: null
        });
    } catch (e) {
        log.error(e);
        return res.status(400).send('Error when remove promo');
    }
}