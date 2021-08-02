//Variable
let nombre = "Bautista"; //Cadena de texto o String

//No podemos redeclarar variables con let ni const
//let nombre = "Héctor";

//Constante
const dni = 42188231;

nombre = "Jorge";

//console.log("Nombre: "+ nombre + ", DNI: " + dni);

//Tipos de datos: primitivos, arrays, objetos, especiales

//Primitivos

let numero11 = 1.73 //Numero decimal o float;
let numero22 = 5 //Numero entero;

aux = false //Variable booleana: puede tener 2 valores true o false.

aux = true; //Reasignando el valor de la variable a false.

//Objetos

let persona = {
    nombre: "Rick", //Atributos
    edad: 20,       //Atributos
    soltero: true,  //Atributos
    saludar: function () { //Método
        return "Hola";
    }
}

//console.log(persona.edad);

//Sin paréntesis no se ejecuta la función
//console.log(persona.saludar);

//Se ejecuta la función.
//console.log(persona.saludar());

//Arrays. Permite cualquier tipo de datos, incluso objetos.
let menu = ["cafe con leche", "medialunas con jamón y queso", "bagel", "tostado", "capuccino", "jugo de naranja"];

//En los ARRAYS siempre la primera posición es el 0

//console.log(menu[4]); //Accedemos a "capuccino" que sería la posición quinta del array.

//let numeros = [1, 20, 6, 80, 10, "Sebastián", 80, "Alexia"];

//console.log(numeros[5]);

//Métodos de arrays

//Push: me agrega un elemento a la última posición del array
menu.push("té con hierbas");

//console.log(menu[6]);

menu.pop(); //método pop saca el último elemento del array.

//console.log(menu[6]);


//VARIABLES ESPECIALES
//Sumamos un número con un string (en forma de número), me duvuelve ambos juntos en formato string.
//Unicamente con el operador  +
let suma = 2 + "5";

let suma2 = 6 + "hola";

//Me devuelve NaN en cualquier otro tipo de operación entre número y string.
let multiplicacion = 5 * "campera";

// console.log(multiplicacion);

//Variable null
let temperatura = null;

// console.log(temperatura);

//Variable undefined
let estacion;

// console.log(estacion);

//FUNCIONES
//Principio DRY: Don't repeat yourself (no te repitas). Las funciones son porciones de codigo que vamos a reutilizar.

//Declaración de variables y funciones utilizando camelCase


//A la función siempre hay que llamarla para ejecutarla y pasarle los parámetros necesarios
function sumarNumeros(numero1, numero2, numero3) {
    return numero1 + numero2 + numero3; //numero1 no tiene nada que ver con el numero1 que está fuera de la función.
}

//console.log(sumarNumeros(6, 9, 2)); //Llamamos a la función y nos devuelve la suma correspondiente.

//Arrow function
const funcionResto = (divisor, dividendo) => {
    return divisor % dividendo;
}

//arrow sin return
const funcionMultiplicacion = (a, b) => a * b;

console.log(funcionResto(5, 2));

//CONDICIONALES
let numero1 = "1";

let numero2 = 1;

//Para evaluar distintas condiciones
// > Mayor
// < Menor
// >= Mayor o igual
// <= Menor o igual
// == operador para evaluar igualdad
// === operador de igualdad ESTRICTA.

if (numero1 > numero2){
    console.log("El numero1 es mayor al numero 2");
} else {
    console.log("El numero 1 es menor o igual al número 2");
}

if (numero1 == numero2) {
    console.log("El numero 1 es igual al numero 2. Igualdad simple") //Se ejecuta
}

//No sólo compara el contenido de la variable sino que además compara el tipo de dato
if (numero1 === numero2) {
    console.log("El numero 1 es igual al numero 2. Igualdad  estricta") //No se ejecutará
}

//If ternario 
let resultado = 4 > 10 ? "El 4 es mayor a 10" : "El 4 no es mayor a 10";

//console.log(resultado);

let alumnos = ["Agustín", "Jorgelina", "Mateo", "Uriel"];

//length es una propiedad del array y me indica la cantidad de elementos que posee el mismo
for (let i = 0; i < alumnos.length; i++) {
    console.log(alumnos[i]);
}

//Funciones callback

function nombreCompleto(nombre, apellido){
    return nombre + " " + apellido;
}

function saludar (nombre, apellido, callback){
    return "Hola " + callback(nombre, apellido) + " !";
}

console.log(saludar("Sebastian", "Ancavil", nombreCompleto));