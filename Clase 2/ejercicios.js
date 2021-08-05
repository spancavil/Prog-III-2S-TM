//Ejercicio 1

let numeros = [1, 5, 7, 12, 89, 23];

let numerosDoble = numeros.map(function (numero) {
    return numero * 2;
})

// console.log(numerosDoble);

// Ejercicio 2
//el método toString() agarra un valor y lo transforma en String

let numerosToString = numeros.map(elemento => elemento.toString());

console.log(numerosToString);

// Ejercicio 3
//Con mayúsculas por favor
//Usando el siguiente array de nombres:
//let nombres = [“franco”, “martina”, “leonardo”, “jose”, “lucia”, “josefina”];
//Crea una nueva variable que contenga todos los nombres del array en mayúscula. Usar toUpperCase()

//Documentacion de los métodos: mozilla MDN

const nombres = ["franco", "martina", "leonardo", "jose", "lucia", "josefina"];

//Con arrow
const nombresMayusculaArrow = nombres.map(nombre => nombre.toUpperCase());

//Con function
const nombresMayusculaFunction = nombres.map(function (nombre) {
    return nombre.toUpperCase();
})

console.log(nombresMayusculaFunction);

//Ejercicio 4
//Sólo nombres
/* Usando el siguiente array de objetos:
let personas = [
    {
        nombre: "Angelina Jolie",
        edad: 80
    },
    {
        nombre: "Eric Jones",
        edad: 2
    },
    {
        nombre: "Paris Hilton",
        edad: 5
    },
    {
        nombre: "Kayne West",
        edad: 16
    },
    {
        nombre: "Bob Ziroll",
        edad: 100
    }
];

Crea una variable llamada soloNombres que contenga un array tomando solamente el nombre de cada uno de los objetos.
Desafío extra: probá resolverlo con arrow function.
 */

let personas = [
    {
        nombre: "Angelina Jolie",
        edad: 80
    },
    {
        nombre: "Eric Jones",
        edad: 2
    },
    {
        nombre: "Paris Hilton",
        edad: 5
    },
    {
        nombre: "Kayne West",
        edad: 16
    },
    {
        nombre: "Bob Ziroll",
        edad: 100
    }
];

//console.log(personas[3]) mostramos el elemento 4 de mi array de personas (Kayne West)

let personasNombre = personas.map(function (persona) {
    return persona.nombre;
})

//console.log(personasNombre);

//Pendiente hacer lo mismo con arrow y hacerlo con for.

/* Probamos hacer lo mismo con filter

let personasNombreFilter = personas.filter(function(persona){
    return persona.nombre;
})

console.log(personasNombreFilter); */

//Ejercicio 4 b (agregado por mi)
//Filtrar todas aquellas personas mayores a 20 años

let personasFiltradasPorEdad = personas.filter(function (persona) {
    return persona.edad > 20
})

console.log(personasFiltradasPorEdad);