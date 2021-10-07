import React from 'react';
import {Text, TouchableOpacity, View, StyleSheet} from 'react-native';
import Contador from '../components/Contador';

export default function Home() {

    function handlePress(){
        console.log("Me clickearon!!");
    }

    return (
        <View style={styles.container}>
            <Text>Hola turno mañana!</Text>
            <TouchableOpacity onPress={()=> handlePress()}
            style = {styles.boton1}
            >
                <Text style={styles.texto1}>
                Clickeame
                </Text>
            </TouchableOpacity>
            <Contador/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#f9a825",
        flex: 1,
        flexDirection: "column",
        paddingTop: 15,
        alignItems: "center"
    },
    texto1: {
        fontSize: 15,
        color: "black",
    },
    boton1: {
        backgroundColor: "#c17900",
        borderRadius: 12,
        borderColor: "black",
        borderWidth: 3,
        padding: 4
    }
})