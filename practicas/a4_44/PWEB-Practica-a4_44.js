const matriz3D = [
    [[1, 2], [3, 4]],
    [[5, 6], [7, 8]],
    [[9, 0], [1, 2]]
];

// flat(Infinity) aplana todos los niveles de anidamiento sin importar cuántos haya (no hace falta saber si es 2D, 3D, etc.)
const arregloPlano = matriz3D.flat(Infinity);
// Sin comparador, sort() ordena como si fueran strings (10 quedaría antes que 2), por eso le paso (a, b) => a - b.
arregloPlano.sort((a, b) => a - b);

console.log(arregloPlano);