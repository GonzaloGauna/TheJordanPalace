const form = document.querySelector("form");
let regexPasswordValid = /^(([A-Z])+\w+([0-9])+)+\w+$/;
let regexEmail = /^[0-9a-zA-Z._.-]+\@[0-9a-z._.-]+\.[a-z]+$/;

form.addEventListener("submit", (e)=>{
    e.preventDefault();
    validation();
});

function validation(){
    let error = false;
    let messageError = "";
    const email = document.querySelector("#email");
    const name = document.querySelector("#name");
    const surname = document.querySelector("#surname");
    const password = document.querySelector("#password");
    const repeatPassword = document.querySelector("#repeatPassword");

    const user = {
        "email": email.value,
        "password": password.value,
        "name": name.value,
        "surname": surname.value
    }


     if(!regexEmail.test(document.querySelector("#email").value)){
        error = true;
        messageError += "<p> El email tiene que tener un formato valido </p>";
     }

    if(email.value == ""){
        error = true;
        messageError += "<p> El campo email es obligatorio </p>";
    }

    if (name.value.length == 0) {
        error = true;
        messageError += "<p>El campo nombre es obligatorio</p>";
    }

    if (surname.value.length == 0) {
        error = true;
        messageError += "<p>El campo apellido es obligatorio</p>"
    }

    if(password.value.length < 7){
        error = true;
        messageError += "<p> La contraseña debe tener al menos 7 caracteres </p>"
    }

    if(!regexPasswordValid.test(document.querySelector("#password").value)){
        error = true;
        messageError += "<p>La contraseña debe empezar por mayuscula y tener al menos un numero</p>"
    }

    if(password.value != repeatPassword.value){
        error = true;
        messageError += "<p> La contraseñas deben ser identicas </p>"
    }

    if(error){
        document.querySelector("#message").innerHTML = messageError;
        document.querySelector('#message').style.display = 'inline-block';
    }else{
        saveAccountObj(user);
        form.submit();
        window.location.href= 'file:///C:/Users/Gonza/Desktop/Universidad/TheJordanPalace/pages/login.html';
    }
}

function saveAccountObj(user){ 
    let myAccountArray = JSON.parse(localStorage.getItem("Usuarios"));
    if(myAccountArray == null){
        myAccountArray = [];
    }
    myAccountArray.push(user);
    //Convierto el array en Json
    let usuariosLocalStorage = JSON.stringify(myAccountArray);
    //Guardo la array de cuentas en formato json en el localstorage
    localStorage.setItem("Usuarios", usuariosLocalStorage);
}