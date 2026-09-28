const empleados = [
    {
        nombre: "Ana",
        departamento: "IT",
        salario: 850000,
        experiencia: 4
    },
    {
        nombre: "Luis",
        departamento: "Ventas",
        salario: 650000,
        experiencia: 3
    },
    {
        nombre: "Marta",
        departamento: "IT",
        salario: 900000,
        experiencia: 5
    },
    {
        nombre: "Pedro",
        departamento: "Marketing",
        salario: 600000,
        experiencia: 2
    }
];
//Lista de departamentos que cuentan como válidos, la uso más abajo con includes().
const departamentosValidos = ["IT", "Ventas", "Marketing"]

//Uso every() porque necesito saber si TODOS cumplen, no solo alguno (con some() hubiera dado otra cosa).
//Cada condición la separo en su propia variable para que se entienda qué se está validando.
const todosValidos = empleados.every(empleado => {
    const tieneNombre = typeof empleado.nombre == "string" && empleado.nombre.trim() !=="";
    const salarioSuficiente = empleado.salario >= 500000;
    const departamentoValido = departamentosValidos.includes(empleado.departamento);
    //Esta regla es la más rara: si NO es de IT no me importa la experiencia, por eso el "!== IT ||".
    const experienciaOk = empleado.departamento !== "IT" || empleado.experiencia >= 2;

    return tieneNombre && salarioSuficiente && departamentoValido && experienciaOk;
});

//Salida en la consola.
console.log(todosValidos);