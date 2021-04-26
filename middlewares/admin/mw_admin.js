

const {validationResult} = require("express-validator");



const validarCamposAdmin = (req,res,next) =>{

    const errors = validationResult(req);


    if (!errors.isEmpty()){

        return res.status(400).json({
            ok:false,
            errors:errors.mapped()
        })

    }

    next();

}


module.exports= validarCamposAdmin;