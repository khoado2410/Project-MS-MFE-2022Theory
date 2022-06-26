import {Request, Response} from 'express';
import {createBill, getBill} from '../service/bill.service';
import log from '../logger';

export async function createBillHandler(req:Request, res: Response) {
    try {
        
        const body = {
            infoCustomer: JSON.parse(req.headers['userjwt'] as string),
            listBill: req.body.list_item,
            total: req.body.total,
            status: 0,
            typeOfPaymentMethod: req.body.typeOfPaymentMethod
        };

       
        await createBill(body);
        return res.json({ResponseResult:{
            ErrorCode: 0,
            Message: 'Thành công',
            Result: null
        }});
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

