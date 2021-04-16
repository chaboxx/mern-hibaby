
const express= require("express");

require("dotenv");

const {dbConection} = require("./database/config");

const cors = require("cors");

//Crear el servidor de express
const PORT =process.env.PORT

const app= express();


//BASE DE DATOS

dbConection();



//CORS
app.use(cors());


//Directorio publico

app.use( express.static("public"));


// Lectura y parseo del body

app.use( express.json() );




//Rutas , cuando refresheas la pagina!
app.use("/api/auth", require("./routes/auth"));

app.use("/api/events",require("./routes/events"));


// Escuchar peticiones

app.listen(
    process.env.PORT,
    () =>{
        console.log(`Servidor Corriendo en puerto: ${process.env.PORT} `)
    }
)





