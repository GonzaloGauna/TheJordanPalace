const agregarTarjeta = document.getElementById("agregarTarjeta");
const popupTarjeta = document.getElementById("popupTarjeta");
const closeBtnTarjeta = document.getElementById("closeBtnTarjeta");
const popupDireccion = document.getElementById("popupDireccion");
const agregarDireccion = document.getElementById("agregarDireccion");
const closeBtnDireccion = document.getElementById("closeBtnDireccion");

agregarTarjeta.addEventListener("click", ()=> {
    popupTarjeta.classList.add("popupTarjetasActivo");
})

closeBtnTarjeta.addEventListener("click", ()=> {
    popupTarjeta.classList.remove("popupTarjetasActivo");
})

agregarDireccion.addEventListener("click", ()=> {
    popupDireccion.classList.add("popUpDireccionActivo");
})

closeBtnDireccion.addEventListener("click", ()=> {
    popupDireccion.classList.remove("popUpDireccionActivo");
})