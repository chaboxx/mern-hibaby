
const {Schema,model} = require("mongoose");



const stockSchema= new Schema({

    unidades_Stock:Number,



})

module.exports= model('stock', stockSchema);



