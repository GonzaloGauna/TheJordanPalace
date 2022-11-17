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

var popupDireccion = document.getElementById("popup-direccion");
var botonDireccion = document.getElementById("boton-direccion");
var cerrarDireccion = document.getElementById("cerrar-direccion");

const formDireccion = document.getElementById("form-direccion");
const alias = document.getElementById("alias");
const provincias = document.getElementById("provincias");
const localidad = document.getElementById("localidad");
const direccion = document.getElementById("direccion");
const tel = document.getElementById("tel");
const dept = document.getElementById("dept");
const piso = document.getElementById("piso");

formDireccion.addEventListener("submit", (e) => {
    e.preventDefault();
    validarDireccion();
});
function validarDireccion() {
    let error = false;
    let mensajesError = "";
    let regexNumero =
        /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    let regexPiso = /^[0-9]+$/;
    let regexDept = /^[A-Za-z]{1}/;
    if (alias.value == "") {
        error = true;
        mensajesError += "<p>**El campo alias es obligatorio</p>";
    }
    if (provincias.value == 0) {
        error = true;
        mensajesError += "<p>**El campo provincia es obligatorio</p>";
    }
    if (localidad.value == "") {
        error = true;
        mensajesError += "<p>**El campo localidad es obligatorio</p>";
    }
    if (tel.value == "") {
        error = true;
        mensajesError += "<p>**El campo teléfono es obligatorio</p>";
    }
    if (!regexNumero.test(tel.value)) {
        error = true;
        mensajesError += "<p>**El formato del teléfono es invalido</p>";
    }
    if (dept.value == "") {
        error = true;
        mensajesError += "<p>**El campo dept es obligatorio</p>";
    }
    if (!regexDept.test(dept.value)) {
        error = true;
        mensajesError += "<p>**El formato del departamento es invalido</p>";
    }
    if (piso.value == "") {
        error = true;
        mensajesError += "<p>**El campo piso es obligatorio</p>";
    }
    if (!regexPiso.test(piso.value)) {
        error = true;
        mensajesError += "<p>**El formato del piso es invalido</p>";
    }
    if (error) {
        document.getElementById("mensajeDireccion").innerHTML = mensajesError;
    } else {
        let nuevaDireccionData = {
            alias: alias.value,
            provincias: provincias.value,
            localidad: localidad.value,
            direccion: direccion.value,
            tel: tel.value,
            dept: dept.value,
            piso: piso.value,
        };
        direccionData.push(nuevaDireccionData);
        localStorage.setItem("listaDirecciones", JSON.stringify(direccionData));
        formDireccion.submit();
    }
}

let direccionData = [
    {
        alias: "",
        provincias: "",
        localidad: "",
        direccion: "",
        tel: "",
        dept: "",
        piso: "",
    },
];
let direccionesObtenidas = JSON.parse(localStorage.getItem("listaDirecciones"));

/*metodos de pago*/

var popupTarjeta = document.getElementById("popup-tarjeta");
var botonTarjeta = document.getElementById("boton-tarjeta");
var cerrarTarjeta = document.getElementById("cerrar-tarjeta");

botonTarjeta.onclick = function () {
    popupTarjeta.style.display = "block";
};

cerrarTarjeta.onclick = function () {
    popupTarjeta.style.display = "none";
};

window.onclick = function (event) {
    if (event.target == popupTarjeta) {
        popupTarjeta.style.display = "none";
    }
};

const formTarjeta = document.getElementById("form-tarjeta");
var serial = document.getElementById("serial");
var codSeguridad = document.getElementById("cod-seguridad");
var vencimiento = document.getElementById("vencimiento");
var titular = document.getElementById("titular");
var direcciones = document.getElementById("direcciones");

formTarjeta.addEventListener("submit", (e) => {
    e.preventDefault();
    validarTarjeta();
});

function validarTarjeta() {
    let error = false;
    let mensajesError = "";
    let regexVenc = /^(0[1-9]|1[0-2])\/?([0-9]{2})$/;
    let regexCodSeguridad = /^[0-9]{3}$/;
    var aux = 0;

    const arraySerial = Array.from(String(serial.value), Number);

    if (serial.value == 0) {
        error = true;
        mensajesError += "<p> *El campo de tarjeta es invalido</p>";
    }

    if (esPar(arraySerial[9]) == true) {
        for (let i = 0; i < arraySerial.length - 1; i++) {
            aux += arraySerial[i];
        }
        if (esPar(aux) == true) {
            error = true;
            mensajesError += "<p> *El formato de la tarjeta es invalido</p>";
        }
    }
    if (esPar(arraySerial[9]) == false) {
        for (let i = 0; i < arraySerial.length - 1; i++) {
            aux += arraySerial[i];
        }
        if (esPar(aux) == false) {
            error = true;
            mensajesError += "<p> *El formato de la tarjeta es invalido</p>";
        }
    }

    function esPar(numero) {
        return numero % 2 == 0;
    }

    if (!regexVenc.test(vencimiento.value)) {
        error = true;
        mensajesError += "<p> *El campo de vencimiento es invalido</p>";
    }
    if (!regexCodSeguridad.test(codSeguridad.value)) {
        error = true;
        mensajesError +=
            "<p>**El formato del código de seguridad es invalido</p>";
    }
    if (titular.value == "") {
        error = true;
        mensajesError += "<p> *El campo titular es obligatorio</p>";
    }

    if (error) {
        document.getElementById("mensaje2").innerHTML = mensajesError;
    } else {
        let nuevaTarjetaData = {
            serial: serial.value,
            codSeguridad: codSeguridad.value,
            vencimiento: vencimiento.value,
            titular: titular.value,
            direcciones: direcciones.value,
        };
        tarjetaData.push(nuevaTarjetaData);
        localStorage.setItem("listaTarjetas", JSON.stringify(tarjetaData));
        formTarjeta.submit();
    }
}
let tarjetaData = [
    {
        serial: "",
        codSeguridad: "",
        vencimiento: "",
        titular: "",
        direcciones: "",
    },
];
let tarjetasObtenidas = JSON.parse(localStorage.getItem("listaTarjetas"));
