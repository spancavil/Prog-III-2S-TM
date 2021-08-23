import React, { Component } from 'react';

//Todos los componentes con estados los declaramos con "class"
class Titulo extends Component {

    //Para inicializar un estado, usamos un constructor(props) para utilizar las props en
    //caso de que hayan.
    constructor(props) {
        //super(props) siempre va
        super(props)

        //inicializamos nuestro estado, que será un objeto literal, cuya propiedad es "valor" y se
        //inicializa con "valorInicial" que se pasa por props.
        //Pueden haber todas las propiedades que queramos en nuestro estado.
        this.state = {
            valor: this.props.valorInicial
            //Va un this delante de props, sino no lo reconoce.
        }
    }

    //nombre del método (){ ... codigo ... }
    //Método saludar() .. no recibe parámetros
    saludar() {
        alert("Hiciste un click!")
    }

    //Método que detecta cambios en el input.. no recibe parámetros.
    cambioInput() {
        console.log("Cambios en el input")
    }

    //Metodo que recibe un parámetro (color)
    dobleClick(color) {
        console.log(`Doble click en el button, el color es:  ${color}`)
    }

    aumentar() {
        //El valor nunca superará a 7
        if( this.state.valor < 7 ){

            this.setState({
                valor: this.state.valor + 1
            })

        }
    }
    
    decrementar() {
        // No quiero que el contador vaya a valores negativos
        if( this.state.valor > 0){

            this.setState({
                valor: this.state.valor - 1
            })

        }
    }

    render() {
        //A las variables las coloco entre render() y return
        let color = "Fucsia";
        return (
            <React.Fragment>
                <h1 onClick={() => this.saludar()}> Clase 6 </h1>

                {/* Una forma de llamar a la función saludar sin arrow function (pero sin parámetros)
                <h1 onClick={this.saludar}> Clase 6</h1> */}

                <input onChange={() => this.cambioInput()}></input>
                {/* Eventos con parámetros */}
                <button onDoubleClick={() => this.dobleClick(color)}> Double click !</button>
                <button onClick={() => this.aumentar()}>Aumentar en 1 el contador</button>
                <button onClick={() => this.decrementar()}> decrementar en 1 el contador </button>
                <h4> {this.state.valor}</h4>
            </React.Fragment>
        )
    }
}

export default Titulo;