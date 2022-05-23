import {Request, Response} from 'express';
import {createCategory, getCategory, getCategoryByBranch} from '../service/category.service';
import log from '../logger';

export async function createCategoryHandler(req:Request, res: Response) {
    try {
        // const newCategory = await createCategory(req.body);
        // if(newCategory){
        //     return res.json({
        //         ResponseResult: {
        //             ErrorCode: 0,
        //             Message:'Thành công',
        //             Result: null
        //         }
        //     });
        // }else{
        //     return res.json({
        //         ResponseResult: {
        //             ErrorCode: 400,
        //             Message:'Không đúng định dạng',
        //             Result: null
        //         }
        //     });
        // }
        
    } catch (e) {
        log.error(e);
        return res.status(400).send('Error when create category');
    }
}

export async function getAllCategoryHandler(req:Request, res: Response) {
    try {
        const category = await getCategory();
        return res.json({
            ResponseResult: {
                ErrorCode: 0,
                Message:'Thành công',
                Result: category 
            }
        });
    } catch (e) {
        log.error(e);
        return res.status(400).send('Error when get category');
    }
}

export async function getCategoryByBranchHandler(req:Request, res: Response) {
    try {
        const category = await getCategoryByBranch(req.query);
        return res.json({
            ResponseResult: {
                ErrorCode: 0,
                Message:'Thành công',
                Result: category
            }
        });
    } catch (e) {
        log.error(e);
        return res.status(400).send('Error when get category');
    }
}





// export async function handleGetAllProduct(req: Request, res: Response){
//     try {
//         const product = await getAllProduct();
//         return res.json({
//             ResponseResult: {
//                 ErrorCode: 0,
//                 Message: 'Thành công',
//                 Result: product
//             }
//         });
//     } catch (e) {
//         log.error(e);
//         return res.status(400).send('Error when get promotion by product type');
//     }
// }

