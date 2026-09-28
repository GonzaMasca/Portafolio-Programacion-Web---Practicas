// 1. Objeto Libro: lo hago como objeto literal, con un método que usa this para armar el texto.
const libro = {
    titulo: "Cien años de soledad",
    autor: "Gabriel García Márquez",
    anio: 1967,
    descripcion() {
        return `${this.titulo}, de ${this.autor} (${this.anio})`;
    }
};

console.log(libro.descripcion());

// 2. Objeto cuentaBancaria: acá lo importante es que retirar() valide el saldo antes de descontar.
const cuentaBancaria = {
    saldo: 0,
    titular: "Ignacio",
    depositar(monto) {
        this.saldo += monto;
    },
    retirar(monto) {
        // Si no controlo esto el saldo podría quedar negativo, que no tiene sentido para una cuenta.
        if (monto > this.saldo) {
            console.log("Fondos insuficientes");
            return;
        }
        this.saldo -= monto;
    }
};

cuentaBancaria.depositar(1000);
cuentaBancaria.retirar(300);
console.log(cuentaBancaria.saldo);

// 3. Objeto Rectangulo
const rectangulo = {
    ancho: 5,
    alto: 3,
    area() {
        return this.ancho * this.alto;
    },
    perimetro() {
        return 2 * (this.ancho + this.alto);
    }
};

console.log(rectangulo.area());
console.log(rectangulo.perimetro());

// 4. Inventario: acá el objeto no es un array, así que para recorrerlo uso Object.values/Object.entries.
const inventario = {
    teclado: { precio: 50000, stock: 10 },
    mouse: { precio: 25000, stock: 20 },
    monitor: { precio: 180000, stock: 5 }
};

// Object.values() me da solo los objetos producto (sin el nombre), que es todo lo que necesito para sumar.
function valorTotalInventario(inventario) {
    return Object.values(inventario)
        .reduce((acumulado, producto) => acumulado + producto.precio * producto.stock, 0);
}

// Acá sí necesito el nombre además del producto, por eso uso entries() en vez de values().
// El acumulador arranca con precio -Infinity a propósito, así el primer producto real siempre lo gana sin tener que asumir cuál es "el primero".
function productoMasCaro(inventario) {
    return Object.entries(inventario)
        .reduce((masCaro, [nombre, producto]) =>
                producto.precio > masCaro.precio ? { nombre, ...producto } : masCaro,
            { nombre: null, precio: -Infinity, stock: 0 }
        );
}

// Filtro por stock === 0 y me quedo solo con el nombre (el "[, producto]" ignora la clave, y el "[nombre]" ignora el producto).
function productosSinStock(inventario) {
    return Object.entries(inventario)
        .filter(([, producto]) => producto.stock === 0)
        .map(([nombre]) => nombre);
}

// Esta muta el inventario original en vez de devolver uno nuevo, porque quiero que el precio quede actualizado de verdad.
function incrementarPrecios(inventario, porcentaje) {
    for (const producto of Object.values(inventario)) {
        producto.precio = producto.precio * (1 + porcentaje / 100);
    }
    return inventario;
}

console.log(valorTotalInventario(inventario));
console.log(productoMasCaro(inventario));
console.log(productosSinStock(inventario));
console.log(incrementarPrecios(inventario, 15));

// 5. deepEqual: la comparación normal (=== o ==) no sirve para objetos porque compara referencias, no contenido.
// Por eso tengo que comparar clave por clave, y si el valor de una clave es OTRO objeto, me llamo a mí misma (recursión).
function deepEqual(obj1, obj2) {
    // Caso base fácil: mismos primitivos, o literalmente el mismo objeto en memoria.
    if (obj1 === obj2) return true;

    // Si alguno no es objeto (o es null), y ya sé que no son === iguales, entonces son distintos.
    if (typeof obj1 !== "object" || typeof obj2 !== "object" || obj1 === null || obj2 === null) {
        return false;
    }

    const claves1 = Object.keys(obj1);
    const claves2 = Object.keys(obj2);

    // Si tienen distinta cantidad de propiedades, ya no pueden ser iguales.
    if (claves1.length !== claves2.length) return false;

    // every() corta apenas encuentra una clave distinta, así no sigo comparando de más.
    return claves1.every(clave => deepEqual(obj1[clave], obj2[clave]));
}

const a = { x: 10, y: { z: 20 } };
const b = { x: 10, y: { z: 20 } };

console.log(deepEqual(a, b));

// 6. merge: la idea es fusionar los dos objetos, pero si una propiedad es un objeto anidado en AMBOS,
// no quiero que uno pise al otro entero, sino fusionar también ese objeto interno (por eso es recursivo).
function merge(obj1, obj2) {
    // Arranco con una copia de obj1 y voy pisando/agregando lo que venga de obj2.
    const resultado = { ...obj1 };

    for (const clave of Object.keys(obj2)) {
        const valor1 = obj1[clave];
        const valor2 = obj2[clave];

        // Si en los dos objetos esa clave es a su vez un objeto, me llamo a mí misma para mezclarlos en profundidad.
        if (typeof valor1 === "object" && valor1 !== null && typeof valor2 === "object" && valor2 !== null) {
            resultado[clave] = merge(valor1, valor2);
        } else {
            // Si no, el valor de obj2 gana (así funciona un merge normal, tipo Object.assign).
            resultado[clave] = valor2;
        }
    }

    return resultado;
}

const obj1 = {
    usuario: { nombre: "Ana", edad: 20 },
    activo: true
};

const obj2 = {
    usuario: { ciudad: "Mendoza" }
};

console.log(merge(obj1, obj2));