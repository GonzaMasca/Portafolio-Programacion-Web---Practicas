const productos = [
    { nombre: "Notebook", precio: 1200, stock: 5 },
    { nombre: "Mouse", precio: 25, stock: 0 },
    { nombre: "Teclado", precio: 45, stock: 10 },
    { nombre: "Monitor", precio: 350, stock: 3 },
    { nombre: "Webcam", precio: 80, stock: 0 },
    { nombre: "Auriculares", precio: 60, stock: 8 }
];

// 1) Filtrar los productos con stock disponible (los que tienen stock en 0 quedan afuera).
const productosConStock = productos.filter(producto => producto.stock > 0);

// 2) De cada producto que quedó, me quedo solo con nombre y precio (uso destructuring para no arrastrar el stock).
const catalogoDisponible = productosConStock.map(({ nombre, precio }) => ({ nombre, precio }));

// 3) Salida en la consola.
console.log(catalogoDisponible);