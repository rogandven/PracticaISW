// Primitivos
const NUMERO = 8;
const TEXTO = "TEXTO";
const BOOLEANO = true;
const INDEFINIDO = undefined;
const NULO = null;
const NOESNUMERO = NaN;
const SIMBOLO = Symbol;

const ARREGLO = [];
const OBJETO = {};

const ARREGLO2 = [1, 2, 3, "4", 5, 6, 7];
const OBJETO2 = {
    nombre: "Armando Mesa",
    nota: 7.0,
}

console.log(typeof NUMERO);
console.log(typeof TEXTO);
console.log(typeof BOOLEANO);
console.log(typeof INDEFINIDO);
console.log(typeof NULO);
console.log(typeof NOESNUMERO);
console.log(typeof SIMBOLO);
console.log("-------------");
console.log(typeof ARREGLO);
console.log(typeof OBJETO);
console.log("-------------");
console.log(ARREGLO2[0]);
console.log(OBJETO2.nombre);

for (let i = 0; i < ARREGLO2.length; i++) {
    console.log(ARREGLO2[i]);
}

if (NaN || undefined || null || 0 || "" || false) {
    console.log("¡Verdadero!");
} else {
    console.log("¡Falso!");
}

ARREGLO2.forEach((elemento) => {
    console.log(elemento);
})

console.log("Mario " + 10);

function funcion1 (parametro) {
    console.log("Hola, esta es una función " + parametro);
}

funcion1("Luigi")

const funcion2 = (parametro) => {
    console.log(parametro + " es muy malo!");
}

funcion2("Juan");