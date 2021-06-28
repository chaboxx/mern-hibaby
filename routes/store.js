
const { Router} = require("express");

const ObtenerProductosFront = require("../controllers/store");


const router = Router();

/////////////////////--------- ADMINISTRACION------
router.get("/",
        ObtenerProductosFront
        );

   


module.exports=router;














