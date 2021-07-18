

const ProductoSchema=require("../models/store/producto");

const ObtenerProductosFront =async (req,res) =>{

    
    const productos = await ProductoSchema.find({}).populate({
        path:"colores",
        populate:{
            path:"tallas"
        }
    })

    let productosGo = {
        ...productos,
        precioMayor:0
    }

    res.json({
        ok:true,
        msg:"Obtener Productos",
        productosGo,
        
    
    })

}


module.exports=ObtenerProductosFront;