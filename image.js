import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet,Image ,Button} from 'react-native'


class ImageScreen extends React.Component
{
    static navigationOptions={
      
      alignItems:'center',
     
     header: null,
}
     
     componentDidMount() 
     {
    setTimeout(() => {this.props.navigation.navigate('Login')
      
      }, 2000);
  }
  render()
  {
    return(
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',backgroundColor:'#14256A' }}>
     
          
        
      
      
     <Image
  source={{uri:'https://image.freepik.com/free-vector/modern-sports-logo-template-with-flat-design_23-2147946074.jpg'}}
  style={{marginTop:40,height:200,width:200,alignSelf:'center',borderRadius:200}}
  />
  
</View>
   
    )

  }

 

}



export default ImageScreen