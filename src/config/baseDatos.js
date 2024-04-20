//Importamos las dependencias que necesitamos
import mongoose from "mongoose";
// creamos una funcion que nos conecte la base de datos
const conexionMongo = async() => {
    await mongoose.connect(process.env.BD_URL,{})
    try{
        console.log("conexion exitosa");
    } catch(error){
        console.log("error de conexion:", error.menssage);
    }
}
export default conexionMongo;
