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

//menu de opciones

function mostrarproductos () {
  let lista = "productos disponibles:/n";
 //for each por cada producto + funcion flecha retorna el prod.
  productos.forEach((producto) => {
    lista += `ID: ${producto.id}, Nombre: ${producto.nombre}, Precio: $${producto.precio}\n`;
  });
  alert(lista);
}


//funcion agragar al carrito con un Prompt
function agregarAlCarrito() {
  const idProducto = parseInt(prompt("Ingrese el ID del producto que desea agregar al carrito:"));
  const producto = productos.find((p) => p.id === idProducto);
  
  if (producto) {
    carrito.push(producto);
    alert(`Producto agregado: ${producto.nombre}`);
  } else {
    alert("Producto no encontrado.");
  }
}