const form = document.querySelector("form");

const email = JSON.parse(localStorage.getItem('email'));
const password = JSON.parse(localStorage.getItem('password'));


form.addEventListener("submit", (e)=>{
    e.preventDefault;
    validation();
});

function validation(){
    let error = false;
    let messageError = "";

    const email = document.querySelector("#email");
    const password = document.querySelector("#password");


    if(email.value != email){
        error = true;
        messageError += "<p> Email no registrado </p>";
    }

    if(password.value != password){
        error = true;
        messageError += "<p> Contraseña incorrecta </p>";
    }

    if(error){
        document.querySelector("#message").innerHTML = messageError;
        document.querySelector('#message').style.display = 'inline-block';
    }else{
        form.submit();
        changeUrl();
    }
}


function changeUrl(){
    window.location.href = "file:///C:/Users/Gonza/Desktop/Universidad/TheJordanPalace/index.html";
}