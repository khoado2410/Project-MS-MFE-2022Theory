import {Request, Response} from 'express';
import {createPaymentMethod, getPaymentMethod} from '../service/paymentMethod.service';
import log from '../logger';

export async function handleCreatePaymentMethod(req:Request, res: Response) {
    try {
        const payment = await createPaymentMethod(req.body);
        return res.json({
            ErrorCode: 0,
            Message: null
        });
    } catch (e) {
        log.error(e);
        return res.status(400).send('Error when create payment');
    }
}

export async function handleGetPaymentMethod(req: Request, res: Response){
    try {
        const lstPayment = await getPaymentMethod(req.query);
        return res.json({
            ErrorCode: 0,
            Message: lstPayment
        });
    } catch (e) {
        log.error(e);
        return res.status(400).send('Error when get payment');
    }
}

