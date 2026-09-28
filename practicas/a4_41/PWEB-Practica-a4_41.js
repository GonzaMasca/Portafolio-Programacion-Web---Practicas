const estudiantes = [
    { nombre: "Ana", nota: 8 },
    { nombre: "Luis", nota: 5 },
    { nombre: "Carla", nota: 9 },
    { nombre: "Juan", nota: 6 },
    { nombre: "Pedro", nota: 4 }
];

// Nombres de los que aprobaron (nota >= 6). Primero filtro los objetos completos y recién ahí me quedo con el nombre.
const aprobados = estudiantes
    .filter(estudiante => estudiante.nota >= 6)
    .map(estudiante => estudiante.nombre);

console.log(aprobados);

// Ordenar el arreglo original de mayor a menor nota (ojo que sort() muta el array, no crea uno nuevo).
estudiantes.sort((a, b) => b.nota - a.nota);

console.log(estudiantes);

// Promedio general: sumo todas las notas con reduce y divido por la cantidad de estudiantes.
const suma = estudiantes.reduce((acumulado, estudiante) => acumulado + estudiante.nota, 0);
const promedio = suma / estudiantes.length;

console.log(promedio);