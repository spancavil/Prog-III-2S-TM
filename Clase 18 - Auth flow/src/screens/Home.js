import React, { Component } from 'react';
import {View, Text, StyleSheet, TouchableOpacity, FlatList} from 'react-native';
import Card from '../components/Card';

export default class Home extends Component {
    constructor(props){
        super(props);
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
                <Text> Home </Text>
                <TouchableOpacity style = {styles.button} onPress={() => this.props.handleLogout()}>
                    <Text style = {styles.text}> Logout </Text>
                </TouchableOpacity>
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    field: {
        width: '80%',
        backgroundColor: "#09009B",
        color: '#FFA400',
        padding: 10,
        marginVertical: 10
    },
    button: {
        width: '30%',
        backgroundColor: "#0F00FF",
    },
    text: {
        color: '#FFA400',
        fontSize: 20
    }
})