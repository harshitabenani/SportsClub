import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet,Image ,Button,ScrollView,SafeAreaView,ActivityIndicator} from 'react-native'
import {Header,Left,Icon} from 'native-base'



class LogoutScreen extends Component 
{
  
  
   
  render()
  {
    return(
     
      <SafeAreaView>
    
      <View style={{marginLeft:20,marginTop:17}}>
      <Icon name="menu" onPress={()=>this.props.navigation.openDrawer()}/>

      </View>
      

      <Text style={{fontSize:35,color:'#2B2B2C',paddingTop:50,textAlign:'center'}}>ARE YOU</Text>
      <Text style={{fontSize:35,color:'#2B2B2C',paddingTop:20,textAlign:'center'}}>SURE</Text>
      <Text style={{fontSize:35,color:'#2B2B2C',paddingTop:20,textAlign:'center'}}>YOU WANT TO</Text>
      <Text style={{fontSize:35,color:'#2B2B2C',paddingTop:20,textAlign:'center'}}>LOGOUT?</Text>

            
           
              <TouchableOpacity
              onPress={()=>{this.props.navigation.navigate('Loading')}}>

                 
          
          <View style={{height:50, width:85,backgroundColor:'#14256A' , justifyContent:'center', alignItems: 'center',marginTop:60,marginLeft:150}}>
                <Text style={{color: '#FFF'}}>YES</Text>

             
              
            </View>
</TouchableOpacity>

<TouchableOpacity
              onPress={()=>this.props.navigation.navigate('Loading1')}>
           
            <View style={{height:50, width:85,backgroundColor:'#14256A' , justifyContent:'center', alignItems: 'center',marginTop:20,marginLeft:150}}>
                <Text style={{color: '#FFF'}}>CANCEL</Text>
              
            </View>
</TouchableOpacity>
            

      </SafeAreaView>

    )
  }
}
export default LogoutScreen