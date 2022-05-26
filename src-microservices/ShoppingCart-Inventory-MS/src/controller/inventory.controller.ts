import {Request, Response} from 'express';
// import {createPromotion, getPromotionByTypeProduct, 
//     getPromotionByProduct, updateProduct, removeProduct,
// getListPromoByMethodPayment} from '../service/cart.service';
import log from '../logger';
import {create} from '../service/cart.service';

export async function handleAddInventory(req:Request, res: Response) {
    try {
    //   console.log('123123')
        return res.json({
            ErrorCode: 0,
            Message: 'Thành công'
        });
    } catch (e) {
        log.error(e);
        return res.status(400).send('Error when create promotion');
    }
}