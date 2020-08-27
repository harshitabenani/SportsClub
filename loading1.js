import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet,Image ,Button,ScrollView,SafeAreaView,ActivityIndicator} from 'react-native'

class LoadingScreen1 extends React.Component{

  static navigationOptions={
    header:null
  }
  
  constructor() {
    super();
    this.state={
      showMe:true
    }
  }

  componentWillMount(){

    setTimeout(()=>{
      this.setState({showMe:false})
      },
      2000)

  }

  render()
  {
    return(
      this.state.showMe 
      ? <View style={styles.container}>
      <ActivityIndicator size="large" /> 
      </View>
      : this.props.navigation.navigate('Home') 
    )
  }
}

const styles=StyleSheet.create({

  container:{

    marginTop:300
  }


})

export default LoadingScreen1