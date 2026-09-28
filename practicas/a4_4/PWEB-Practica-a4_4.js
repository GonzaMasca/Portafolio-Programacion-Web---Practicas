const numeros = [3, 7, 2, 7, 9, 3, 7, 1, 4, 7, 2, 8, 7, 5, 6];

//Uso un objeto como contador: la clave es el número y el valor cuántas veces salió.
const contador = {};
//Arranco asumiendo que el primero es el más repetido, después se va corrigiendo solo.
let masRepetido = numeros[0];
let maxRepeticiones = 0;

//Recorro una sola vez el arreglo: cuento y en el mismo paso me fijo si superó el máximo.
//Así no tengo que hacer un segundo recorrido para buscar el número ganador.
for (const num of numeros) {
    contador[num] = (contador[num] || 0) + 1;

    if (contador[num] > maxRepeticiones) {
        maxRepeticiones = contador[num];
        masRepetido = num;
    }
}

console.log(`El número más repetido es ${masRepetido}, aparece ${maxRepeticiones} veces`);