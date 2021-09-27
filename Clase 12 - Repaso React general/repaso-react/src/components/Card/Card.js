import React, { Component } from 'react';
import './style.css'

//Componente de presentación (sin lógica)
export default class Character extends Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <div className = {`card-${this.props.orientation}`}>
               <img src={this.props.photo} alt=""/>
               <h4> {this.props.name} </h4>
               <button onClick={()=> this.props.removerPersonaje(this.props.name)}> Eliminar</button>
            </div>
        )
    }
}