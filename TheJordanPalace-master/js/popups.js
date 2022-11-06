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
