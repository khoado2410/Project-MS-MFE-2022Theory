import {Request, Response} from 'express';
import {createPaymentMethod, getPaymentMethod} from '../service/paymentMethod.service';
import log from '../logger';

export async function handleCreatePaymentMethod(req:Request, res: Response) {
    try {
        await createPaymentMethod(req.body);
        return res.json({ResponseResult: {
            ErrorCode: 0,
            Message: 'Thành công',
            Result: null
        }});
    } catch (e: any) {
        log.error(e);
        return res.json({ResponseResult: {
            ErrorCode: 400,
            Message: e.Message(),
            Result: null
        }});
    }
}

export async function handleGetPaymentMethod(req: Request, res: Response){
    try {
        const lstPayment = await getPaymentMethod(req.query);
        return res.json({ResponseResult:{
            ErrorCode: 0,
            Message: 'Thành công',
            Result: lstPayment
        }});
    } catch (e) {
        log.error(e);
        return res.status(400).send('Error when get payment');
    }
}

