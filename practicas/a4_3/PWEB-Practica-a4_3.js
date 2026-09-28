const numeros = [3, 6, 9, 12, 15, 18];

const empleados = [
    { nombre: "Ana", departamento: "Ventas" },
    { nombre: "Luis", departamento: "IT" },
    { nombre: "Marta", departamento: "Ventas" },
    { nombre: "Pedro", departamento: "IT" },
    { nombre: "Sofía", departamento: "Marketing" }
];

//Primero filtro los pares, después les saco el cubo. Encadenar filter+map es más claro que un solo for con ifs.
const cuboNumerosPares = numeros.filter(n => n%2 === 0).map(n => n**3);
console.log(cuboNumerosPares);

//Agrupo los empleados por departamento usando reduce: el acumulador es un objeto donde cada clave es un departamento.
//Si todavía no existe esa clave la creo como array vacío, y después le hago push del nombre.
const agrupados = empleados.reduce((resultado, empleado) => {
    if (!resultado[empleado.departamento]) {
        resultado[empleado.departamento] = [];
    }
    resultado[empleado.departamento].push(empleado.nombre);
    return resultado;
},{});
console.log(agrupados);