const empleado = {
    nombre: "Ana",
    edad: 35,
    activo: true,

    direccion: {
        ciudad: "Mendoza",
        pais: "Argentina"
    },

    habilidades: ["JavaScript", "Java", "SQL"],

    salario: 850000,

    saludar() {
        return `Hola, soy ${this.nombre}`;
    }
};

// Recorre un objeto sin saber de antemano qué propiedades tiene (for...in) y muestra el tipo de cada una.
// typeof no distingue array de object ni detecta funciones como "método", por eso hay que chequear
// Array.isArray() y typeof === "function" antes de caer en el caso genérico "object".
function inspeccionarObjeto(objeto) {
    console.log("========== INSPECCIÓN DEL OBJETO ==========");

    for (const propiedad in objeto) {
        const valor = objeto[propiedad];

        console.log(`\nPropiedad: ${propiedad}`);

        if (Array.isArray(valor)) {
            console.log("Tipo: array");
            console.log(`Cantidad de elementos: ${valor.length}`);
        } else if (typeof valor === "function") {
            console.log("Tipo: function");
            console.log("Método detectado");
        } else if (typeof valor === "object" && valor !== null) {
            console.log("Tipo: object");
            console.log("Valor: [objeto]");
        } else {
            // Caso de los primitivos: string, number, boolean.
            console.log(`Tipo: ${typeof valor}`);
            console.log(`Valor: ${valor}`);
        }
    }

    console.log("\n============================================");
}

inspeccionarObjeto(empleado);

// Busca una propiedad por nombre aunque esté anidada dentro de otros objetos.
// Si el objeto actual no tiene esa propiedad, se llama a sí misma (recursión) con cada valor
// que a su vez sea un objeto, hasta encontrarla o quedarse sin lugares donde buscar.
function buscarPropiedad(objeto, nombre) {
    if (typeof objeto !== "object" || objeto === null) {
        return undefined;
    }

    if (Object.prototype.hasOwnProperty.call(objeto, nombre)) {
        return objeto[nombre];
    }

    for (const clave in objeto) {
        const valor = objeto[clave];

        if (typeof valor === "object" && valor !== null) {
            const resultado = buscarPropiedad(valor, nombre);
            if (resultado !== undefined) {
                return resultado;
            }
        }
    }

    return undefined;
}

console.log(buscarPropiedad(empleado, "ciudad"));