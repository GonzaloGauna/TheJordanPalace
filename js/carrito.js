var botonAgregar = document.getElementsByClassName("agregar-producto");
var botonEliminar = document.getElementsByClassName("eliminar-producto");

for (i = 0; i < botonAgregar.length; i++) {
  if (botonAgregar[i]) {
    botonAgregar[i].addEventListener("click", function (e) {
      e.preventDefault();
      console.log(e);
      agregarAlCarrito(e);
      // añadirCarrito();
    });
  }
}

for (i = 0; i < botonEliminar.length; i++) {
  if (botonEliminar[i]) {
    botonEliminar[i].addEventListener("click", function (e) {
      e.preventDefault();
      console.log(e);
      eliminarProducto(e);
    });
  }
}

function agregarAlCarrito(e) {
  if (e.target.classList.contains("agregar-producto")) {
    let producto = e.target.parentElement.parentElement;
    alert('El producto se agrego correctamente')
    
    this.leerDatosProductos(producto);
  }
}

function leerDatosProductos(producto) {
  let productoObjeto = {
    titulo: producto.querySelector(".text_card .titulo").textContent,
    imagen: producto.querySelector("img").src,
    precio: producto.querySelector(".text_card .precio").textContent,
  };
  localStorage.setItem("producto", JSON.stringify(productoObjeto));
}

function añadirCarrito() {

  let producto = JSON.parse(localStorage.getItem("producto"));
  console.log(producto);
  let item = document.createElement("div");
  item.classList.add("cart-item");
  item.innerHTML = `
                  <h4>${producto.titulo}</h4>
                  <img src="${producto.imagen}">
                  <h4>${producto.precio}</h4>
                  <button>Elminiar producto</button>
              `;
  item.querySelector('button').classList.add('eliminar-producto')
  var carritoContainer = document.querySelector("#container-cart");
  carritoContainer.appendChild(item);
}

function eliminarProducto(e) {
  e.preventDefault();
  if (e.target.classList.contains("eliminar-producto")) {
    e.target.parentElement.remove();
  }
}
