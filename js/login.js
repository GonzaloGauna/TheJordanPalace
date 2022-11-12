const form = document.querySelector("form");
let listaDeUsuariosRegistrados = JSON.parse(localStorage.getItem("Usuarios"));
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let button = document.getElementById('button');

form.addEventListener("submit", (e)=>{
    e.preventDefault;
    enableButton(password);
    validation();
})

function enableButton(password) {
    if(password.value != ''){
        button.disabled = false;
    }else{
        button.disabled = true;
    }
}


function validation() {
    listaDeUsuariosRegistrados.forEach( usuario =>{
        if(usuario.email == email.value && usuario.password == password.value){
            alert('Ingresando....');
            form.submit();
        }else {
            alert('Usuario o contraseña invalidos');
        }
    });
}