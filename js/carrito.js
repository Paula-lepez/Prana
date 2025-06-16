// lista de productos
//Creacion de una constante para alojar los prod.
const productos = [
    { id: 1,nombre: "Aros Sara",  precio: 85.000  },
    { id: 2,nombre: "Aros Tik" ,  precio: 60.000  },
    { id: 3,nombre: "Aros Lava",  precio: 65.000  },
    { id: 4,nombre: "Argollas" ,  precio: 65.000  },
    { id: 5,nombre: "Pulsera emma", precio: 60.000  },
    { id: 6,nombre: "Aros Perla", precio: 40.000  },
    { id: 7,nombre: "Anillos duo", precio: 90.000  },
    { id: 8,nombre: "Anillo Tim", precio: 85.000  },
    { id: 9,nombre: "Aros Prana", precio: 45.000  },
];


// carrito de compras USO DE CORCHETES PQ ES UNA LISTA o array.
let carrito = [];

//Botones para agregar productos al carrito vinculado con el HTML

const botonesAgregar = document.querySelectorAll(".btn-agregar");

botonesAgregar.forEach((btn, index) => {


//Evento de agregar al carrito con el click del usuario
btn.addEventListener("click", () => {
    const id = parseInt(btn.dataset.id);
    const producto = productos.find(p => p.id === id);
    if (producto) {
        agregarAlCarrito(producto);
        alert(`Producto ${producto.nombre} agregado al carrito.`);
        }
   });
});

//Evento --> actualizar el carrito
function actualizarCarrito() {
    const carritoContainer = document.getElementById("carrito");
    carritoContainer.innerHTML = ""; // Limpiar el contenido del carrito


    //Array con lenght recorre todo los prod.
    if (carrito.length === 0) {
        carritoContainer.innerHTML = "<p>El carrito está vacío.</p>";
        return;
    }

    let total = 0;
    const lista = document.createElement("ul");
  
    
    carrito.forEach((product) => {
        const item = document.createElement("li");
        item.textContent = `${product.nombre} - $${product.precio}`;
        lista.appendChild(item);
        total += product.precio;
    });


    const totalElement = document.createElement("p");
    totalElement.textContent = `Total a pagar: $${total}`;

    carritoContainer.appendChild(lista);
    carritoContainer.appendChild(totalElement);
  }