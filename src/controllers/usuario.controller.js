//importamos dependencias, lo que necesitemos para el funcionamiento del codigo
import usuarioModel from "../models/usuario.model.js";



//importamos dependencias -> lo que necesitemos para el funcionamiento del código




/*
    ->PETICIONES
    GET -> me muestra mis usuarios
    POST -> crear usuarios
    PUT -> Me modifica mis usuarios
    DELETE -> Me elimina mis usuarios
*/


//Prueba inicial

//LÓGICA PARA MOSTRAR USUARIOS
export const getUsuario = async(req, res) => {
    
    //manejo de errores con try y catch
try{
let usuarios = await usuarioModel.find();
return res.send(usuarios);
}catch(error){
return res.json({error: "error al mostrar los datos" + error});
}
}
//logica para crear usuarios

export const postUsuario = async(req, res) => {
    
//Manejo de errores con Try y catch
try{
let datosUsuario = req.body;
let nuevoUsuario = await usuarioModel.create(datosUsuario);
return res.json(nuevoUsuario);  
}catch(error){
return res.json({error: "error al crear el usuario", message:error.message});
}
}
// Logica para modificar usuarios
export const putUsuario = async(req, res) => {
    
    try {
let datosModificar = req.body
let idModificar = req.params._id;
await usuarioModel.findByIdAndUpdate(idModificar, datosModificar);
return res.json({message:"usuario actualizado correctamente"});
    }catch(error){
        return res.json({error: "error al modificar el usuario", message:error.message});   
    }
}
//logica para eliminar usuarios
export const deleteUsuario = async(req, res) =>{
    
try {
    let idEliminar = req.params._id;
    
    let usuarioEliminado = await usuarioModel.findByIdAndDelete(idEliminar);
    console.log(usuarioEliminado)
    if(usuarioEliminado==true){
        return res.json({message: "usuario eliminado correctamente"});
    } else{
        return res.json({message: "Ups... no se pudo eliminar ese usuario"});
    }
}
catch(error){
    return res.json({error: "error al eliminar el usuario", message:error.message});
}
}


