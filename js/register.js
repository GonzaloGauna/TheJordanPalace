const form = document.querySelector("form");
let regexEmail = /^[0-9a-zA-Z._.-]+\@[0-9a-z._.-]+\.[a-z]+$/;

form.addEventListener("submit", (e)=>{
    e.preventDefault();
    validation();
});

function validation(){
    let error = false;
    let menssageError = "";
    const email = document.querySelector("#email");
    const name = document.querySelector("#name");
    const surname = document.querySelector("#surname");
    const password = document.querySelector("#password");
    const repeatPassword = document.querySelector("#repeatPassword");

    if(!regexEmail.test(document.querySelector("#email").value)){
        error = true;
        menssageError += "<p> El email tiene que tener un formato valido </p>";
    }

    if(email.value == ""){
        error = true;
        menssageError += "<p> El campo email es obligatorio </p>";
    }

    if (name.value.length == 0) {
        error = true;
        menssageError += "<p>El campo nombre es obligatorio</p>";
    }

    if (surname.value.length == 0) {
        error = true;
        menssageError += "<p>El campo apellido es obligatorio</p>"
    }

    if(password.value.length < 7){
        error = true;
        menssageError += "<p> La contraseña debe tener al menos 7 caracteres </p>"
    }

    if(password.value != repeatPassword.value){
        error = true;
        menssageError += "<p> La contraseñas deben ser identicas </p>"
    }

    if(error){
        document.querySelector("#message").innerHTML = menssageError;
        document.querySelector('#message').style.display = 'inline-block';
    }else{
        console.log("el form se mando");
        form.submit();
    }
}