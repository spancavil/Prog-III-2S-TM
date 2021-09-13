import React, { Component } from 'react';

export default class FilterField extends Component {
    constructor() {
        super();
        //Valor inicial del estado
        this.state = {
            valorInput: ""
        }
    }

    prevenirSubmit(evento) {
        console.log("Prevenimos el comportamiento por default del form que es recargar la página");
        evento.preventDefault();
    }

    capturaInput(evento) {
       this.setState({
           valorInput: evento.target.value
       }, ()=> this.props.filtroPorNombre(this.state.valorInput))
       
    }

    render() {
        //console.log(this.state.valorInput)
        return (
            <form onSubmit={(evento) => this.prevenirSubmit(evento)}>
                <label>Search: </label>
                <input onChange={(evento)=>{this.capturaInput(evento)}} type="text" />
            </form>
        )
    }
}