const usuarios = [
    { nombre: "ana", clave: "12345" },
    { nombre: "pedro", clave: "abcde" },
    { nombre: "luis", clave: "qwerty" }
];

// Pone en mayúscula la primera letra y deja el resto del string igual.
const capitalizar = nombre => nombre.charAt(0).toUpperCase() + nombre.slice(1);

// Cifrado César simple: recorre la clave letra por letra y corre cada carácter 3 posiciones en el código ASCII.
const encriptar = clave => {
    return clave
        .split("")
        .map(caracter => String.fromCharCode(caracter.charCodeAt(0) + 3))
        .join("");
};

// Recibe funciones como parámetros (fnNombre, fnClave) y las aplica a cada usuario.
// Esto es una función de orden superior: no le importa QUÉ hace cada función, solo las ejecuta.
function transformarUsuarios(arreglo, fnNombre, fnClave) {
    return arreglo.map(usuario => ({
        nombre: fnNombre(usuario.nombre),
        clave: fnClave(usuario.clave)
    }));
}

const usuariosTransformados = transformarUsuarios(usuarios, capitalizar, encriptar);

console.log(usuariosTransformados);