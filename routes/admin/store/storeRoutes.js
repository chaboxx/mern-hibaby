
const express = require("express");


const router = express.Router();

const { check } = require("express-validator");
const validarCamposAdmin = require("../../../middlewares/admin/mw_admin");


const { ObtenerProductos,CrearNuevoProducto,ActualizarProducto,EliminarProducto } = require("../../../controllers/store/store");
const { validarAJwt } = require("../../../middlewares/admin/validar-ajwt");




//TOdas tienen que pasar por la validacion del JWT


//Obtener Productos

router.get("/",


        validarAJwt, 

        ObtenerProductos);


//Crear nuevo evento

router.post("/new",
        [
            check("nombre","El nombre es obligatorio").not().isEmpty(),
            check("id","El id es obligatorio").not().isEmpty(),
            check("descripcion","La descripcion es obligatoria").not().isEmpty(),
            check("materiales","Campo obligatorio.").not().isEmpty(),
            check("precio","Campo obligatorio.").not().isEmpty().isNumeric(),
            check("categoria","Campo obligatorio."),
            check("colores_imagenes","Campo obligatorio"),          
           
            
            validarCamposAdmin
        ],
        validarAJwt,
        CrearNuevoProducto);



// Actualizar evento

router.put("/:id",validarAJwt,ActualizarProducto);

//Borrar evento

router.delete("/:id",validarAJwt,EliminarProducto);



module.exports=router;






