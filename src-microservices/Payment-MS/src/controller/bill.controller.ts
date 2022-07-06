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
        const info_bill = {
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,
            address_line_1: req.body.address_line_1,
            address_line_2: req.body.address_line_2,
            mobile_no: req.body.mobile_no,

        };
        const body = {
            username: user.username,
            infoCustomer: user,
            listBill: req.body.list_item,
            total: req.body.total,
            status: 0,
            typeOfPaymentMethod: req.body.payment,
            info_bill: info_bill
        };
        //console.log('body: ', body)
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

