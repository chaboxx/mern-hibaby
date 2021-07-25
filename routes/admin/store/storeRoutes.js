
const express = require("express");


const router = express.Router();

const { check } = require("express-validator");
const validarCamposAdmin = require("../../../middlewares/admin/mw_admin");


const { ObtenerProductos,CrearNuevoProducto,ActualizarProducto,EliminarProducto,AñadirImagenesProducto,ObtenerProducto ,AnadirVenta, leerVentas} = require("../../../controllers/store/store");
const { validarAJwt } = require("../../../middlewares/admin/validar-ajwt");
const upload = require("../../../helpers/admin/multer");





//TOdas tienen que pasar por la validacion del JWT


//Obtener Productos

router.get("/",


        validarAJwt, 

        ObtenerProductos);



//Obtener producto por Id

router.post("/ver",
        validarAJwt,
        ObtenerProducto
        )

router.post("/new",
        [
            check("nombre","El nombre es obligatorio"),
            check("categoriaGeneral","Categoria general es obligatorio"),
            //check("id","El id es obligatorio").not().isEmpty(),
            check("descripcion","La descripcion es obligatoria"),
            check("materiales","Campo obligatorio."),
            check("genero","Campo obligatorio"),
            check("sku","Campo obligatorio"),
            check("linkStore","Campo obligatorio"),          
            check("precio_mayor","Campo obligatorio"),
            check("precio","Campo obligatorio."),
            check("categoria","Campo obligatorio."),
            check("stockTotal","Campo obligatorio"),
            check("colores","Campo obligatorio"),          
            //check("tallas","Campo obligatorio"),          
           
            //check("stock","El stock es necesario."),
            validarCamposAdmin
        ],
        validarAJwt,
        //subirImagenes,
        upload.any(),
        CrearNuevoProducto);

//Añadir imagenes
router.put("/new/:id",validarAJwt,upload.any(),AñadirImagenesProducto)

// Actualizar evento    
router.put("/:id",validarAJwt,ActualizarProducto);

// POSTEAR VENTAS
router.post("/new-venta",validarAJwt,AnadirVenta)

//LEER VENTAS
router.get("/ver-ventas",validarAJwt,leerVentas)

//Borrar evento

router.delete("/:id",validarAJwt,EliminarProducto);



module.exports=router;






