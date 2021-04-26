


const {Schema,model}=require("mongoose");

const categoriaSchema =  new Schema({
    nombreCategoria:String
})
    
    



//const modeloCategoria= model("CategoriaSchema",categoriaSchema);

module.exports=model("CategoriaSchema",categoriaSchema);



    