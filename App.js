import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet,Image ,Button} from 'react-native'
import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import { LinearGradient } from 'expo-linear-gradient';
import ImageScreen from './image'
import Inputs from './login'
import MyDrawerNavigator from './tabnavigator'
import {createBottomTabNavigator}  from 'react-navigation-tabs';
import BadiScreen from './sports/badminton'
import DartsScreen from './sports/darts'
import BBScreen from './sports/basketball'
import SignInputs from './signup'
import LoadingScreen from './loading'
import LoadingScreen1 from './loading1'
import {
 
  TransitionPresets,
} from '@react-navigation/stack';



const RootStack=createStackNavigator(
{
    ImageScreen:ImageScreen,
    Login:Inputs,
    SignUp:SignInputs,
    MainHome:{
      screen:MyDrawerNavigator,
         navigationOptions:{

        header:null

      },
   
    },
    Badi:BadiScreen,
    Darts:DartsScreen,
    BB:BBScreen,
    Loading:LoadingScreen,
    Loading1:LoadingScreen1,

  },
  {
    initialRouteName:'ImageScreen', 
    
    
  },
 

  
)




const AppContainer = createAppContainer(RootStack);
 class App extends React.Component {

  render() {
    return ( <AppContainer /> )
  }
}

export default App
