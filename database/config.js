const mongoose = require("mongoose");


const dbConection = async() =>{

    try{
        
        await mongoose.connect('mongodb+srv://chaboxx:muerte123@backendhibaby.harcr.mongodb.net/test', 
        {   useNewUrlParser: true, 
            useUnifiedTopology: true,
            useCreateIndex:true
        
        });

        console.log("DB Online")
    
    }catch (error){
        console.log(error);
        throw new Error("Error a la hora de inicializar BBDD")
    }

}

module.exports={
    dbConection
};


