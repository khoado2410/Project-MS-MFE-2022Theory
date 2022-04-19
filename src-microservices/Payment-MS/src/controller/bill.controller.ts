import {Request, Response} from 'express';
import {createBill, getBill} from '../service/bill.service';
import log from '../logger';

export async function createBillHandler(req:Request, res: Response) {
    try {
        const promotion = await createBill(req.body);
        return res.json({
            ErrorCode: 0,
            Message: null
        });
    } catch (e) {
        log.error(e);
        return res.status(400).send('Error when create bill');
    }
}

// export async function handleGetPromotionByProductType(req: Request, res: Response){
//     try {
//         const promotion = await getPromotionByTypeProduct(req.query);
//         return res.json({
//             ErrorCode: 0,
//             Message: promotion
//         });
//     } catch (e) {
//         log.error(e);
//         return res.status(400).send('Error when get promotion by product type');
//     }
// }

