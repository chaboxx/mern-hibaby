

//const {modeloCategoria} = require("./categoria");

//const {modeloGenero} = require("./genero");

const {Schema,model} =require("mongoose");

//const Genero = model(modeloGenero);

//const Categoria = model(modeloCategoria);
//const ColoresSchema = require("./colores");

//const CategoriaSchema = require("./categoria");

//const CategoriaSchema = model('CategoriaSchema');


require("dotenv");

const productoSchema =  new Schema({
    
    categoriaGeneral:String,
    nombre:String,
    //id:String,
    descripcion:String,
    materiales:String,
    precio:Number,
    
    categoria:[String],

    image: String,

    tallas:[String],

    genero:String,

    stock:Number,

    user:{
        type:Schema.Types.ObjectId,
        ref:"UsuarioAdmin",
    }
})

productoSchema.methods.setImgUrl= function setImgUrl(filename){
    const port = process.env.PORT || 4000; 
    this.image = `http://localhost:4000/assets/${filename}`
}

productoSchema.method("toJSON",function(){
    const {__v,_id,...object} = this.toObject();

    object.id=_id;
    return object;
})




//const modeloProducto = model("ProductoSchema",productoSchema)

module.exports=model("ProductoSchema",productoSchema)
