import {Request, Response} from 'express';
import {findAll, createInventory} from '../service/inventory.service';
import log from '../logger';


export async function handleGetAllInventory(req: Request, res: Response){
    try {
        const data = await findAll();
        return res.json({
            ErrorCode: 0,
            Message: 'Thành công',
            Result: data
        });
    } catch (error) {
        console.log('error: ', error);
        return res.json({
                ErrorCode: 0,
                Message: 'Error when get all inventory',
                Result: null
        });
    }
}

export async function handleCreateInventory(req: Request, res: Response){
    try {
        await createInventory(req.body);
        return res.json({
            ErrorCode: 0,
            Message: 'Thành công',
            Result: null
        });
    } catch (error) {
        console.log('error: ', error);
        return res.json({
            ErrorCode: 0,
            Message: 'Error when get all inventory',
            Result: null
        });
    }
}