const matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

// Suma de cada fila: como cada fila ya es un array, con map+reduce alcanza (una fila, una suma).
const sumaFilas = matriz.map(fila => fila.reduce((acumulado, num) => acumulado + num, 0));

// Suma de cada columna: acá no hay un método directo así que tengo que ir "columna por columna".
// Fijo el índice de columna y recorro todas las filas sumando esa posición.
const sumaColumnas = [];
for (let col = 0; col < matriz[0].length; col++) {
    let suma = 0;
    for (let fila = 0; fila < matriz.length; fila++) {
        suma += matriz[fila][col];
    }
    sumaColumnas.push(suma);
}

console.log("Suma de filas:", sumaFilas);
console.log("Suma de columnas:", sumaColumnas);