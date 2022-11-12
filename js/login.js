const form = document.querySelector("form");

let listaDeUsuariosRegistrados = JSON.parse(localStorage.getItem("Usuarios"));

form.addEventListener("submit", (e)=>{
    e.preventDefault;
    validation();
})

function validation() {
    let email = document.querySelector("#email");
    let password = document.querySelector("#password");

    listaDeUsuariosRegistrados.forEach( usuario =>{
        if(usuario.email == email.value && usuario.password == password.value){
            alert('Ingresando....');
            form.submit();
        }else {
            alert('Usuario o contraseña invalidos');
        }
    });
}