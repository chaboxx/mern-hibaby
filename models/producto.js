

const {Schema,model}=require("mongoose");


const ProductoSchema = Schema({

    nombre_producto:{
        type:String,
        require:true
    },
    descripcion:{
        type:String,
        require:true,
        unique:true
    },
    precio:{
        type:Float64Array,
        require:true
    },
    imagenes:{
        
    }
});



module.exports=model("Usuario",UsuarioSchema)







