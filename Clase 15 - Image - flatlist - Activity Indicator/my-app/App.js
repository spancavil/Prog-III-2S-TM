import React from 'react';
import { View, Text, Image, StyleSheet, FlatList, ActivityIndicator } from 'react-native';
import Home from './src/screens/home';

export default function App() {

  const personas = [
    {nombre: "Juan", id: 1},
    {nombre: "Laura", id: 2},
    {nombre: "Federico", id: 3}
  ]

  return (
    <View>
      <Home/>
      {/*  <Text>Hola Clase 15</Text>
      <Image
        style = {styles.image}
        source = {require('./assets/tatantataan.jpg')}
        resizeMode = "contain"
      />

      <FlatList
        data = {personas}
        keyExtractor = {persona => persona.id.toString()}
        renderItem = {  ({item}) =>   
          <Text>{item.nombre}</Text>
      }
      />
      <ActivityIndicator
        size = "small"
        color = "blue"
      /> */}
    </View>
    
  )
}

const styles = StyleSheet.create({
  image: {
    height: 250
  }
})