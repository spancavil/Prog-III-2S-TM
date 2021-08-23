import React, { Component } from 'react';
import './styles.css';

//Quiero poder seleccionar el color de fondo de cada Card mediante state.

export default class Personajes extends Component {

    constructor(props) {
        super(props);
        //acá inicializamos el state con este valor inicial
        this.state = {
            color: "rgb(253, 98, 81)"
        }
    }

    //Método asociado al cambio de color
    cambiarColor(evento) {
        this.setState({
            color: evento.target.value
        })
    }

    render() {
        return (
            //Declaramos al backgroundColor como un estilo en línea y sobreescribe el background del styles.css
            <div className="character-card" style={{ backgroundColor: this.state.color }}>
                {/* A props.foto le agregamos this adelante (porque estamos con clase) */}
                <img src={this.props.foto} alt="" />
                <h4> Descripcion mega ultra requete mega ultra requete mega ultra requete mega ultra requete extensa</h4>
                {/* Con cada cambio del select se dispara el evento y llamamos al método cambiarColor */}
                <select onChange={(evento) => this.cambiarColor(evento)} name="Cambiar Color">
                    <option value="purple"> Purple </option>
                    <option value="red"> Red </option>
                    <option value="orange"> Orange </option>
                    <option value="yellow"> Yellow </option>
                    <option value="green"> Green </option>
                    <option value="blue"> Blue </option>
                </select>
            </div>
        )
    }
}