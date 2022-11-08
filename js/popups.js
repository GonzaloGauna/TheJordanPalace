/* Direccion*/ 

var popupDireccion = document.getElementById("popup-direccion");
var botonDireccion = document.getElementById("boton-direccion");
var cerrarDireccion = document.getElementById("cerrar-direccion");

botonDireccion.onclick = function() {
  popupDireccion.style.display = "block";
}

cerrarDireccion.onclick = function() {

  popupDireccion.style.display = "none";
  
}

window.onclick = function(event) {
  if (event.target == popupDireccion) {
    popupDireccion.style.display = "none";
  }
}

/* Metodos de pago*/ 

var popupTarjeta = document.getElementById("popup-tarjeta");
var botonTarjeta = document.getElementById("boton-tarjeta");
var cerrarTarjeta = document.getElementById("cerrar-tarjeta");

botonTarjeta.onclick = function() {
  popupTarjeta.style.display = "block";
}

cerrarTarjeta.onclick = function() {
  popupTarjeta.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == popupTarjeta) {
    popupTarjeta.style.display = "none";
  }
}

/* validar direccion*/
const form=document.querySelector("form");
var alias = document.getElementById("alias");
var provincias = document.getElementById("provincias");
var localidad = document.getElementById("localidad");
var direccion = document.getElementById("direccion");
var telefono = document.getElementById("tel");
var piso = document.getElementById("piso");
var departamento = document.getElementById("dept");
var aliasAux1 = document.getElementById("espacioAlias1")




form.addEventListener("submit", (e)=>{
  e.preventDefault();
  validarDireccion();
});


 function validarDireccion(){
  let error=false;
  let mensajesError='';

if(alias.value == ""){
    error = true;
    mensajesError += "<p> *El campo Alias es obligatorio</p>";
}
if(provincias.value == 0){
  error = true;
  mensajesError += "<p> *El campo Provincias es obligatorio</p>";
}

if(localidad.value == ""){
  error = true;
  mensajesError += "<p> *El campo Localidad es obligatorio</p>";
}

if(direccion.value == ""){
  error = true;
  mensajesError += "<p> *El campo Dirección es obligatorio</p>";
}
if(telefono.value == ""){
  error = true;
  mensajesError += "<p> *El campo Télefono es obligatorio</p>";
}

if(departamento.value.length > 1){
  error = true;
  mensajesError += "<p> *El campo departamento no puede tener más de un carácter</p>"
}


if(error){
  document.getElementById("mensaje").innerHTML=mensajesError;
}else{
  form.submit();
  localStorage.setItem("alias1", alias.value);
  aliasAux1.innerHTML = localStorage.getItem("alias1")

 }
 

}

/* validacion tarjeta*/
const form2=document.getElementById("form2");
var serial = document.getElementById("serial");
var codSeguridad = document.getElementById("cod-seguridad");
var vencimiento = document.getElementById("vencimiento");
var titular = document.getElementById("titular");
var direcciones = document.getElementById("direcciones");
var checkbox = document.getElementById("otraDireccion");

function esPar(numero) 
{ 
  return (numero % 2) == 0; 
}

form2.addEventListener("submit", (e)=>{
  e.preventDefault();
  validarTarjeta();
});


function validarTarjeta(){
  let error=false;
  let mensajesError='';

if(serial.value.length != 10){
  error = true;
  mensajesError += "<p> *El serial de la tarjeta tiene que ser de 10 números</p>"
}


if(codSeguridad.value.length != 3){
  error = true;
  mensajesError += "<p> *El código de seguridad solo puede ser de 3 números</p>";
}
  if(error){
    document.getElementById("mensaje2").innerHTML=mensajesError;
  }else{
    form.submit();
  }
}




