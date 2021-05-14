
const {Schema,model}=require("mongoose");


const UsuarioAdminSchema = Schema({

    user_admin:{
        type:String,
        required:true,
        unique:true
    },
    contraseña_admin:{  
        type:String,
        required:true,
        unique:true
    }
});



module.exports=model("UsuarioAdmin",UsuarioAdminSchema)


