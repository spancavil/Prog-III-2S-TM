import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

export default function Post ({item}){

    console.log(item);

    return(
        <View>
            <Text>{item.data.description}</Text>
            <Text>{item.data.createdAt}</Text>
            <Text>{item.data.owner}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        height: 200,
    
    }
})