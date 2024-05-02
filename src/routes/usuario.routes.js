//importamos dependencias
// las rutas nos conectan con la logica de programacion, este from esta en el servidor
import express from "express";
import { getUsuario, postUsuario, putUsuario, deleteUsuario } from "../controllers/usuario.controller.js";

//definir una variable para nuestras rutas
const usuarioRouter = express. Router();

//definimos nuestras rutas especificas
usuarioRouter.get("/obtenerUsuario", getUsuario);

//ruta para crear usuarios
usuarioRouter.post("/crearUsuario", postUsuario);

// ruta para modificar usuarios por su id -> identificador unico
usuarioRouter.put("/modificarUsuario/:_id", putUsuario);

//ruta para eliminar usuarios por su id
usuarioRouter.delete("/eliminarUsuario/:_id", deleteUsuario);

//exportamos las rutas

export default usuarioRouter;



