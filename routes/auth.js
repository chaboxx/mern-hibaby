const {Router}= require("express");
const { check } = require("express-validator");

const router= Router();

const {crearUsuario,login,renovarUsuario} = require("../controllers/auth");

const validarCampos = require("../middlewares/validar-campos");

const {validarJwt} = require("../middlewares/validar-jwt");

router.post("/new",
            [ //Midlewares
                check("name","El nombre es obligatorio").not().isEmpty(),
                check("email","Email incorrecto").isEmail(),
                check("password","Contraseña incorrecta").isLength({min:4,max:20}),
                validarCampos
            ],  
            crearUsuario)



router.get("/renew",
            validarJwt,
            renovarUsuario)


router.post("/",
            [
                check("email","Email incorrecto").isEmail(),
                check("password","Contraseña incorrecta").isLength({min:6}),
                validarCampos
            ],
            login)



module.exports=router;



