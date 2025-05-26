// lista de productos
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


// carrito de compras
let carrito = [];




// menú de opciones
function mostrarProductos() {
  let lista = "Productos disponibles:\n\n";
  productos.forEach(producto => {
    lista += `${producto.id}. ${producto.nombre} - $${producto.precio}\n`;
  });
  alert(lista);
}

// funcion agregar al carrito -->Prompt(ventana para ingresar datos)

function agregarAlCarrito() {
  mostrarProductos();

  let id = parseInt(prompt("Ingrese el ID del producto que desea comprar:"));

  let productoSeleccionado = productos.find(p => p.id === id);

  if (productoSeleccionado) {
    carrito.push(productoSeleccionado);
    alert(`✅ "${productoSeleccionado.nombre}" fue agregado al carrito.`);
  } else {
    alert("❌ Producto no encontrado. Intente nuevamente.");
  }
}

// funcion mostrar contenido del carrito
// lenght --> longitud o largo del carrito


function mostrarCarrito() {
  if (carrito.length === 0) {
    alert("🛒 El carrito está vacío.");
    return;
  }

  let mensaje = "🧾 Productos en tu carrito:\n\n";
  let total = 0;

  carrito.forEach((producto, index) => {
    mensaje += `${index + 1}. ${producto.nombre} - $${producto.precio}\n`;
    total += producto.precio;
  });

  mensaje += `\n💰 Total a pagar: $${total}`;
  alert(mensaje);

  // mostrar en consola también --> Console.log
  console.log("Resumen de la compra:");
  console.table(carrito);
  console.log("Total: $" + total);
}

// función principal del simulador -->Alert + Confirm

function iniciarSimulador() {
  alert("¡Bienvenido al simulador de compras de PRANA!");

  let seguirComprando = true;

  while (seguirComprando) {
    agregarAlCarrito();
    seguirComprando = confirm("¿Querés agregar otro producto?");
  }

  mostrarCarrito();
}


iniciarSimulador();
