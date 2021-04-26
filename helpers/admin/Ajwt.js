const jwt = require("jsonwebtoken");


const generarAJwt = (user_admin,contraseña_admin) =>{

    return new Promise((resolve,reject) =>{

        const payload = {user_admin,contraseña_admin};

        jwt.sign(payload,"estoes_u_palabra_extreña_parael_admin;rgrc",{

            expiresIn:"3h"
        
        
        },(err,token) =>{
            
            if (err){

                console.log(err);
                reject("No se pudo generar el token");
            }
            resolve(token);
        })
        
    })
}

module.exports={
    generarAJwt
}