import React, { Component } from 'react';
import FilterField from '../FilterField/FilterField';
import Card from '../Card/Card';
import './style.css'

//Mi container contiene la lógica de traer datos y renderizarlos utilizando condiciones y map.

export default class Container extends Component {
    constructor(props) {
        super(props);
        this.state = {
            datos: [],
            datosFiltrados: []
        }
    }

    //Links de prueba
    //Deezer albums https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart/0/tracks
    //MovieDB pelis populares: http://api.themoviedb.org/3/movie/popular?api_key=29dca782e21e5ca036f89dac7007ebad
    componentDidMount() {
        fetch('')
            .then(response => { return response.json() })
            .then(data => {

                console.log(data)

                /* this.setState({
                    datos: data.results, //no va a cambiar
                    datosFiltrados: data.results //va variando de acuerdo al input
                })  */

            })
            .catch(error => console.log(error));
    }
    //Funcion de remover la card
    removeCard(title) {
    
        const datosFiltrados = this.state.datos.filter(element => element.title !== title)

        this.setState({
            datos: datosFiltrados,
            datosFiltrados: datosFiltrados
        })
    }

    addCards(){

    }

    filtrarPorNombre(nombreAFiltrar) {
        
    }

    render() {
        console.log("Me estoy renderizando!")
        console.log(this.state.datosFiltrados)
        //if ternario
        // condicion ? Se cumple : No se cumple
        return (
            <div className='container'>
                <FilterField />
                {this.state.datosFiltrados.length === 0 ?
                    
                    < h4 > Cargando ... </h4> :
            
                    this.state.datosFiltrados.map((element, index) => {
                        return <Card key={index}
                            name={``}
                            photo={``}
                            removerPersonaje={(name) => this.removeCard(name)}
                        />
                    })
                }
            </div>
        )
    }
}