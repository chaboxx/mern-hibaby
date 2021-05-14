    const { Router, response } = require("express");
const { check } = require("express-validator");
const {LoginSuperUsuario,CrearSuperUsuario} = require("../../controllers/admin/c_admin");
const validarCamposAdmin = require("../../middlewares/admin/mw_admin");


const router = Router();

/////////////////////--------- ADMINISTRACION------
router.post("/login",
        [
            check("user_admin","User incorrecto").not().isEmpty(),
            check("contraseña_admin","Admin incorrecto").not().isEmpty(),
            validarCamposAdmin
        ],  
        LoginSuperUsuario
        );

router.post("/new-admin",
            [
                check("user_admin","User incorrecto").not().isEmpty(),
                check("contraseña_admin","Admin incorrecto").not().isEmpty(),
                validarCamposAdmin
            ],

            CrearSuperUsuario    
        );
    
        


   


module.exports=router;