

// let signUp = document.getElementById("signUp");
// let signIn = document.getElementById("signIn");
// let nameInput = document.getElementById(nameInput);
// let title = document.getElementById("title");
const button = document.getElementById("boton-mostrar");
const textoOculto = document.getElementById("hideText");

// signIn.onclick = function() {
//     nameInput.style.maxHeight = "0";
//     title.innerHTML = "login";
//     signUp.classList.add("disable");
//     signIn.classList.remove("disable");

// }

// signUp.onclick = function() {
//     nameInput.style.maxHeight = "60px";
//     title.innerHTML = "Registro";
//     signUp.classList.remove("disable");
//     signIn.classList.add("disable");

//    }
    
button.addEventListener("click", e =>{
    console.log("click");
    textoOculto.classList.toggle("hide");
})