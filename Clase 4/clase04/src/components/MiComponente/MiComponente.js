import React from 'react';
import Bienvenido from '../Bienvenido/Bienvenido';

export default function MiComponente(){
    return(
        <div>
            <Bienvenido name="Johanna" edad = "21" nacimiento= "01/01/1998"/>
            {/* <Bienvenido name= "Cintia" edad = "23" nacimiento = "02/01/1999"/> */}
        </div>
    )
}