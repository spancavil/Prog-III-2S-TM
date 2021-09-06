import React, { Component } from 'react';

export default class FiltroPorNombre extends Component {
    constructor (){
        super();
        //Valor inicial del estado
        this.state = {
            valorInput: ""
        }
    }

    prevenirSubmit(evento){
        console.log("Prevenimos el comportamiento por default del form que es recargar la página");
        evento.preventDefault();
    }

    capturaInput(evento){
        //console.log(evento.target.value);
        this.setState({
            valorInput: evento.target.value 
        },
        //Funcion callback que se ejecuta inmediatamente después de
        //actualizar el estado.
        () => this.props.filtrarPorNombre(this.state.valorInput)
        )
    }

    render(){
        return(
            <form onSubmit={(evento)=> this.prevenirSubmit(evento)}>
                <label>Name: </label>
                <input onChange={(evento)=> this.capturaInput(evento) } type="text"/>
            </form>
        )
    }
}