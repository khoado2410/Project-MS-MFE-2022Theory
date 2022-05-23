import {Request, Response} from 'express';
import {createBranch, getBranch} from '../service/branch.service';
import log from '../logger';

export async function createBranchHandler(req:Request, res: Response) {
    try {
        if(req.body.category == ''){
            return res.json({
                ResponseResult: {
                    ErrorCode: 400,
                    Message:'Vui lòng nhập category',
                    Result: null
                }
            });
        }
        await createBranch(req.body);
        return res.json({
            ResponseResult: {
                    ErrorCode: 0,
                    Message:'Thành công',
                    Result: null
                }
            });
    
        
    } catch (e) {
        log.error(e);
        return res.status(400).send('Error when create category');
    }
}


export async function handleGetBranch(req: Request, res: Response){
    try {
        const branch = await getBranch(req.body);
        return res.json({
            ResponseResult: {
                ErrorCode: 0,
                Message: 'Thành công',
                Result: branch
            }
        });
    } catch (e) {
        log.error(e);
        return res.status(400).send('Error when get promotion by product type');
    }
}

