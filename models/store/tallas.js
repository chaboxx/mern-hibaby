
const {Schema,model} = require("mongoose");





const tallasSchema =  new Schema({
    nombreTalla:String,
    
    stock: Number,

})


//const Tallas = model("TallasSchema",tallasSchema);

module.exports=model("tallas",tallasSchema);

