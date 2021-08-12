import React from 'react';
import './styles.css'

export default function Bienvenido(props){
    return (
        <h1 className = "bienvenido">
            ¡Hola {props.name}! Naciste el {props.nacimiento}, y tenés {props.edad} años.
        </h1>
    )
}