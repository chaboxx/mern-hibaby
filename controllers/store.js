

const ProductoSchema=require("../models/store/producto");

const ObtenerProductosFront =async (req,res) =>{

    
    const productos = await ProductoSchema.find({}).populate({
        path:"colores",
        populate:{
            path:"tallas"
        }
    })


    res.json({
        ok:true,
        msg:"Obtener Productos",
        productos
    
    })

}


module.exports=ObtenerProductosFront;