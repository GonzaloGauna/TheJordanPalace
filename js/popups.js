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
var aliasAux1 = document.getElementById("espacioAlias1");
var aliasAux2 = document.getElementById("espacioAlias2");
var direccionAux1 = document.getElementById("espacioDireccion1");
var direccionAux2 = document.getElementById("espacioDireccion2");
var direcciones = 0;
var otraDireccion = false;

form.addEventListener("submit", (e)=>{
  e.preventDefault();
  validarDireccion();
  guardarDireccion();
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
if(otraDireccion = true){   
  var x = document.getElementById("direcciones");
  var option = document.createElement("option");
  localStorage.setItem("alias3", alias.value)
  option.text = localStorage.getItem("alias3");
  x.add(option);
}

if(error){
  document.getElementById("mensaje").innerHTML=mensajesError;
}
else{
  form.submit();
 }
}
function guardarDireccion(){
  if(localStorage.getItem("alias1") === null){
    localStorage.setItem("alias1", alias.value);
    localStorage.setItem("direccion1", direccion.value)
  }
  else{
    localStorage.setItem("alias2", alias.value);
    localStorage.setItem("direccion2", direccion.value);
  }

}
if(localStorage.getItem("alias1") != null){
  aliasAux1.innerHTML = localStorage.getItem("alias1");
  direccionAux1.innerHTML = localStorage.getItem("direccion1");

    var x = document.getElementById("direcciones");
    var option = document.createElement("option");
    option.text = localStorage.getItem("alias1");
    x.add(option);

}

if(localStorage.getItem("alias2") != null){
  aliasAux2.innerHTML = localStorage.getItem("alias2");
  direccionAux2.innerHTML = localStorage.getItem("direccion2")

    var x = document.getElementById("direcciones");
    var option = document.createElement("option");
    option.text = localStorage.getItem("alias2");
    x.add(option);
}


  

/* validacion tarjeta*/
const form2=document.getElementById("form2");
var serial = document.getElementById("serial");
var codSeguridad = document.getElementById("cod-seguridad");
var vencimiento = document.getElementById("vencimiento");
var titular = document.getElementById("titular");
var direcciones = document.getElementById("direcciones");
var checkbox = document.getElementById("otraDireccion");
var tarjeta1 = document.getElementById("espacioTarjeta1");
var tarjeta2 = document.getElementById("espacioTarjeta2");
var seriales = 0;

function esPar(numero) 
{ 
  return (numero % 2) == 0; 
}

form2.addEventListener("submit", (e)=>{
  e.preventDefault();
  validarTarjeta();
  guardarTarjeta();

});


function validarTarjeta(){
  let error=false;
  let mensajesError='';
  let aux = 0;
  const arraySerial = Array.from(String(serial.value), Number);
  
if(serial.length != 10){
  error = true;
  mensajesError += "<p> *El serial de la tarjeta tiene que ser de 10 números</p>"
}
if(esPar(arraySerial[9]) === true){
  for (let i = 0; i < arraySerial.length; i++) {
    aux += arraySerial[i]
   }
   if(esPar(aux) === false){
    error = true;
    mensajesError += "<p> *El número de tarjeta es inválido</p>"
   }
   return
}
if(esPar(arraySerial[9]) === false){
  for (let i = 0; i < arraySerial.length; i++) {
    aux += arraySerial[i]
   }
   if(esPar(aux) === true){
    error = true;
    mensajesError += "<p> *El número de tarjeta es inválido</p>"
   }
   return
}

if(codSeguridad.value.length != 3){
  error = true;
  mensajesError += "<p> *El código de seguridad solo puede ser de 3 números</p>";
}
if(vencimiento == null){
  error = true;
  mensajesError += "<p> *El campo de vencimiento es obligatorio</p>";
}
if(titular == ""){
  error = true;
  mensajesError += "<p> *El campo titular es obligatorio</p>";
}
if(direcciones.value == 0){
  error = true;
  mensajesError += "<p> *El campo Direcciones es obligatorio</p>";
}

  if(error){
    document.getElementById("mensaje2").innerHTML=mensajesError;
  }
  else{
    form.submit();
  }
}
function guardarTarjeta(){
  if(localStorage.getItem("serial1") === null){
    localStorage.setItem("serial1", serial.value);
    localStorage.setItem("titular1", titular.value);
    popupTarjeta.style.display = "none";
    location.reload()
  }
  else{
    localStorage.setItem("serial2", serial.value);
    localStorage.setItem("titular2", titular.value);
    popupTarjeta.style.display = "none";
    location.reload()
  }
}

if(localStorage.getItem("serial1") != null){
  tarjeta1.innerHTML = localStorage.getItem("titular1") + " " + localStorage.getItem("serial1");

  var x = document.getElementById("tarjetas");
  var option = document.createElement("option");
  option.text = localStorage.getItem("serial1");
  x.add(option);

}

if(localStorage.getItem("serial2") != null){
  tarjeta2.innerHTML = localStorage.getItem("titular2") + " " + localStorage.getItem("serial2");

  var x = document.getElementById("tarjetas");
  var option = document.createElement("option");
  option.text = localStorage.getItem("serial2");
  x.add(option);

}

checkbox.onclick = function() {
  popupDireccion.style.display = "block";
  popupDireccion.style.zIndex = "99";
  document.getElementById("mensaje").innerHTML="<p> *La nueva dirección se añadirá  a la lista de direcciones</p>"; 
  otraDireccion = true;
}




/* tachos */
const tacho1 = document.getElementById("tachito1");
const tacho2 = document.getElementById("tachito2");
const tacho3 = document.getElementById("tachito3");
const tacho4 = document.getElementById("tachito4");

tacho1.onclick = function(){
  aliasAux1.innerHTML = "&nbsp";
  direccionAux1.innerHTML = "&nbsp";
  localStorage.removeItem("alias1");
  localStorage.removeItem("direccion1");
}

tacho2.onclick = function(){
  aliasAux2.innerHTML = "&nbsp";
  direccionAux2.innerHTML = "&nbsp";
  localStorage.removeItem("alias2");
  localStorage.removeItem("direccion2");

}

tacho3.onclick = function(){
  tarjeta1.innerHTML = "&nbsp";
  localStorage.removeItem("serial1");
  localStorage.removeItem("titular1");

}
tacho4.onclick = function(){
  tarjeta2.innerHTML = "&nbsp";
  localStorage.removeItem("serial2");
  localStorage.removeItem("titular2");

}