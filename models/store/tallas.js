
const {Schema,model} = require("mongoose");





const tallasSchema =  new Schema({
    tallas:[String]

})


//const Tallas = model("TallasSchema",tallasSchema);

module.exports=model("TallasSchema",tallasSchema);

