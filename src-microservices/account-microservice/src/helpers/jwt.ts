var jwt = require('jsonwebtoken');

export async function generateToken (payload: any, secretSignature: any, tokenLife: any) {
    try {
        return await jwt.sign(
            {
                payload,
            },
            secretSignature,
            {
                algorithm: 'HS256',
                expiresIn: tokenLife
            }
        )
    } catch (error) {
        throw error;
    }
}

export async function verifyToken(token: any, secretKey:any) {
    try {
        return await jwt.verify(token, secretKey);
    } catch (error) {
        console.log('error: ', error);
        throw error;
    }
}


