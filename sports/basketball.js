import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet,Image ,Button,ScrollView} from 'react-native'


class BBScreen extends Component 
{
  static navigationOptions=
  {
    title:'BASKETBALL'
  }
  render()
  {
    return(
      <ScrollView>
      <View>
      <View style={styles.container}>
      <Text style={styles.text}>
      Basketball is a team sport in which two teams, most commonly of five players each, opposing one another on a rectangular court, compete with the primary objective of shooting a basketball (approximately 9.4 inches (24 cm) in diameter) through the defender's hoop (a basket 18 inches (46 cm) in diameter mounted 10 feet (3.048 m) high to a backboard at each end of the court) while preventing the opposing team from shooting through their own hoop. A field goal is worth two points, unless made from behind the three-point line, when it is worth three. 
</Text>
      </View>

      <TouchableOpacity
       
      onPress={()=>alert("CALL ON 9830635484")} >
       

      <View style={styles.submitButton}>
      <Text style={{color: '#FFF',textAlign:'center',paddingTop:15}}>Click here to Register</Text>
      </View>
       
     
      </TouchableOpacity>
      <Image source={{uri:'https://static01.nyt.com/images/2019/11/06/sports/06COLLEGEHOOPSprint2SUB/merlin_163922415_bc54904d-9b7e-432c-b562-f1e4e950625e-articleLarge.jpg?quality=75&auto=webp&disable=upscale'}}
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

export default BBScreen