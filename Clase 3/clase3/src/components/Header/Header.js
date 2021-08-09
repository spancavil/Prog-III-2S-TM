import React from 'react';

function Header (){
    let nombreDelHeader = "Mi primer header en React";
    let fecha = new Date().toLocaleString();
    return(
        <header>
            {nombreDelHeader} - 
            {fecha} -
            Hola
        </header>
    )
}

export default Header;

