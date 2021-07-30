import * as React from 'react';
import {Text,View,TouchableOpacity,StyleSheet} from 'react-native';
import HomeScreen from './screens/Home';
import IssLocationScreen from './screens/IssLocation';
import  MeteorScreen from './screens/Meteors';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{headerShow: false}}>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="IssLocation" component={IssLocationScreen}/>
        <Stack.Screen name="Meteors" component={MeteorScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}

const styles= StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#FFF'
  }
})

const Stack= createStackNavigator()