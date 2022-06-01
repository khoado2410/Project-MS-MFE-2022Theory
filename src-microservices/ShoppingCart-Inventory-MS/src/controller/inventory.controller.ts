import {Request, Response} from 'express';
import {findAll, createInventory} from '../service/inventory.service';
import log from '../logger';


// export async function handleAddInventory(req:Request, res: Response) {
//     try {
//       console.log('123123')
//         // return res.json({
//         //     ErrorCode: 0,
//         //     Message: null
//         // });
//     } catch (e) {
//         log.error(e);
//         return res.status(400).send('Error when create promotion');
//     }
// }

export async function handleGetAllInventory(req: Request, res: Response){
    try {
        // const data = await findAll();
        // console.log('data: ', data);
        return res.json({
            ErrorCode: 0,
            Message: 'Thành công',
            Result: 'data'
        });
    } catch (error) {
        console.log('error: ', error);
        return res.json({
                ErrorCode: 0,
                Message: 'Error when get all inventory',
                Result: null
            }
            );
    }
}

export async function handleCreateInventory(req: Request, res: Response){
    // try {
    //     await createInventory(req.body);
    //     return res.json({
    //         ErrorCode: 0,
    //         Message: 'Thành công',
    //         Result: null
    //     });
    // } catch (error) {
    //     console.log('error: ', error);
    //     return res.json({
    //         ErrorCode: 0,
    //         Message: 'Error when get all inventory',
    //         Result: null
    //     });
    // }
}