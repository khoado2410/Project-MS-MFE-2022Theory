var {config} = require('../config/env');
var authMethod = require('../helpers/jwt');
var {isJwtExpired} = require('jwt-check-expiration');
var { rsErrorOperation, rsErrorUnauthorized, rsErrorPermission, rsErrorTokenExpired} = require('../helpers/respone');


const isAuth = async(req, res, next) => {
    try {
        if(req.originalUrl.includes('log-in')){
            return next();
        }
        if(req.originalUrl.includes('create-user')){
            return next();
        }
            //next();
        const token = req.token;
        if(!token)
            return res.json(rsErrorUnauthorized());
        if(isJwtExpired(token))
            return res.json(rsErrorTokenExpired());
        const tokenSecret = config.ACCESS_TOKEN_SECRET;
        const decoded = await authMethod.verifyToken(token, tokenSecret);
        req.jwtDecode = decoded.payload;
        return next();
    } catch (error) {
        return res.json({
            ErrorCode: 400,
            Message: error.message,
            Result: null
        });
    }
}

// const isRoleRoot = async(req, res, next) => {
//     try {
//         const partner = req.jwtDecode;
//         if(partner.role != 'root')
//             return res.json(rsErrorPermission());
//         return next();
//     } catch (error) {
//         return res.json(rsErrorOperation(error.message));
//     }
// };

// const isRoleAdmin = async(req, res, next) => {
//     try {
//         const partner = req.jwtDecode;
//         if(partner.role == 'member')
//             return res.json(rsErrorPermission());
//         return next();
//     } catch (error) {
//         return res.json(rsErrorOperation(error.message));
//     }
// };

module.exports = {
    isAuth,
    // isRoleRoot,
    // isRoleAdmin
};
