


const {Schema,model} =require("mongoose");



const direccionSchema =  new Schema({
    
    provincia:String,

    distrito: String,

    direccion:String,

    numero:String,

    referencia:String,

    
    
    usuario:{
                type:Schema.Types.ObjectId,
                ref:"UsuarioWeb"
            }
    
    

})



module.exports=model("DireccionSchema",direccionSchema)
