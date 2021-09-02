import React, { Component } from 'react';
import './styles.css'

//Componente de presentación (sin lógica)
export default class Character extends Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <div className = 'character'>
               <img src={this.props.photo} alt=""/>
               <h4> {this.props.name} </h4>
               <h4> Estado: {this.props.estado}</h4>
               <h4> Especie: {this.props.especie}</h4>
            </div>
        )
    }
}