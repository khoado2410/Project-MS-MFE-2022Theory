import {query, Request, Response} from 'express';
import {createUser, getAllUser, getUserByUsername, updateRefreshToken} from '../service/account.service';
import {generateToken, verifyToken} from '../helpers/jwt';
import config from '../../config/default';
import log from '../logger';

const bcrypt = require('bcrypt');
const saltRounds = 10;

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
        bcrypt.hash(req.body.password, saltRounds, async function(err:any, hash: String) {
            try {
                const user = {
                    username: req.body.username,
                    password: hash
                };
                await createUser(user);
                return res.json({
                    ResponseResult: {
                        ErrorCode: 0,
                        Message:'Thành công',
                        Result: null
                    }
                });
            } catch (error) {
                return res.status(400).send('Error when create user');
            }
           
        });
       
     
    } catch (e) {
        log.error(e);
        return res.status(400).send('Error when create user');
    }
}

export async function handleGetAll(req: Request, res: Response){
    try {
        const listUser = await getAllUser();
        return res.json({
            ResponseResult: {
                ErrorCode: 0,
                Message:'Thành công',
                Result: listUser 
            }
        });
    } catch (error) {
        log.error(error);
        return res.status(400).send('Error when get user');

    }
}

export async function handleLogin(req: Request, res: Response){
    try {
        const queryUser = {
            username: req.body.username,
            is_delete: false
        };
        const user = await getUserByUsername(queryUser);
        let password: String = '';
        if(user != null){
            password = user.password;
        }else{
            return res.json({
                ResponseResult: {
                    ErrorCode: 0,
                    Message:'Username hoặc Password không hợp lệ',
                    Result: null
                }
            });
        }
        bcrypt.compare(req.body.password, password).then(async function(result: any){
            if(!result)
                return res.json({
                    ResponseResult: {
                        ErrorCode: 0,
                        Message:'Username hoặc Password không hợp lệ',
                        Result: null
                    }
                });
            const payload = {
                username: user.username,
                full_name: user.full_name,
                age: user.age,
                role: user.role,
                address: user.address
            };

            const access_token = await generateToken(payload, config.ACCESS_TOKEN_SECRET, config.ACCESS_TOKEN_LIFE);
            const refresh_token = await generateToken(payload, config.refreshTokenSecret, config.refreshTokenLife);
            const token = {
                username: user.username,
                refresh_token: refresh_token
            };
            await updateRefreshToken(token);
            return res.json({
                ResponseResult: {
                    ErrorCode: 0,
                    Message:'Thành công',
                    Result: {
                        accessToken: access_token,
                        refreshToken: refresh_token
                    }
                }
            });
        })
        
    } catch (error) {
        log.error(error);
        return res.status(400).send('Error when get user');

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

