
import {Schema,model} from "mongoose";



const categoriaSchema =  new Schema({
    nombre:String,
    
    descripcion:String,
})
    



export const modeloCategoria= model("CategoriaSchema",categoriaSchema);




    