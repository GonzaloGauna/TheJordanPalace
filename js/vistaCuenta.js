const agregarTarjeta = document.getElementById("agregarTarjeta");
const area = document.getElementById("area");
const closeBtnTarjeta = document.getElementById("closeBtnTarjeta");
const popupDireccion = document.getElementById("popupDireccion");
const agregarDireccion = document.getElementById("agregarDireccion");
const closeBtnDireccion = document.getElementById("closeBtnDireccion");

agregarTarjeta.addEventListener("click", ()=> {
    area.classList.add("popupTarjetasActivo");
})

closeBtnTarjeta.addEventListener("click", ()=> {
    area.classList.remove("popupTarjetasActivo");
})

agregarDireccion.addEventListener("click", ()=> {
    popupDireccion.classList.add("popUpDireccionActivo");
})

closeBtnDireccion.addEventListener("click", ()=> {
    popupDireccion.classList.remove("popUpDireccionActivo");
})