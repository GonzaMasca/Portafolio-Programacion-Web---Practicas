const matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

const n = matriz.length;
const diagonalPrincipal = [];
const diagonalSecundaria = [];

// La principal va de [0][0] a [n-1][n-1], por eso matriz[i][i].
// La secundaria va al revés en la columna, por eso matriz[i][n-1-i] (cuando i sube, la columna baja).
// Las dos tienen el mismo largo, así que las cargo en el mismo for.
for (let i = 0; i < n; i++) {
    diagonalPrincipal.push(matriz[i][i]);
    diagonalSecundaria.push(matriz[i][n - 1 - i]);
}

const sumaPrincipal = diagonalPrincipal.reduce((acumulado, num) => acumulado + num, 0);
const sumaSecundaria = diagonalSecundaria.reduce((acumulado, num) => acumulado + num, 0);
const sumaTotal = sumaPrincipal + sumaSecundaria;

console.log("Diagonal principal:", diagonalPrincipal);
console.log("Diagonal secundaria:", diagonalSecundaria);
console.log("Suma de ambas diagonales:", sumaTotal);