const alumnos = [
    { nombre: "Ana", edad: 20, notas: [8, 9, 7] },
    { nombre: "Pedro", edad: 22, notas: [6, 5, 7] },
    { nombre: "Luis", edad: 19, notas: [9, 10, 8] }
];

// Por cada alumno, sumo sus notas con reduce y la divido por la cantidad de notas para sacar el promedio.
// map() devuelve un arreglo nuevo con un objeto {nombre, promedio} por cada alumno.
const promedios = alumnos.map(alumno => {
    const suma = alumno.notas.reduce((acum, nota) => acum + nota, 0);
    const promedio = suma / alumno.notas.length;
    return { nombre: alumno.nombre, promedio: promedio };
});

console.log(promedios);

// De los promedios ya calculados, filter() se queda solo con los que tienen promedio 6 o más.
const aprobados = promedios.filter(alumno => alumno.promedio >= 6);

console.log(aprobados);