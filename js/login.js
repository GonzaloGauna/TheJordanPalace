const form = document.querySelector("form");

form.addEventListener("submit", (e)=>{
    e.preventDefault;
    validation();
});

function validation(){
    let error = false;
    let messageError = "";

    const user = document.querySelector("#user");
    const password = document.querySelector("#password");


    if(user.value != localStorage.getItem('email')){
        error = true;
        messageError += "<p> Email no registrado </p>";
    }

    if(password.value != localStorage.getItem('password')){
        error = true;
        messageError += "<p> Contraseña incorrecta </p>";
    }

    if(error){
        document.querySelector("#message").innerHTML = messageError;
    }else{
        console.log("Ha iniciado sesion correctamente");
        form.submit();
    }
}