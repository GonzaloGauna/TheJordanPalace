//pedidos
const carrito = new Carrito();
const carritoContainer = document.querySelector("#container-cart");

cargarEventos();

function cargarEventos() {
  carritoContainer.addEventListener("click", (e) => {
    carrito.añadirAlCarrito(e);
  });
}
