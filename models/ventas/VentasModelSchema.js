

const {Schema,model} =require("mongoose");

require("dotenv");

const ventasSchema =  new Schema({
    
    fechaVenta:String,
    productoVendido:{
        type:Schema.Types.ObjectId,
        ref:"ProductoSchema"
    },

    colorProductoVendido:{
        type:Schema.Types.ObjectId,
        ref:"colores"
    },

    tallaProductoVendido:{
        type:Schema.Types.ObjectId,
        ref:"tallas"
    },
    cantidadVendida:Number,

    


})



module.exports=model("ventasSchema",ventasSchema)







