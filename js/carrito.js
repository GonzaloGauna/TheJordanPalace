var containerCarrito = document.getElementById("container-cart");
var btnAgregarCarrito = document.getElementsByClassName("agregarCarrito");
var btnEliminarCarrito = document.getElementsByClassName("eliminar-producto");
var tituloCarrito = document.getElementById("titulo");
var montoTotal = document.getElementById('total')
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
      let boton = btnEliminarCarrito[i];

      boton.addEventListener("click", (e) => {
        e.preventDefault();
        // console.log(e);

        let productos = JSON.parse(localStorage.getItem("productos"));
        for (let i = 0; i < productos.length; i++) {
          if (productos[i]) {
            // console.log(boton);
            if (boton.id == productos[i].id) {
              localStorage.setItem("productos", JSON.stringify(removeObjectWithId(productos, productos[i].id)));
              // console.log("son iguales");
              break;
            }
          }
        }

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

    //alerta de que se agrego el producto
    const Toast = Swal.mixin({
      background: 'black',
      color: 'white',
      toast: true,
      position: 'bottom-start',
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: false
    })
    
    Toast.fire({
      icon: 'success',
      title: 'Producto agregado correctamente'
    })

  }
}

function obtenerProductos() {
  
  let productos = JSON.parse(localStorage.getItem("productos"));
  let precio = 0;
  
  if(productos){
    if(productos.length >= 1){
      tituloCarrito.style.display = "none";
    }else{
      tituloCarrito.style.display = "inline-block";
    }
  }

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

  for (let i = 0; i < productos.length; i++) {
    if(productos[i]){
      numero = productos[i].precio.slice(1, -1)
      precio += parseInt(numero);
    } 
  }

  if(precio == 0){
    montoTotal.innerHTML = `Monto total: $0.00`
  }else{
    montoTotal.innerHTML = `Monto total: $${precio.toFixed(3)}`
  }
}

function removeObjectWithId(arr, id) {
  const objWithIdIndex = arr.findIndex((obj) => obj.id === id);
  arr.splice(objWithIdIndex, 1);

  return arr;
}