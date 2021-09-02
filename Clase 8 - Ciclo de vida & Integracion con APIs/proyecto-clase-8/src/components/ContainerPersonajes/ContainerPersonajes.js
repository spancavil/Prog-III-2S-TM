import React, { Component } from 'react';
import Character from '../Character/Character';
import './style.css'

//Mi container contiene la lógica de traer datos y renderizarlos utilizando condiciones y map.

export default class ContainerPersonajes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            characters: []
        }
    }

    //Hacemos el llamado a la API de RICK and Morty apenas se monta el componente

    componentDidMount() {
        fetch('https://rickandmortyapi.com/api/character')
            .then(response => { return response.json() })
            .then(data => {
                //console.log(data.results);
                //let personajes = data.results;

                //A la información que obtengo la guardo en el estado dentro de una propiedad
                this.setState({
                    characters: data.results
                })
            })
            .catch(error => console.log(error));
    }
    //Funcion de remover personaje
    removerPersonaje(name){
        //Obtengo el nombre del personaje que quiero eliminar mi array

        //console.log(name);

        //Permanecen en mi array "personajesFiltrados" aquellos personajes que NO tengan el nombre a filtrar
        // !== significa distinto

        const personajesFiltrados = this.state.characters.filter(character => character.name !== name)

        //console.log(personajesFiltrados);

        //Ultimo paso es setear el estado
        this.setState({
            characters: personajesFiltrados
        })
    }


    render() {
        console.log("Me estoy renderizando!")
        console.log(this.state.characters);

        //if ternario
        // condicion ? Se cumple : No se cumple

        return (
            <div className = 'container'>
                {this.state.characters === [] ?
                    //se cumple la condición
                    < h4 > Cargando ... </h4>:
                    //no se cumple la condición
                    this.state.characters.map((character, index) => {
                        return <Character key={index}
                        name={character.name}
                        photo={character.image}
                        especie = {character.species}
                        estado = {character.status}
                        removerPersonaje = {(name)=>this.removerPersonaje(name)}
                        />
                    })
                }
            </div>
        )
    }
}