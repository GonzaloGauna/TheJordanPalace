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



