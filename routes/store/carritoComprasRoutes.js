
const { Router} = require("express");
const { CarritoComprasCatalogo, AgregarProductoCarritoCompras, EliminarProductoCarritoCompras, CrearCarritoCompras } = require("../../controllers/carrito/carritoComprasControllers");



const router = Router();


//CREAR CARRITO DE COMPRAS

router.post("/crear-carrito",CrearCarritoCompras)

// MOSTRAR PRODUCTOS DEL CARRITO DE COMPRAS FRONT END
router.post("/", CarritoComprasCatalogo)

// AGREGAR UN PRODUCTO AL CARRITO DE COMPRAS
router.post("/agregar-producto", AgregarProductoCarritoCompras)


// ELIMINAR UN PRODUCTO DEL CARRITO DE COMPRAS


router.delete("/",EliminarProductoCarritoCompras)

   


module.exports=router;














