
import jwt, { decode } from "jsonwebtoken"

const createToken=(userInfo)=>{
    // el token expira en 1h
    return jwt.sign(userInfo, 'secret_key',{expiresIn:'1h'})
}

const verify=(req, res, next)=>{
    const authHeader=req.headers.authorization 
    // se almacena el codigo

    if(!authHeader || !authHeader.startsWith('Bearer')){
        return res.status(401).json({message: "Token ni proporcionado"})
    }

    const token= authHeader.split(' ')[1]
    
    jwt.verify(token, 'secret_key',(err, decoded)=>{
        if(err){
            return res.status(403).json({message:"Fallo al autentificar"})
        }
        req.user=decoded
        next()
    })
}

export{
    createToken,
    verify
}


