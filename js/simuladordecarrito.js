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
    alert(`√,Producto agregado: ${producto.nombre}`);
  } else {
    alert("X Producto no encontrado.");
  }
}

//Funcion mostrar el contendido del carrito 
//length --> longitud o largo del carrito

//=== (estrictamente igual valor y tipo de dato)
function mostrarCarrito() {
if (carrito.lenght===0) {
  alert("El carrito está vacío.");    
  returno
}


// barra n para salto de linea
let mensaje = " Productos en tu carrito:\n";
let total = 0;

carrito.forEach((producto, index) => {
  mensaje += `${index + 1}. ${producto.nombre} - $${producto.precio}\n`;
  total += producto.precio;
});

mensaje += `\n Total a pagar : $${total}`;
alert(mensaje);


//mostrar en consola tambien --> Console.log
console.log("Resumen de la compra");
//console.table: para mostrar en forma de tabla
console.table(carrito);
console.log("Total: $" + total);
}

//funcion alert + confirm

function IniciarSimulador () {
  alert("Bienvenido al carrito de compras de PRANA!");

//bucle usado: while 
//switch: estructura de control(UNIDAD 2)
//break:para frenar , termina la busqueda

let seguirComprando = true;
while (seguirComprando) {
      const opcion = prompt("Seleccione una opción:\n1. Ver productos\n2. Agregar al carrito\n3. Ver carrito\n4. Salir");


      //la voy a evaluar en ciertos casos
      switch (opcion) {
          case "1":
              mostrarproductos();
              break;
          case "2":
              agregarAlCarrito();
              break;
          case "3":
              mostrarCarrito();
              break;
          case "4":
              seguirComprando = false;
              alert("Gracias por su compra!");
              break;
          default:
              alert("Opción no válida, por favor intente nuevamente.");
      }
    }
  }
// Iniciar el simulador
IniciarSimulador();   