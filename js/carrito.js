// Lista de productos
const productos = [
    { id: 1, nombre: "Aros Sara", precio: 85000 },
    { id: 2, nombre: "Aros Tik", precio: 60000 },
    { id: 3, nombre: "Aros Lava", precio: 65000 },
    { id: 4, nombre: "Argollas", precio: 65000 },
    { id: 5, nombre: "Pulsera emma", precio: 60000 },
    { id: 6, nombre: "Aros Perla", precio: 40000 },
    { id: 7, nombre: "Anillos duo", precio: 90000 },
    { id: 8, nombre: "Anillo Tim", precio: 85000 },
    { id: 9, nombre: "Aros Prana", precio: 45000 },
];



// 1. Cargar carrito desde localStorage
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

// 2. Seleccionar contador
let contadorCarrito = document.querySelector('.cart-count');

// 3. Mostrar cantidad inicial
if (contadorCarrito) {
  contadorCarrito.textContent = carrito.length;
}

// 4. DOM
document.addEventListener("DOMContentLoaded", () => {
  const botonesAgregar = document.querySelectorAll(".btn-agregar");

  botonesAgregar.forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = parseInt(btn.dataset.id);
      const producto = productos.find(p => p.id === id);
      if (producto) {
        carrito.push(producto.id);
        localStorage.setItem("carrito", JSON.stringify(carrito));
        actualizarCarrito();
      }
    });
  });

  actualizarCarrito();
});

// 5. Función para actualizar carrito
function actualizarCarrito() {
  if (contadorCarrito) {
    contadorCarrito.textContent = carrito.length;
  }

  const contenedor = document.getElementById("carrito-contenedor");
  if (!contenedor) return;

  contenedor.innerHTML = "";

  if (carrito.length === 0) {
    contenedor.innerHTML = "<p>El carrito está vacío.</p>";
    return;
  }

  let total = 0;

  carrito.forEach((product, index) => {
    const div = document.createElement("div");
    div.classList.add("producto-carrito");
    div.innerHTML = `
      <p>${product.nombre} - $${product.precio}</p>
      <button class="btn-eliminar" data-index="${index}">Eliminar</button>
    `;
    contenedor.appendChild(div);
    total += product.precio;
  });

  const totalHTML = `
    <div class="col-12 text-center mt-4">
      <h4>Total: $${total}</h4>
      <button id="vaciar-carrito" class="btn btn-danger mt-2">Vaciar carrito</button>
    </div>
  `;
  contenedor.insertAdjacentHTML("beforeend", totalHTML);

  // Vaciar carrito
  document.getElementById("vaciar-carrito").addEventListener("click", () => {
    carrito = [];
    localStorage.removeItem("carrito");
    actualizarCarrito();
  });

  // Eliminar productos individuales
  const botonesEliminar = document.querySelectorAll(".btn-eliminar");
  botonesEliminar.forEach((btn) => {
    btn.addEventListener("click", () => {
      const index = parseInt(btn.dataset.index);
      eliminarProducto(index);
    });
  });
}

function eliminarProducto(index) {
  carrito.splice(index, 1);
  localStorage.setItem("carrito", JSON.stringify(carrito));
  actualizarCarrito();
}
