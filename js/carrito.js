var containerCarrito = document.getElementById("container-cart");
var btnAgregarCarrito = document.getElementsByClassName("agregarCarrito");
var btnEliminarCarrito = document.getElementsByClassName("eliminar-producto");
var tituloCarrito = document.getElementById("titulo");
const productos = [];

for (let i = 0; i < btnAgregarCarrito.length; i++) {
  if (btnAgregarCarrito[i]) {
    btnAgregarCarrito[i].addEventListener("click", (e) => {
      e.preventDefault();
      console.log(e);
      leerDatos(e);
    });
  }
}

function eliminarProducto() {
  for (let i = 0; i < btnEliminarCarrito.length; i++) {
    if (btnEliminarCarrito[i]) {
      btnEliminarCarrito[i].addEventListener("click", (e) => {
        e.preventDefault();
        console.log(e);
        // let productos = JSON.parse(localStorage.getItem('productos'))
        // for (let i = 0; i < productos.length; i++) {
        //     if(productos[i]){
        //         console.log(btnEliminarCarrito[i])
        //         if(btnEliminarCarrito[i].id == productos[i].id){
        //             localStorage.removeItem(productos[i].id)
        //             break;
        //         }
        //     }
            
        // }
        if (e.target.classList.contains("eliminar-producto")) {
          e.target.parentElement.remove();
        }

      });
    }
  }
}

function leerDatos(e) {
  e.preventDefault();
  if (e.target.classList.contains("agregarCarrito")) {
    const producto = e.target.parentElement.parentElement.parentElement;
    const nombre = producto.querySelector(".nombreProducto").textContent;
    const precio = producto.querySelector(".card__price").textContent;
    const imagen = producto.querySelector(".imagen_carrito").src;
    const id = producto.querySelector(".agregarCarrito").id;

    let productoAgregar = {
      nombre: nombre,
      precio: precio,
      imagen: imagen,
      id: id,
    };

    //agregar al local storage
    productos.push(productoAgregar);
    localStorage.setItem("productos", JSON.stringify(productos));
  }
}

function obtenerProductos() {
  let productos = JSON.parse(localStorage.getItem("productos"));
  tituloCarrito.style.display = "none";
  for (let i = 0; i < productos.length; i++) {
    let div = document.createElement("div");
    div.classList.add("cart-item");
    div.innerHTML = `
              <h3>${productos[i].nombre}</h3>
              <h4>${productos[i].precio}</h4>
              <img src="${productos[i].imagen}">
              <button class="eliminar-producto" id="${productos[i].id}" onfocus="eliminarProducto()">Eliminar</button>
          `;
    containerCarrito.appendChild(div);
  }

//   tituloCarrito.style.display = "inline-block";
}
