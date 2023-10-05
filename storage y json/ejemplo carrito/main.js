let carrito = [];

const agregarAlCarrito = () => {
    const cantidad = parseInt(document.getElementById("cantidad").value);
    if (!isNaN(cantidad) && cantidad > 0) {
        carrito.push({ producto: document.getElementById("producto").value, cantidad });
        actualizarCarrito();
    } else alert("Por favor, ingrese una cantidad válida.");
};

const guardarCarrito = () => {
    localStorage.setItem("carritoData", JSON.stringify(carrito));
    alert("Carrito guardado en el LocalStorage.");
};

const cargarCarrito = () => {
    if (localStorage.carritoData) {
        carrito = JSON.parse(localStorage.carritoData);
        actualizarCarrito();
    }
};

window.addEventListener("load", cargarCarrito);

