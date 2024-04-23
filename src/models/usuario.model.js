//lo primero que hacemos es importar lad dependencias que necesitamos usar
import mongoose from "mongoose";

const schema = mongoose.Schema;


//ahora nos creamos nuestro esquema de datos que es lo que vamos a guardar en nuestra base de datos. estructura
const usuarioSchema = new schema({
nombreCompleto:{
    type: String,
    required: true
},
correo:{
    type:String,
    required: true

},
contrasena:{
    type:String,
    required:true
}
});
// yo quiero enviar la plantilla a nuestra base de datos, porlo cual debemos crear nuestro modelo
const usuarioModel = mongoose.model("usuario", usuarioSchema);

// eportamos nuestro modelo
export default usuarioModel;

