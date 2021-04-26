

const {Schema,model} =require("mongoose");

//const GeneroSchema =require("./genero");


//const Genero = model(modeloGenero);

//const Categoria = model(modeloCategoria);


const coloresSchema =  new Schema({
    colores:{
        type:String,
        required:true
    },
    genero:{
        type:Schema.Types.ObjectId,
        ref:"GeneroSchema"
    }


})

//const Colores = model("ColoresSchema",coloresSchema)

module.exports=model("ColoresSchema",coloresSchema);
