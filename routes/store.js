
const { Router} = require("express");

const ObtenerProductosFront = require("../controllers/store");


const router = Router();



router.get("/",
        ObtenerProductosFront
        );

   


module.exports=router;














