var botonAgregar = document.getElementsByClassName("agregar-producto");
var botonEliminar = document.getElementsByClassName("eliminar-producto");
var carritoContainer = document.querySelector("#container-cart");
var tituloCarritoVacio = document.getElementById("titulo");
const productos = [];

for (let i = 0; i < botonAgregar.length; i++) {
  if (botonAgregar[i]) {
    botonAgregar[i].addEventListener("click", function (e) {
      e.preventDefault();
      console.log(e);
      agregarAlCarrito(e);
    });
  }
}

function eliminarProductos() {
  for (let i = 0; i < botonEliminar.length; i++) {
    if (botonEliminar[i]) {
      botonEliminar[i].addEventListener("click", function (e) {
        e.preventDefault();
        console.log(e);
        if (e.target.classList.contains("eliminar-producto")) {
          e.target.parentElement.remove();
        }
      });
    }
  }
}

function agregarAlCarrito(e) {
  if (e.target.classList.contains("agregar-producto")) {
    let producto = e.target.parentElement.parentElement;

    Swal.fire({
      icon: "success",
      title: "El producto se agregó correctamente",
    });

    this.leerDatosProductos(producto);
  }
}

function leerDatosProductos(producto) {
  let productoObjeto = {
    titulo: producto.querySelector(".text_card .titulo").textContent,
    imagen: producto.querySelector("img").src,
    precio: producto.querySelector(".text_card .precio").textContent,
  };

  productos.push(productoObjeto);
  localStorage.setItem("productos", JSON.stringify(productos));
}

function obtenerProductos() {
  if (localStorage.getItem("productos")) {
    tituloCarritoVacio.style.display = "none";
    let productos = JSON.parse(localStorage.getItem("productos"));
    for (let i = 0; i < productos.length; i++) {
      let item = document.createElement("div");
      item.classList.add("cart-item");
      item.innerHTML = `
                      <h4>${productos[i].titulo}</h4>
                      <img src="${productos[i].imagen}">
                      <h3>${productos[i].precio}</h3>
                      <button class="eliminar-producto" onfocus="eliminarProductos()">Elminiar producto</button>
                  `;
      carritoContainer.appendChild(item);
    }
  } else {
    tituloCarritoVacio.style.display = "inline-block";
  }
}
