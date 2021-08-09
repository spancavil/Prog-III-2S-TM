import React from "react";

function Footer (){
    let numeros = [1,20,50,100];
    let numeroMaximo = numeros.filter(function(numero){
        return numero > 40;
    }); //Me devuelve otro array cuyos valores son mayores a 40
    return(
        <footer>
            Este es el primer número del array mayor a 40: {numeroMaximo[0]}
        </footer>
    )
}

export default Footer;