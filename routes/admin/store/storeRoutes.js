
const express = require("express");


const router = express.Router();

const { check } = require("express-validator");
const validarCamposAdmin = require("../../../middlewares/admin/mw_admin");


const { ObtenerProductos,CrearNuevoProducto,ActualizarProducto,EliminarProducto } = require("../../../controllers/store/store");
const { validarAJwt } = require("../../../middlewares/admin/validar-ajwt");
const upload = require("../../../helpers/admin/multer");




//TOdas tienen que pasar por la validacion del JWT


//Obtener Productos

router.get("/",


        validarAJwt, 

        ObtenerProductos);


//Crear nuevo evento




router.post("/new",
        [
            check("categoriaGeneral","Categoria general es obligatorio"),
            check("nombre","El nombre es obligatorio"),
            //check("id","El id es obligatorio").not().isEmpty(),
            check("descripcion","La descripcion es obligatoria"),
            check("materiales","Campo obligatorio."),
            check("precio","Campo obligatorio."),
            check("categoria","Campo obligatorio."),
            check("image","Campo obligatorio"),          
            check("tallas","Campo obligatorio"),          
           
            check("genero","Campo obligatorio"),          
            check("stock","El stock es necesario."),
            validarCamposAdmin
        ],
        upload.single("image"),
        validarAJwt,
        CrearNuevoProducto);



// Actualizar evento

router.put("/:id",validarAJwt,ActualizarProducto);

//Borrar evento

router.delete("/:id",validarAJwt,EliminarProducto);



module.exports=router;






