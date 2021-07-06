
const {Schema,model} =require("mongoose");





const  UsuarioWeb= require("../usuariosWeb/usuarioWeb");

const ProductoSchema = require("../store/producto");



const carritoWebSchema =  new Schema({
    
    productos:[{
        type:Schema.Types.ObjectId,
        ref:"ProductoSchema"
    }],
    
    propietarioCarrito:{
        type:Schema.Types.ObjectId,
        ref:"UsuarioWeb"
    }

  

})


module.exports=model("carritoWebSchema",carritoWebSchema)
