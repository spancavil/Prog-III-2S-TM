import React, { Component } from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';

export default class Contador extends Component{
    constructor(props){
        super(props);
        this.state = {
            count: 0,
        }
    }

    handleCount(){
        this.setState({
            count: this.state.count + 1
        })
    }

    render(){
        return(
            <View style={styles.container}>
                <TouchableOpacity
                style={styles.zonaClickeable}
                onPress = {()=> this.handleCount()}>
                   <Text
                   style={styles.textoZonaClickeable}
                   > Add count </Text> 
                </TouchableOpacity>
                <Text>Conteo: {this.state.count}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 5,
        textAlign: "center"
    },
    zonaClickeable: {
        padding: 7,
        backgroundColor: "rgba(0, 255, 0, 0.5)",
        marginBottom: 10,
        borderRadius: 4
    },
    textoZonaClickeable:{
            fontWeight: "bold"
    }
})

