
const express= require("express");

require("dotenv");

const {dbConection} = require("./database/config");

const cors = require("cors");

//Crear el servidor de express

const app= express();

const multer = require("multer");


const path = require("path");
const storage_ = require("./helpers/admin/multer");


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


//-----------------------IMAGENES------------------------------------

//app.use(multer({storage:storage_}).single("image"));

    
app.use("/assets",express.static(`./client/storage/imgs`))


// Lectura y parseo del body

app.use( express.json() );




//                              Rutas , cuando refresheas la pagina!

// -----------RUTAS DE LA AUTENTICACION-----------------
app.use("/api/auth", require("./routes/auth"));


// ----------------TODO:: HACER LA CREACION DE EVENTOS EN EL BACKEND----------------
app.use("/api/events",require("./routes/events"));


// ------------TODO: CREACION DE LA TIENDA ----------

//----------------AUTENTICACION ADMIN

app.use("/admin/api/auth",require("./routes/admin/auth_admin"));

//----------------CRUD PRODUCTOS TIENDA


app.use("/admin/api",require("./routes/admin/store/storeRoutes"));





// Escuchar peticiones

app.listen(
    process.env.PORT || 4000,
    () =>{
        
        console.log(`Servidor Corriendo en puerto: ${process.env.PORT || 4000 } `)
    }
)





