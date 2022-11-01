class Carrito {
  //añadir producto al carrito
  añadirAlCarrito(e) {
    e.preventDefault();
    if (e.target.classList.contains("agregar-producto")) {
      const producto = e.target.parentElement;

      //this.leerDatosProductos(producto);
      console.log(producto);
    }
  }

  leerDatosProductos(producto){
    const producto = {
        titulo : producto.querySelector('h3').textContent,
        imagen : producto.querySelector('img').src,
        precio : producto.querySelector('h4').textContent
    }
  }

}
