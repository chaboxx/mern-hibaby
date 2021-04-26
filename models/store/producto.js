

//const {modeloCategoria} = require("./categoria");

//const {modeloGenero} = require("./genero");

const {Schema,model} =require("mongoose");

//const Genero = model(modeloGenero);

//const Categoria = model(modeloCategoria);
//const ColoresSchema = require("./colores");

//const CategoriaSchema = require("./categoria");

//const CategoriaSchema = model('CategoriaSchema');

const productoSchema =  new Schema({
    
    categoriaGeneral:String,
    nombre:String,
    id:String,
    descripcion:String,
    materiales:String,
    precio:Number,
    
    categoria:{
        type:Schema.Types.ObjectId,
        ref:"CategoriaSchema"
    },
    colores_imagenes:{

        type:Schema.Types.ObjectId,
        ref: "ColoresSchema",
    }


})

//const modeloProducto = model("ProductoSchema",productoSchema)

module.exports=model("ProductoSchema",productoSchema)
