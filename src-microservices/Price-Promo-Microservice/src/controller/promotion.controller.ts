import {Request, Response} from 'express';
import {createPromotion, getPromotionByTypeProduct, 
    getPromotionByProduct, updateProduct, removeProduct,
getListPromoByMethodPayment} from '../service/promotion.service';
import log from '../logger';

export async function createPromotionHandler(req:Request, res: Response) {
    try {
        await createPromotion(req.body);
        return res.json({
            ErrorCode: 0,
            Message: 'Thành công',
            Result: null
        });
    } catch (e) {
        log.error(e);
        return res.json({
            ErrorCode: 400,
            Message: 'Error when create promotion',
            Result: null
        });;
    }
}

export async function handleGetPromotionByProductType(req: Request, res: Response){
    try {
        const promotion = await getPromotionByTypeProduct(req.query);
        return res.json({
            ErrorCode: 0,
            Message: 'Thành công',
            Result: promotion
        });
    } catch (e) {
        log.error(e);
        console.log('error: ', e);
        return res.json({
            ErrorCode: 400,
            Message: 'Error when get promotion',
            Result: null
        });;
    }
}

export async function handleGetPromoByProduct(req: Request, res: Response){
    try {
        const listPromo = await getPromotionByProduct(req.query);
        return res.json({
            ErrorCode: 0,
            Message: 'Thành công',
            Result: listPromo
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

export async function handleGetListPromoByPaymentMethod(req: Request, res: Response){
    try {
        const listPromo = await getListPromoByMethodPayment(req.body.list_method);
        return res.json({
            ErrorCode: 0,
            Message: listPromo
        });
    } catch (error) {
        log.error(error);
        return res.status(400).send('Error when get list promo by payment method')
    }
}