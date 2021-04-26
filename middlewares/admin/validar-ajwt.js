const {response} = require("express");

const jwt = require("jsonwebtoken");



const validarAJwt= (req,res,next) =>{

    //X-TOKEN HEADERS

    const token = req.header("x-token");

    if ( !token){
        return res.status(401).json({
            ok:false,
            msg:"No hay token en la peticion"
        });

    }

    try {

        const {user_admin,contraseña_admin}= jwt.verify(
            token,
            "estoes_u_palabra_extreña_parael_admin;rgrc"
        )

        req.user_admin=contraseña_admin;    
        req.contraseña_admin=contraseña_admin;

    }catch(error){

        return res.status(401).json({
            ok:false,
            msg:"Token no valido"
        })

    }



    next();
}   

module.exports={
    validarAJwt
}