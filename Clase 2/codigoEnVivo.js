/* Shortcuts de teclado : CTRL SHIFT I => espacio e indentado automático
    CTRL SHIFT A => Comentar bloque de código
    CTRL K C => Comenta linea de código
    CTRL K U => Descomenta linea de codigo
    TAB => tabulado con espacios
    SHIFT TAB => tabulado hacia atrás
    ALT Z => Me acomoda el código al tamaño de la ventana
 */

//METODOS DE ARRAYS

//Map
let numeros = [2, 5, 10];

let numerosTriple = numeros.map(function (elemento) {
    return elemento * 3;
})

/* console.log(numerosTriple);
console.log(numeros);
 */


//Filter. Ejemplo: filtramos aquellos datos con edades menores a 18 años.
let edades = [10, 22, 45, 17, 21];

let edadesMenoresA18 = edades.filter((elemento) => {
    return elemento < 18;
});

//console.log(edadesMenoresA18);

//Destructuring de objetos.

const zapatilla1 = { talle: 42, marca: "Adidas", descripcion: "Una bonita descripción" };
const zapatilla2 = { talle: 38, marca: "Nike", descripcion: "Una fea descripción" };

//Podemos cambiar las propiedades internas del objeto, pero no podemos cambiar el tipo de datos
//Ejemplo zapatilla = "22";
zapatilla1.marca = "Topper";

//console.log(zapatilla1);

let { descripcion, marca } = zapatilla1;

//Renombramos la descripcion como descripción 2 y marca como marca2, para distinguir las distintas variables.
let { descripcion: descripcion2, marca: marca2 } = zapatilla2

console.log(descripcion);
console.log(marca);
console.log(descripcion2);
console.log(marca2);
console.log(zapatilla1.descripcion);





