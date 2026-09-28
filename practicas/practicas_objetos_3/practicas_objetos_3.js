const productos = [
    { nombre: "Mouse", categoria: "Periféricos", precio: 15000, stock: 10 },
    { nombre: "Teclado", categoria: "Periféricos", precio: 25000, stock: 0 },
    { nombre: "Monitor", categoria: "Pantallas", precio: 180000, stock: 4 },
    { nombre: "Notebook", categoria: "Computadoras", precio: 950000, stock: 2 },
    { nombre: "Auriculares", categoria: "Periféricos", precio: 45000, stock: 8 },
    { nombre: "Webcam", categoria: "Periféricos", precio: 30000, stock: 0 }
];

// 1. Mostrar todos los productos
console.log(productos);

// 2. Mostrar solamente los nombres
const nombres = productos.map(producto => producto.nombre);
console.log(nombres);

// 3. Buscar productos cuyo precio sea mayor a $100.000
const caros = productos.filter(producto => producto.precio > 100000);
console.log(caros);

// 4. Buscar productos que tengan stock
const conStock = productos.filter(producto => producto.stock > 0);
console.log(conStock);

// 5. Calcular el valor total del stock (precio x stock de cada producto, sumado con reduce)
const valorTotalStock = productos.reduce((acum, producto) => acum + producto.precio * producto.stock, 0);
console.log(valorTotalStock);

// 6. Obtener el producto más caro: reduce sin valor inicial arranca comparando el primero contra el segundo,
// y se va quedando con el que tenga mayor precio hasta recorrer todo el arreglo.
const masCaro = productos.reduce((max, producto) => producto.precio > max.precio ? producto : max);
console.log(masCaro);

// 7. Obtener el producto más barato (misma lógica que el anterior, pero se queda con el menor precio)
const masBarato = productos.reduce((min, producto) => producto.precio < min.precio ? producto : min);
console.log(masBarato);

// 8. Obtener todos los productos de la categoría "Periféricos"
const perifericos = productos.filter(producto => producto.categoria === "Periféricos");
console.log(perifericos);

// 9. Crear un nuevo arreglo que contenga solamente nombre y precio (descarta categoria y stock)
const nombresYPrecios = productos.map(producto => ({ nombre: producto.nombre, precio: producto.precio }));
console.log(nombresYPrecios);

// 10. Ordenar los productos por precio. Uso [...productos] para copiar el arreglo antes de ordenar,
// porque sort() ordena "in place" y así no modifico el arreglo original productos.
const ordenadosPorPrecio = [...productos].sort((a, b) => a.precio - b.precio);
console.log(ordenadosPorPrecio);

// 11. Determinar cuántos productos tienen stock menor a 5 (filtro y cuento cuántos quedaron con .length)
const pocoStock = productos.filter(producto => producto.stock < 5).length;
console.log(pocoStock);

// 12. Calcular el precio promedio de los productos (suma de precios dividido cantidad de productos)
const precioPromedio = productos.reduce((acum, producto) => acum + producto.precio, 0) / productos.length;
console.log(precioPromedio);

// 13. Agrupar los productos por categoría: el acumulador es un objeto donde cada clave es una categoría
// y el valor es un array con los productos de esa categoría. Si la clave todavía no existe, se crea vacía.
const porCategoria = productos.reduce((grupos, producto) => {
    if (!grupos[producto.categoria]) {
        grupos[producto.categoria] = [];
    }
    grupos[producto.categoria].push(producto);
    return grupos;
}, {});
console.log(porCategoria);