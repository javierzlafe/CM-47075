//<script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>




//constructor de productos
const Producto = function(nombre,precio,stock){
    this.nombre= nombre,
    this.precio = precio
    this. stock = stock
}

let producto1= new Producto ("notebook lenovo", 480000, 20)
let producto2= new Producto ("lenovo pad", 45500, 26)
let producto3= new Producto ("notebook apple macbook", 700000, 45)
let producto4= new Producto ("apple pad", 350000, 23)
let producto5= new Producto ("apple smartwatch", 150000, 10)
let producto6= new Producto ("samsung smartwatch", 17000, 30)
let producto7= new Producto ("samsung smarttv", 120000, 1)
let producto8= new Producto ("samsung galaxy s23", 320000, 7)


let lista = [producto1,producto2,producto3,producto4,producto5,producto6,producto7,producto8]


if (localStorage.getItem("productos")) {
  lista = JSON.parse(localStorage.getItem("productos"));
} else {
  lista = lista
}

/* function filtrarProductos() {   //sin librerias
  const body = document.querySelector('body');

  const input = document.getElementById('filtrarP').value  //traigo el valor del imput

  const palabraClave = input.trim().toUpperCase();

  const resultado = lista.filter((producto) => producto.nombre.toUpperCase().includes(palabraClave));

  if (resultado.length > 0) {
    const container = document.createElement('div');
    container.classList.add('card-container');

    resultado.forEach((producto) => {
      const card = document.createElement('div');
      card.classList.add('card');

      const nombre = document.createElement('h2');
      nombre.textContent = producto.nombre;
      card.appendChild(nombre);

      const precio = document.createElement('p');
      precio.textContent = `Precio: ${producto.precio}`;
      card.appendChild(precio);

      const stock = document.createElement('p');
      stock.textContent = `Stock: ${producto.stock}`;
      card.appendChild(stock);

      container.appendChild(card);
    });

    body.appendChild(container);
  } else {
    alert('No se encontraron coincidencias');
  }
} */






//#filtrar con librerias

function filtrarProductos(){

    Swal.fire({
        title: 'Ingresa el producto que deseas buscar',
        input: 'text',
        showCancelButton: true,
        confirmButtonText: 'Buscar',
        showLoaderOnConfirm: true,

        preConfirm: (palabraClave) => {
            palabraClave = palabraClave.trim().toUpperCase()
            let resultado = lista.filter((producto)=> producto.nombre.toUpperCase().includes(palabraClave))

             if (resultado.length > 0){
                console.table(resultado)
               
                Swal.fire({
                    title: 'Resultados de búsqueda',
                    html: '<table><tr><th>Nombre</th><th>Precio</th><th>Stock</th></tr>' +
                          resultado.map(producto => `<tr><td>${producto.nombre}</td><td>${producto.precio}</td><td>${producto.stock}</td></tr>`).join('') +
                          '</table>',
                    confirmButtonText: 'OK'
                })
                
            } else {
                Swal.fire({
                    title: 'No se encontraron coincidencias',
                    icon: 'error',
                    confirmButtonText: 'OK'
                })
            }
        }
    });

}

console.table(lista)

/* function agregarProducto() { //sin libreria
  const form = document.createElement('form');
  form.innerHTML = `
    <label for="nombre-input">Nombre:</label>
    <input id="nombre-input" type="text" required>
    
    <label for="precio-input">Precio:</label>
    <input id="precio-input" type="number" step="0.01" required>
    
    <label for="stock-input">Stock:</label>
    <input id="stock-input" type="number" step="1" required>
    
    <button type="submit">Agregar</button>
  `;

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    const nombreInput = document.getElementById('nombre-input').value.trim();
    const precioInput = parseFloat(document.getElementById('precio-input').value);
    const stockInput = parseInt(document.getElementById('stock-input').value);

    if (isNaN(precioInput) || isNaN(stockInput) || nombreInput === '') {
      alert('Por favor ingresa valores válidos.');
      return;
    }

    const producto = new Producto(nombreInput, precioInput, stockInput);

    if (lista.some((elemento) => elemento.nombre === producto.nombre)) {
      alert('El producto ya existe en la lista.');
      return;
    }

    lista.push(producto);


    localStorage.setItem("productos", JSON.stringify(lista));

    alert(`Se ha agregado el producto "${producto.nombre}" a la lista.`);

    console.table(lista);

    const container = document.createElement('div');
    container.classList.add('card-container');

    lista.forEach((producto) => {
      const card = document.createElement('div');
      card.classList.add('card');

      const nombre = document.createElement('h2');
      nombre.textContent = producto.nombre;
      card.appendChild(nombre);

      const precio = document.createElement('p');
      precio.textContent = `Precio: ${producto.precio}`;
      card.appendChild(precio);

      const stock = document.createElement('p');
      stock.textContent = `Stock: ${producto.stock}`;
      card.appendChild(stock);

      container.appendChild(card);
    });

    const body = document.querySelector('body');
    body.appendChild(container);

    form.reset();
  });

  const body = document.querySelector('body');
  body.appendChild(form);
} */



//#agregar con librerias
function agregarProducto() {
 
    Swal.fire({
        title: "Agregar Producto",
        html:
          `<label>Nombre:</label> <input id="nombre-input" class="swal2-input" type="text" autofocus>

           <label>Precio:</label><input id="precio-input" class="swal2-input" type="number" step="0.01">

           <label>Stock:</label><input id="stock-input" class="swal2-input" type="number" step="1">`,
        showCancelButton: true,
        confirmButtonText: "Agregar",
        cancelButtonText: "Cancelar",
      }).then((result) => {
        if (result.isConfirmed) {
           let nombre= document.getElementById("nombre-input").value.trim();
          let precio = parseFloat(document.getElementById("precio-input").value);
          let stock = parseInt(document.getElementById("stock-input").value);
      
          if (isNaN(precio) || isNaN(stock) || nombre === "") {
            Swal.fire({
              icon: "error",
              title: "Error",
              text: "Por favor ingresa valores válidos."
            });
            return;
          }
      
          let producto = new Producto(nombre, precio, stock);
      
          if (lista.some((elemento) => elemento.nombre === producto.nombre)) {
            Swal.fire({
              icon: "warning",
              title: "Advertencia",
              text: "El producto ya existe en la lista."
            });
            return;
          }
      
          lista.push(producto);
      
          Swal.fire({
            icon: "success",
            title: "Producto agregado",
            text: `Se ha agregado el producto "${producto.nombre}" a la lista.`,
            timer: 3000 // Tiempo en milisegundos para cerrar la ventana automáticamente
          });
      
          console.table(lista);
          
          // Mostrar la lista de productos en un nuevo modal
          let productosDiv = document.createElement("div");
          productosDiv.setAttribute("id", "productos-div");
          productosDiv.innerHTML = `<h3>Lista de Productos</h3><ul>${lista.map(producto => `<li>${producto.nombre} - Precio: ${producto.precio} - Stock: ${producto.stock}</li>`).join("")}</ul>`;
          
          Swal.fire({
            title: "Lista de Productos",
            html: productosDiv,
            confirmButtonText: "Cerrar"
          });
        }
      });
}



lista.sort((a, b) => a.precio - b.precio);
    console.table(lista);






    //botonera

    const filtrarBtn = document.getElementById("filtrar");
      filtrarBtn.addEventListener("click", () => {
        filtrarProductos();
      });
      
      const agregarBtn = document.getElementById("agregar");
      agregarBtn.addEventListener("click", () => {
        agregarProducto();
      });
      
      const ordenarBtn = document.getElementById("ordenar");



ordenarBtn.addEventListener("click", () => {

  
  lista.sort((a, b) => a.precio - b.precio);
  const html = `
    <table class="table">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Precio</th>
          <th>Stock</th>
        </tr>
      </thead>
      <tbody>
        ${lista
          .map(
            (producto) =>
              `<tr><td>${producto.nombre}</td><td>${producto.precio}</td><td>${producto.stock}</td></tr>`
          )
          .join("")}
      </tbody>
    </table>
    <button class="btn-cerrar" onclick="Swal.close()">Cerrar</button>`;
  Swal.fire({
    title: "Lista de productos ordenados por precio",
    html: html,
    confirmButtonText: false,
    customClass: {
      container: "my-swal",
    },
  });
});

