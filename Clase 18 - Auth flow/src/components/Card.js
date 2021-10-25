import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

export default function Card ({item}){
    console.log(item)
    return(

        <View>
            <Image style = {styles.image}
                    source = {{uri: item.image}}
                    resizeMode = "contain"
            />
            <Text>{item.name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        height: 200,
    
    }
})