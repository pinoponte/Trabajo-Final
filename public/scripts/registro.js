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
  
  console.log(datosUsuario);
// hacemos la peticion para POST para crear usuario en nuestra base de datos
  try{

    // aca estamos creando el usuario en la base de datos
    const respuesta = await fetch("http://localhost:9000/api/crearUsuario",
      {
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(datosUsuario)
      }
    );

    const nuevoUsuario = await respuesta.json();
    console.log("usuario creado exitosamente", nuevoUsuario);


    //hacemos un condicional para redireccionar a ingreso html
    if(nuevoUsuario){
      alert("Registro Exitoso");
      window.location.href = "./ingreso.html"
    } else{
      alert("Upsss error de registro, intentelo nuevamente");
    }
    
  }catch(error){
    console.error("error al registrar el usuario");
  }
}  
