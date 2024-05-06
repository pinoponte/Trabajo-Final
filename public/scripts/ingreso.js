const iniciarSesion = async () => {

    //1. Obtener los valores ingresados por el usuario
    const correo = document.getElementById('correo').value;
    const contrasena = document.getElementById('contrasena').value;

    console.log(correo, contrasena);//verificamos conexion con html

    console.log("holaaa, soy ingreso");

//crear mi funcion

    try {

        // vamos a realizar la peticion GET  a nuestra base de datos
    const respuesta = await fetch("http://localhost:9000/api/obtenerUsuario");

    const usuario = await respuesta.json();
    console.log(usuario);

    //Verificar si se encontro un usuario con el correo y la contraseña dados

     const esUsuarioRegistrado = usuarios.find(usuario => usuario. correo == correo && usuario.contrasena == contrasena);


        if(esUsuarioRegistrado) {

            //verificamos si es administrador
            const correoAdmin = "Méndez98@gmail.com";

            if(esUsuarioRegistrado.correo == correoAdmin ){
                alert("Holaaa administrador");
                window.location.href ="./admin.html"
            } else{
                alert("ingreso exitoso");
                window.location.href = "./index.html"
            }

            
        }else{
            alert("correo o contraseña incorrectos. Usuario no encontrado! vuelve a intentarlo o registrate ");

        }

    }catch(error){
        console.error("error al verificar inicio de sesion:", error);
    }    
     
}