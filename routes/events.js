const { Router } = require("express");
const { validarJwt } = require("../middlewares/validar-jwt");

const router = Router();


const { getEventos, crearEvento, actualizarEvento, eliminarEvento } = require("../controllers/events");
const { check } = require("express-validator");
const validarCampos = require("../middlewares/validar-campos");

const {isDate}= require("../helpers/isdate");






//TOdas tienen que pasar por la validacion del JWT
//obtener eventos

router.get("/",validarJwt, getEventos);


//Crear nuevo evento

router.post("/",
        [
            check("title","El titulo es obligatorio").not().isEmpty(),
            check("start","Fecah de inicio es obligatoria").custom(isDate),
            check("end","Fecha de fin es obligatoria").custom(isDate),
            validarCampos
        ],
        validarJwt,
        crearEvento);



// Actualizar evento

router.put("/:id",validarJwt,actualizarEvento);

//Borrar evento

router.delete("/:id",validarJwt,eliminarEvento);



module.exports=router;

