

import {Schema,model} from "mongoose";
import { modeloCategoria } from "./categoria";
import { modeloGenero } from "./genero";


const Genero = model(modeloGenero);

const Categoria = model(modeloCategoria);


const productoSchema =  new Schema({
    nombre:String,
    id:String,
    descripcion:String,
    materiales:String,
    precio:Number,
    genero:[String],
    categoria:{
        type:Schema.ObjectId,
        ref:Categoria
    },
    colores_imagenes:{

        type:Schema.ObjectId,
        ref: Genero
    }


})

export const modeloProducto = model("ProductoSchema",productoSchema)


