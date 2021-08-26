/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import './card.css';

class Card extends Component {

    constructor(props) {
        super(props);
        this.state = {
            clase: 'hide',
            mensaje: 'ver más'
        }
    }

    //Funcion o método que es llamado cuando se hace click en "ver mas o ver menos"
    handleShow(){
        if (this.state.clase === 'hide'){
            this.setState({
                clase: 'show',
                mensaje: "ver menos"
            })
            } else {
            this.setState({
                clase: 'hide',
                mensaje: "ver mas"
            })   
        }
    }

    render() {
        return (
            <div className="character-card">
                <img src={`${this.props.image}`} alt="" />
                <h4>{this.props.name}</h4>
                <p className='more' onClick={() => this.handleShow()}>{this.state.mensaje}</p>
                <p className= {this.state.clase}>Character description Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis suscipit voluptatem corporis vitae, eius, alias, omnis exercitationem odit officia nemo molestiae molestias? Deleniti vel suscipit voluptatem mollitia vitae. Placeat, incidunt?</p>
            </div>
        );
    }
}

export default Card