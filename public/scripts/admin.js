

//verificamos la conexion con html
console.log("hola, soy la pagina de admin");



// creamos una funcion para obtener los datos de mi base de datos

const mostrarUsuarios = async () =>{

    try{
        const respuesta = await fetch("http://localhost:9000/api/obtenerUsuario");

        const usuarios = await respuesta.json();
        console.log(usuarios);
        mostrarTabla(usuarios);
    }catch(error){
        console.error("error al obtener los usuario", error);
    }
}
    function mostrarTabla(usuarios){
    const tabla = document.getElementById("miTabla");
    tabla.innerHTML = "";

    usuarios.forEach(usuario => {
        tabla.innerHTML += `
        <tr>
                <td>${usuario.nombreCompleto}</td>
                <td>${usuario.correo}</td>
                <td>
                    <button type="button" class="btn btn-danger" id="${usuario._id}" onclick="eliminarUsuario(event)" ><i class="bi bi-trash3"></i>Eliminar</button>
                </td>
              </tr>
        
        `
    });
        
    }
        
 

    mostrarUsuarios();

//funcion para eliminar usuarios por id
function eliminarUsuario(event) {

    console.log("eliminar");

    const idUsuarioEliminar = event.target.id;
    console.log(idUsuarioEliminar);

    fetch(`http://localhost:9000/api/eliminarUsuario/${idUsuarioEliminar}`, {method:"DELETE"} ).then(
        response => {
            if(!response.ok){
            console.error("error... no se pudo eliminar el usuario");
            }else {

            alert("usuario eliminado correctamente");
            mostrarUsuarios();
        }
    }).catch(error => {
        console.log("error al eliminar usuario", error);
    });
     
    
}

