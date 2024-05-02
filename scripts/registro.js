// 1. verificar conexion con html
console.log("holaaa soy registro")
// 2. crear mi funcion para registro
const registrarUsuario = async () =>{

    // obtener los datos de mi formulario

  const nombreCompleto = document.getElementById("nombreCompleto").value;
  const correo = document.getElementById("correo").value;
  const contrasena = document.getElementById("contrasena").value;

  console.log(nombreCompleto, correo, contrasena);

  //crear un objeto con los datos de usus
  const datosUsuario = {
    nombreCompleto,
    correo,
    contrasena
  }
}