const form = document.querySelector("form");

form.addEventListener("submit", (e)=>{
    e.preventDefault;
    validation();
});

function validation(){
    let error = false;
    let messageError = "";

    const email = document.querySelector("#email");
    const password = document.querySelector("#password");



    if(JSON.stringify(email.value) != localStorage.getItem("email")){
        error = true;
        messageError += "<p> Email no registrado </p>";
    }

    if(JSON.stringify(password.value) != localStorage.getItem("password")){
        error = true;
        messageError += "<p> Contraseña incorrecta </p>";
    }

    if(error){
        document.querySelector("#message").innerHTML = messageError;
        document.querySelector('#message').style.display = 'inline-block';
    }else{
        form.submit();
        window.location.href = 'file:///C:/Users/Gonza/Desktop/Universidad/TheJordanPalace/index.html';
    }
}