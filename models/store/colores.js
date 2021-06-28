

const {Schema,model} = require("mongoose");
//const TallasSchema = require("./tallas");

const ColoresSchema = new Schema({



    urlImagenes:[String],
    
    genero:String,

    tallas:[{
        type:Schema.Types.ObjectId,
        ref:"tallas"
    }]
    
});
 
 
module.exports= model('colores', ColoresSchema);

