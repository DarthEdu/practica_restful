import jwt from 'jsonwebtoken';

const createToken = (infoJson) =>{
    const signatureJWT = jwt.sign(infoJson, 'doublemom', {expiresIn:'1h'})
    return signatureJWT
}