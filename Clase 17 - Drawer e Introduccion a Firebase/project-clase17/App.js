import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
/* import Screen1 from './src/screens/Screen1';
import Screen2 from './src/screens/Screen2';
import Screen3 from './src/screens/Screen3'; */
import Login from './src/screens/Login';
import Register from './src/screens/Register';
import Home from './src/screens/Home';

export default function App() {

  const Drawer = createDrawerNavigator();

  return ( 
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Login">
          <Drawer.Screen name = "Login" component={Login}></Drawer.Screen>
          <Drawer.Screen name = "Registro" component={Register}></Drawer.Screen>
          <Drawer.Screen name = "Home" component={Home}></Drawer.Screen>
        </Drawer.Navigator>
      </NavigationContainer>
  );
}
