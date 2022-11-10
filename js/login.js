const form = document.querySelector("form");
let listaDeUsuariosRegistrados = JSON.parse(localStorage.getItem("Usuarios"));


form.addEventListener("submit", (e)=>{
    e.preventDefault;
    validation();
});

function validation(){
    let error = false;
    let messageError = "";

    const email = document.querySelector("#email");
    const password = document.querySelector("#password");

    listaDeUsuariosRegistrados.forEach(usuario => {
        
        if(usuario.email != email){
        error = true;
        messageError += "<p> Email no registrado </p>";
        }

        if(usuario.password != password){
            error = true;
            messageError += "<p> Contraseña incorrecta </p>";
        }

        if(error){
            document.querySelector("#message").innerHTML = messageError;
            document.querySelector('#message').style.display = 'inline-block';
        }else{
            form.submit();
        }
    });
}