

const {Schema,model} = require("mongoose");
//const TallasSchema = require("./tallas");

const generoSchema =  new Schema({
    
    genero:[String],
    tallas:{
        type:Schema.Types.ObjectId,
        ref:"TallasSchema"
    }

    

})


//const modeloGenero= model("GeneroSchema",generoSchema);

module.exports=model("GeneroSchema",generoSchema);


