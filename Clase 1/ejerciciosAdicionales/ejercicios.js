/*
EJERCICIOS SELECCIONADOS
------------------------

5) Procesando cursos

Generar un array con 6 elementos (5 elementos)
Cada elemento debe ser un objeto literal con las propiedades:
- Nombre del curso
- Descripción del curso
- Cantidad de alumnos
- Array de días de la semana que se cursa
a) ¿Se te ocurre cómo obtener el tercer curso?
b) ¿Se te ocurre cómo obtener el nombre del cuarto curso?
c) ¿Se te ocurre cómo agregarle un día de cursada al curso número 2?
d) Agregale a cada curso un array de alumnos
e) Cada alumno debe ser un objeto literal con nombre y apellido
f) ¿Cómo puedo obtener el nombre del primer alumno del curso 3?

[
    {nombre: "C1", descripcion: "Programación III Sebas-Guido", cantAlumnos: 38, diasCursada: ["lu 8-11:20", "ju 8-9:40"]},
    {nombre: "C2", descripcion: "Programación III Adri-Sebi", cantAlumnos: 42, diasCursada: ["lu 9-12:20", "ju 9-10:40"]},
    {nombre: "C3", descripcion: "Programación III Ale-Agus", cantAlumnos: 28, diasCursada: ["lu 9-12:20", "ju 9-1:40"]},
    {nombre: "C4", descripcion: "Programación III Ale-Sebi", cantAlumnos: 39, diasCursada: ["lu 14:30-17:50", "mi 10:50 12:30"]},
    {nombre: "C5", descripcion: "Programación III Dani-Guido", cantAlumnos: 40, diasCursada: ["lu 14:30-17:50", "ju 16:20-18:00"]}
]

*/



/*
Funciones

3) Calculadora de consumo
¿Alguna vez te preguntaste cuánto consumiras un mismo producto desde hoy hasta el final de tu vida? Es hora de calcularlo…

Declara la función calcularConsumo:
 La función deberá tomar tres parámetros: edad actual -  consumo por día - producto.
Define una edad máxima para hacer el cálculo del consumo que harás del producto ingresado, luego haz el planteo para resolver el ejercicio.
¿Se te ocurre cuál sería la cuenta a plantear?
Retorna un mensaje como por ejemplo: 
    “Necesitarás NN de producto para que dure el resto de tu vida”
Donde NN será la cantidad calculada de consumo y producto el parámetro ingresado.
*/


/*
Loops

5) Recorriendo personas
Dada la siguiente variable:

let personas = [
    {
        nombre: "Jon",
        apellido: "Snow",
        edad: 23,
        ciudad: "Winterfell"
    },
    {
        nombre: "Daenerys",
        apellido: "Targaryen",
        edad: 19
    },
    {
        nombre: "Arya",
        apellido: "Stark",
        edad: 12,
        ciudad: "Winterfell"
    },
    {
        nombre: "Tyrion",
        apellido: "Lannister",
        edad: 32,
        ciudad: "Casterly Rock"
    }
]

Escribí el código que permita recorrer este array de personas y por cada una de ellas se realice la siguiente lógica:

Si la persona es menor de edad y no tiene ciudad se debe imprimir el mensaje: “Hola NOMBRE APELLIDO criatura viajera!”
Si la persona es mayor de edad y no tiene ciudad se debe imprimir el mensaje: “Hola NOMBRE APELLIDO eminencia viajera!”
Si la persona es menor de edad y si tiene ciudad debe imprirse el mensaje: “Hola mini NOMBRE APELLIDO de CIUDAD”
Si la persona es mayor de edad y si tiene ciudad debe imprirse el mensaje: “Hola mayor NOMBRE APELLIDO de CIUDAD”
Además de eso si la persona tiene un nombre que tenga menos de 4 letras debe verse también el mensaje: “Ay pero que nombre cortito!”
Por último, si la persona es de la ciudad “Winterfell” debe imprimirse el mensaje “Winter is coming”

*/

