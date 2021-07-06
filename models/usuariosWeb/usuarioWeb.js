
const {Schema,model}=require("mongoose");


const usuarioWebSchema = Schema({

    email_usuario:{
        type:String,
        required:true,
        unique:true
    },
   
    contraseña_usuario:{  
        type:String,
        required:true,
        unique:true
    },    
    
    
});




module.exports=model("UsuarioWeb",usuarioWebSchema)










