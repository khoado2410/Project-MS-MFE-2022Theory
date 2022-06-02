import {Request, Response} from 'express';
import {createUser} from '../service/account.service';
import log from '../logger';

export async function createHandleUser(req:Request, res: Response) {
    try {
        if(req.body.username == '' || req.body.password == ''){
            return res.json({
                ResponseResult: {
                    ErrorCode: 400,
                    Message:'Vui lòng nhập username hoac password',
                    Result: null
                }
            });
        }
        await createUser(req.body);
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

// export async function getAllCategoryHandler(req:Request, res: Response) {
//     try {
//         const category = await getCategory();
//         return res.json({
//             ResponseResult: {
//                 ErrorCode: 0,
//                 Message:'Thành công',
//                 Result: category 
//             }
//         });
//     } catch (e) {
//         log.error(e);
//         return res.status(400).send('Error when get category');
//     }
// }

// export async function getCategoryByBranchHandler(req:Request, res: Response) {
//     try {
//         const category = await getCategoryByBranch(req.query);
//         return res.json({
//             ResponseResult: {
//                 ErrorCode: 0,
//                 Message:'Thành công',
//                 Result: category
//             }
//         });
//     } catch (e) {
//         log.error(e);
//         return res.status(400).send('Error when get category');
//     }
// }

// export async function handleCheckCategoryValid(req: Request, res: Response){
//     try {
//         const check = await checkCategoryValid(req.body);
//         if(check){
//             return res.json({
//                 ResponseResult: {
//                     ErrorCode: 0,
//                     Message: 'Thành công',
//                     Result: {
//                         check: true
//                     }
//                 }
//             });
//         }else{
//             return res.json({
//                 ResponseResult: {
//                     ErrorCode: 0,
//                     Message: 'Thành công',
//                     Result: {
//                         check: false
//                     }
//                 }
//             });
//         }
        
//     } catch (e) {
//         log.error(e);
//         return res.status(400).send('Error when get promotion by product type');
//     }
// }

