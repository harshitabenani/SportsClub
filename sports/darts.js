import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet,Image ,Button,ScrollView} from 'react-native'



class DartsScreen extends Component 
{
  static navigationOptions=
  {
    title:'DARTS'
  }

  render()
  {
    return(
      <ScrollView>
      <View>
      <View style={styles.container}>
      <Text style={styles.text}>
    In a game of 501 the object is for one player or a team to be the first to reach zero from starting total of 501.

In simple terms, after three darts are thrown, the throwing player subtracts the total scored from his current total until he reaches zero.

In order to reach zero each player must finish by throwing a double i.e. if player one has 36 remaining he must hit double 18 to win, while if player two has 45 remaining he must hit single 5, double 20 to win - or a another combination of scores provided the final dart scores on a double. All Professional Darts Corporation.


</Text>
      </View>

      <TouchableOpacity
       
      onPress={()=>{
      
       
        alert("CALL ON 9830635484")}}>
       

      <View style={styles.submitButton}>
      <Text style={{color: '#FFF',textAlign:'center',paddingTop:15}}>Click here to Register</Text>
      </View>
       
     
      </TouchableOpacity>
      <Image source={{uri:'https://www.gamingweekender.com/wp-content/uploads/2018/10/people-playing-darts.jpg'}}
      style={styles.img} />
      </View>
       </ScrollView>
    )
  }
}
const styles=StyleSheet.create({
  
  container:{
  height:275,
  marginTop:30,
  marginLeft:20,
  marginRight:20,
  marginBottom:10,
  
  backgroundColor:'#14256A',
  borderColor:'#FFF'},

    submitButton:{
  height:50,
  width:150,
  marginTop:13,
  marginLeft:110,
  
  borderRadius:100,
  backgroundColor:'#5A98EB',
  borderColor:'#FFF'},

  img:{
    height:160,
    marginLeft:25,
    marginRight:25,
    marginTop:25,
    borderRadius:10
  },
  
  text:{
    paddingTop:25,
    fontSize:14,
    color:'#FFF',
    paddingLeft:10,
    paddingRight:10,
  

}

})

export default DartsScreen