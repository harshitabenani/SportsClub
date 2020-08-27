import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet,Image ,Button,ScrollView,SafeAreaView} from 'react-native'
import {Icon} from 'native-base'

class ProfileScreen extends Component 
{
  
  render()
  {
    return(

      
     
      <View>

      
      
      <SafeAreaView style={{flexDirection:'row',justifyContent:'space-between'}}>
     
      <View style={{marginLeft:15,marginTop:10}}>
      <Icon name="menu" onPress={()=>this.props.navigation.openDrawer()}/>
      
      </View>

      <Text style={{textAlign:'center',fontSize:18,paddingRight:150,fontWeight:'bold',paddingTop:15,color:'#14256A'}}>PROFILE</Text>
    </SafeAreaView>
      
      <View style={styles.container}>
      <Image source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWLctaMH89xqwEEzPaj7tbnUJAQlfnwH4cDTWxcwTuHKqvkSvd9g&s"}}
             style={{height:125,width:125,marginTop:40,marginLeft:75}} />

      <View style={styles.container1}>
      <Text style={styles.text}>HELLO</Text>
      </View>

       <View style={styles.container2}>
      <Text style={styles.text}>{this.props.navigation.state.params.email}</Text>
      </View>

      </View>

      </View>

    )
  }
}

const styles=StyleSheet.create({

  container:{
    height:390,
    width:275,
    marginLeft:50,
    marginTop:80,
    borderColor:'#14256A',
    backgroundColor:'white',
    borderWidth:3,
},

container1:{
    height:40,
    width:180,
    marginLeft:45,
    marginTop:50,
    borderColor:'#14256A',
    backgroundColor:'white',
    borderWidth:2,
},
container2:{
    height:40,
    width:180,
    marginLeft:45,
    marginTop:20,
    borderColor:'#14256A',
    backgroundColor:'white',
    borderWidth:2,
},
text:{

  textAlign:'center',
  fontSize:13,
  paddingTop:9,
  


}






})
export default ProfileScreen