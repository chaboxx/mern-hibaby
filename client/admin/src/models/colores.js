

import {Schema,model} from "mongoose";
import { modeloCategoria } from "./categoria";
import { modeloGenero } from "./genero";


const Genero = model(modeloGenero);

const Categoria = model(modeloCategoria);


const coloresSchema =  new Schema({
    colroes:{
        type:String,
        
    },
    


})

export const modeloProducto = model("ProductoSchema",productoSchema)


