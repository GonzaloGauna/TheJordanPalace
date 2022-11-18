"use strict";

const agregarTarjeta = document.getElementById("agregarTarjeta");
const popupTarjeta = document.getElementById("popupTarjeta");
const closeBtnTarjeta = document.getElementById("closeBtnTarjeta");
const popupDireccion = document.getElementById("popupDireccion");
const agregarDireccion = document.getElementById("agregarDireccion");
const closeBtnDireccion = document.getElementById("closeBtnDireccion");

// campos de formulario
const formulario = document.querySelector("#form-tarjeta");
const numeroTarjeta = document.querySelector("#serial");
const codigoSeguridad = document.querySelector("#cod-seguridad");
const vencimiento = document.querySelector("#vencimiento");
const titular = document.querySelector("#titular");

// regex tarjeta
let regexTarjeta = /^5[1-5][0-9]{14}$/
let regexCodigoSeguridad = /^[0-9]{3}$/

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
