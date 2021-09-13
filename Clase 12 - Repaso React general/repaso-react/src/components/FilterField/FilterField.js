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

    capturaInput() {
       
    }

    render() {
        return (
            <form onSubmit={(evento) => this.prevenirSubmit(evento)}>
                <label>Search: </label>
                <input onChange={null} type="text" />
            </form>
        )
    }
}