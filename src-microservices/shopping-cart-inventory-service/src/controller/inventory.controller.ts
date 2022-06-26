import {Request, Response} from 'express';
import {findAll, createInventory, checkInventory} from '../service/inventory.service';
import request from 'request';

function doRequest(url: any, header: object, bodyPost: object) {
    return new Promise(function (resolve, reject) {
      request(url, {
        method: 'POST',
        headers: header,
        body: JSON.stringify(bodyPost)
      } ,function (error: any, res: any, body: string) {
        if (!error && res.statusCode == 200) {
            const res = JSON.parse(body);
          resolve(res);
        } else {
          reject(error);
        }
      });
    });
  }

export async function handleCheckInventory(req: Request, res: Response){
    try {
        const inventory = await checkInventory(req.body);
        if(inventory.length == 0){
            var resBill:any = {};
            resBill = await doRequest(`http://localhost:3333/payment/create-bill`, {
                Authorization: req.headers['authorization'],
                'Content-Type': 'application/json'
            }, req.body) as Object;
            console.log('res bill: ', resBill)
        } 
    
        return res.json({ResponseResult: {
            ErrorCode: 0,
            Message: 'Thành công',
            Result: null
        }})
    } catch (error) {
        console.log('error: ', error);
        return res.json({
            ErrorCode: 0,
            Message: 'Error when get check inventory',
            Result: null
    });
    }
}

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