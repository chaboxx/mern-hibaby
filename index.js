
const express= require("express");

require("dotenv");

const {dbConection} = require("./database/config");

const cors = require("cors");

//Crear el servidor de express

const app= express();


//BASE DE DATOS
//----------CONEXION A LA BASE DE DATOS CREADA EN MONGODB---------

dbConection();



//CORS
app.use(cors());


//Directorio publico
//DIRECTORIO DE EL FRONT-END
app.use( express.static("./client/public"));


//------------------Directorio del admin--------------------



app.use("/admin-hi-baby",express.static("./client/admin"))



// Lectura y parseo del body

app.use( express.json() );


//imagenes---

app.use("/assets",express.static("./client/storage/imgs"))


//                              Rutas , cuando refresheas la pagina!

// -----------RUTAS DE LA AUTENTICACION-----------------
app.use("/api/auth", require("./routes/auth"));


//------------RUTAS DEL STORE PARA EL FRONTEND ----------------

app.use("/api/store",require("./routes/store"));


// ----------------TODO:: HACER LA CREACION DE EVENTOS EN EL BACKEND----------------
app.use("/api/events",require("./routes/events"));


// ------------TODO: CREACION DE LA TIENDA ----------

app.use("/admin/api/auth",require("./routes/admin/auth_admin"));



app.use("/admin/api",require("./routes/admin/store/storeRoutes"));





// Escuchar peticiones

app.listen(
    process.env.PORT || 4000,
    () =>{
        
        console.log(`Servidor Corriendo en puerto: ${process.env.PORT || 4000 } `)
    }
)





