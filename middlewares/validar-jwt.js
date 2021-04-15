const {response} = require("express");

const jwt = require("jsonwebtoken");



const validarJwt= (req,res,next) =>{

    //X-TOKEN HEADERS

    const token = req.header("x-token");

    if ( !token){
        return res.status(401).json({
            ok:false,
            msg:"No hay token en la peticion"
        });

    }

    try {

        const {uid,name}= jwt.verify(
            token,
            "estoes_u_palabra_extreña;rgrc"
        )

        req.uid=uid;    
        req.name=name;

    }catch(error){

        return res.status(401).json({
            ok:false,
            msg:"Token no valido"
        })

    }



    next();
}   

module.exports={
    validarJwt
}