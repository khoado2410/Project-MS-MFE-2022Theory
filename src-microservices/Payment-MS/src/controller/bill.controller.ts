import {Request, Response} from 'express';
import {createBill, getBill} from '../service/bill.service';
import log from '../logger';

export async function handleGetBill(req: Request, res: Response){
    try {
        const listBill = await getBill(req.query);
        return res.json({ResponseResult:{
            ErrorCode: 0,
            Message: 'Thành công',
            Result: listBill
        }});
    } catch (error) {
        log.error(error);
        return res.json({ResponseResult:{
            ErrorCode: 400,
            Message: 'Error when get bill',
            Result: null
        }});
    }
}

export async function createBillHandler(req:Request, res: Response) {
    try {
        const user = JSON.parse(req.headers['userjwt'] as string);
        const body = {
            username: user.username,
            infoCustomer: user,
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
        return res.json({ResponseResult:{
            ErrorCode: 400,
            Message: 'Error when get bill',
            Result: null
        }});
    }
}

