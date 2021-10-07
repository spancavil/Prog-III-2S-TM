import React, { Component } from 'react';
import { FlatList, View} from 'react-native';
import Card from '../components/Card';

export default class Home extends Component {

    constructor(props){
        super(props)
        this.state = {
            characters: []
        }
    }

    componentDidMount(){
        fetch(' https://rickandmortyapi.com/api/character')
        .then (response => response.json())
        .then (data => this.setState ({
            characters: data.results
        }))
    }

    render(){
        return(
            <View>
                <FlatList
                data = {this.state.characters}
                keyExtractor = {character => character.id.toString()}
                renderItem = { ({item }) => 
                    <Card item = {item}></Card> }
                />
            </View>
        )
    }

}