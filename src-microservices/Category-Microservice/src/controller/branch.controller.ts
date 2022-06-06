import {Request, Response} from 'express';
import {createBranch, getBranch, checkBranchValid, checkBranchCategoryValid} from '../service/branch.service';
import log from '../logger';

export async function handleCheckBranchCategoryValid(req: Request, res: Response){
    try {
        const check = await checkBranchCategoryValid(req.body);
        if(check){
            return res.json({
                ResponseResult: {
                    ErrorCode: 0,
                    Message: 'Thành công',
                    Result: {
                        check: true
                    }
                }
            });
        }else{
            return res.json({
                ResponseResult: {
                    ErrorCode: 0,
                    Message: 'Thành công',
                    Result: {
                        check: false
                    }
                }
            });
        }
    } catch (e) {
        log.error(e);
        return res.status(400).send('Error when get promotion by product type');
    }
}

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

export async function handleCheckBranchyValid(req: Request, res: Response){
    try {
        const check = await checkBranchValid(req.body);
        if(check){
            return res.json({
                ResponseResult: {
                    ErrorCode: 0,
                    Message: 'Thành công',
                    Result: {
                        check: true
                    }
                }
            });
        }else{
            return res.json({
                ResponseResult: {
                    ErrorCode: 0,
                    Message: 'Thành công',
                    Result: {
                        check: false
                    }
                }
            });
        }
        
    } catch (e) {
        log.error(e);
        return res.status(400).send('Error when get promotion by product type');
    }
}
