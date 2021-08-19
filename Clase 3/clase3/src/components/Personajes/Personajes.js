import React from 'react';
import './styles.css';

export default function Personajes (props){
    return (
        <div className = "character-card">
            <img src={props.img} alt=""/>
            <h4> Descripcion mega ultra requete mega ultra requete mega ultra requete mega ultra requete extensa</h4>
        </div>
    )
}