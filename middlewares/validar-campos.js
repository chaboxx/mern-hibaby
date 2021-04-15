
const { response } = require("express");
const { validationResult } = require("express-validator");

const validarCampos = (req,res=response,next) =>{

    //Le debes dar el req
    const errors = validationResult(req);

    if (!errors.isEmpty()){

        return res.status(400).json({
            ok:false,
            errors:errors.mapped()
        })
    }
    
    next();

}


module.exports=validarCampos;
