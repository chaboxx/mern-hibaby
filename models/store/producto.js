

//const {modeloCategoria} = require("./categoria");

//const {modeloGenero} = require("./genero");

const {Schema,model} =require("mongoose");

//const Genero = model(modeloGenero);

//const Categoria = model(modeloCategoria);
//const ColoresSchema = require("./colores");

//const CategoriaSchema = require("./categoria");

//const CategoriaSchema = model('CategoriaSchema');

const colores = require("./colores");

require("dotenv");

const productoSchema =  new Schema({
    
    nombre:String,
    categoriaGeneral:String,
  
    descripcion:String,
    materiales:[String],
    
    sku:String,

    linkStore:String,

    
    
    precioMayor:Number,
    
    precio:Number,
    
    categoria:[String],

  
    
    colores:[
        {
            type:Schema.Types.ObjectId,
            ref:"colores"
        }
    ]
    

})

productoSchema.methods.setImgUrl= function setImgUrl(filename){
    const port = process.env.PORT || 4000;


 
    
}

productoSchema.method("toJSON",function(){
    const {__v,_id,...object} = this.toObject();

    object.id=_id;
    return object;
})




//const modeloProducto = model("ProductoSchema",productoSchema)

module.exports=model("ProductoSchema",productoSchema)
