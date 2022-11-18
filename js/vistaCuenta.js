"use strict";

const agregarTarjeta = document.getElementById("agregarTarjeta");
const popupTarjeta = document.getElementById("popupTarjeta");
const closeBtnTarjeta = document.getElementById("closeBtnTarjeta");
const popupDireccion = document.getElementById("popupDireccion");
const agregarDireccion = document.getElementById("agregarDireccion");
const closeBtnDireccion = document.getElementById("closeBtnDireccion");



// campos de formulario
const formTarjeta = document.querySelector("#form-tarjeta");
const numeroTarjeta = document.querySelector("#serial");
const codigoSeguridad = document.querySelector("#cod-seguridad");
const vencimiento = document.querySelector("#vencimiento");
const titular = document.querySelector("#titular");

// regex direccion
let regexNumeroTelefono = /^(?:11|[2368]\d)(?:(?=\d{0,2}15)\d{2})??\d{8}$/


// botones de agregar
const btnAgregarDireccion = document.querySelector("#agregarDireccionPopUp");
const btnGuardarTarjeta = document.querySelector("#guardarTarjeta");

// botones de eliminar
const botonesEliminar = document.getElementsByClassName(".eliminar");


// arrays
const tarjetas = [];
const direcciones = [];

agregarTarjeta.addEventListener("click", () => {
  popupTarjeta.classList.add("popupTarjetasActivo");
});

closeBtnTarjeta.addEventListener("click", () => {
  popupTarjeta.classList.remove("popupTarjetasActivo");
});

agregarDireccion.addEventListener("click", () => {
  popupDireccion.classList.add("popUpDireccionActivo");
});

closeBtnDireccion.addEventListener("click", () => {
  popupDireccion.classList.remove("popUpDireccionActivo");
});


formTarjeta.addEventListener("submit", (e)=>{
    e.preventDefault();
    validarTarjeta();  
  });

  function validarTarjeta(){
    let error=false;
    let mensajesError='';
    let regexTarjeta = /^5[1-5][0-9]{14}$/
    let regexVenc = /^(0[1-9]|1[0-2])\/?([0-9]{2})$/
    let regexCodigoSeguridad = /^[0-9]{3}$/
    let regexTitular = /^[A-Z][a-zA-Z]+$/

    var aux = 0;

    const arraySerial = Array.from(String(numeroTarjeta.value), Number);
    
    if(numeroTarjeta.value == 0){
        error = true;
        mensajesError += "<p>El campo de tarjeta es invalido</p>";
    }

    if(esPar(arraySerial[9])==true){
      for (let i = 0; i < arraySerial.length-1; i++) {
        aux += arraySerial[i]
       }
       if(esPar(aux) == true){
        error = true;
        mensajesError += "<p>El formato de la tarjeta es invalido</p>";
       }
    }
    if(esPar(arraySerial[9])==false){
      for (let i = 0; i < arraySerial.length-1; i++) {
        aux += arraySerial[i]
       }
       if(esPar(aux) == false){
        error = true;
        mensajesError += "<p>El formato de la tarjeta es invalido</p>";
       }
    }
    
    function esPar(numero) 
    { 
      return (numero % 2) == 0; 
    } 

  if(!regexVenc.test(vencimiento.value)){
    error = true;
    mensajesError += "<p>El campo de vencimiento es invalido</p>";
  }
  if(!regexCodigoSeguridad.test(codigoSeguridad.value)){
    error=true;
    mensajesError+="<p>El formato del código de seguridad es invalido</p>";
  }

  if(!regexTarjeta.test(numeroTarjeta.value)){
    error = true;
    mensajesError += "<p>El campo de tarjeta es invalido</p>";
  }

  if(!regexTitular.test(titular.value)){
    error=true;
    mensajesError+="<p>El formato del titular es invalido</p>";

  }

  if(titular.value == ""){
    error = true;
    mensajesError += "<p>El campo titular es obligatorio</p>";
  }

  
    if(error){
      document.getElementById("mensaje2").innerHTML=mensajesError;
    }
    else{
        let nuevaTarjetaData = {
            numeroTarjeta:numeroTarjeta.value,
            codigoSeguridad:codigoSeguridad.value,
            vencimiento:vencimiento.value,
            titular:titular.value,
            direcciones:direcciones.value,
        }
        tarjetaData.push(nuevaTarjetaData);
        localStorage.setItem("listaTarjetas",JSON.stringify(tarjetaData));
      formTarjeta.submit();
    }
  }
  let tarjetaData=[
    {
        numeroTarjeta:"",
        codigoSeguridad: "",
        vencimiento:"",
        titular:"",
        direcciones:"",
    }
];
let tarjetasObtenidas=JSON.parse(localStorage.getItem("listaTarjetas"));
