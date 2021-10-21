import React, { Component }  from "react";
import { Text, View, StyleSheet} from "react-native";

export default class Screen2 extends Component{
    constructor (props){
        super(props)
    }

    render(){
        return(
            <View style={styles.container}>
                <Text> Screen1 </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        backgroundColor: 'green'
    }
})