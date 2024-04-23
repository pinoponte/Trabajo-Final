//1. importar las dependencia que vamos a usar
import express from "express";
import path from "path";
import dotenv from "dotenv";
import conexionMongo from "./src/config/baseDatos.js";
import usuarioRouter from "./src/routes/usuario.routes.js";




//2. CONFIGURAR NUESTRO SERVIDOR
const app = express();
const puerto = 9000;

//2.1 configurar las variables de entorno que me guarda contraseñas
dotenv.config();
//2.2 configurar conexion base de datos
conexionMongo();




//3.  ESTABLECER LA CONEXION CON NUESTRO FRONT
const rutaPublica = path.join(process.cwd(),"public");
app.use(express.static(rutaPublica));


app.use(express.json());
app.use("/api", usuarioRouter);
//especificamos que vamos a acceder a nuestro index.html
app.get("/", (req,res) => {
    res.sendFile(path.join(rutaPublica, "index.html" ))
});

//4. INICIALIZAMOS EL SERVIDOR
app.listen(puerto, () => {
    console.log(`El servidor está escuchando en http://localhost:${puerto}`);
});