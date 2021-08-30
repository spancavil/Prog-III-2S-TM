import React, { Component } from 'react';

export default class Contador extends Component {
    constructor(props) {
        super(props);
        this.state = {
            valor: 0
        }
    }

    onAdd() {
        if (this.state.valor < 10) {
            this.setState({
                valor: this.state.valor + 1
            })
        }
    }

    onDecrement() {
        if (this.state.valor > 0) {
            this.setState({
                valor: this.state.valor - 1
            })
        }
    }

    //CICLO DE VIDA DE COMPONENTES

    //Se autoejecuta esta función la primera vez que se muestra en pantalla el componente
    componentDidMount() {
        console.log(`Se ejecutó componentDidMount. El valor del contador es: ${this.state.valor}.`)
    }

    //Se autoejecuta cuando se actualiza el estado del componente
    componentDidUpdate() {
        console.log(`Se actualizó el componente y se ejecutó componentDidUpdate. El valor del contador es: ${this.state.valor}`)
    }

    render() {
        return (
            <div>
                <button onClick={() => this.onAdd()}> + </button>
                <h4> {this.state.valor} </h4>
                <button onClick={() => this.onDecrement()}> - </button>
            </div>
        )
    }
}