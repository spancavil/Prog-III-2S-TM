import React, { Component } from 'react';
import Card from '../Card/Card';

const info = [
    {image:'/assets/images/characters/ahsoka.jpg', name:'Ahsoka'},
    {image:'/assets/images/characters/hulkSmall.jpg', name:'Hulk'},
    {image:'/assets/images/characters/kyloRen.jpg', name:'Kylo Ren'},
    {image:'/assets/images/characters/luke.jpg', name:'Luke'},
    {image:'/assets/images/characters/obiWan.jpg', name:'Obi Wan'},
    {image:'/assets/images/characters/strange.jpg', name:'Dr. Strange'},
    {image:'/assets/images/characters/yoda.jpg', name:'Yoda'},
    {image:'/assets/images/characters/capAmerica.jpg', name:'Captain America'},
    {image:'/assets/images/characters/superman.jpg', name:'Superman'},
    {image:'/assets/images/characters/cell.jpg', name:'Cell'},
    {image:'/assets/images/characters/anakin.jpg', name:'Anakin' },
    {image:'/assets/images/characters/batman.jpg', name:'Batman' }, 
 ]

export default class PersonajesContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render(){
        return(
            <div className="row card-container">
                {info.map((personaje, index) => {
                    return <Card key = {index} image = {personaje.image} name = {personaje.name}></Card>
                })}
            </div>
        )
    }
}