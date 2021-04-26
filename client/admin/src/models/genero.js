

import {Schema,model} from "mongoose";
const Tallas = require("tallasSchema");

const generoSchema =  new Schema({
    
    genero:[String],
    tallas:{
        type:mongoose.Schema.ObjectID,
        ref:"Tallas"
    }

    

})


export const modeloGenero= model("GeneroSchema",generoSchema);




