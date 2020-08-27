import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet,Image ,Button,ScrollView} from 'react-native'


class BadiScreen extends Component 
{
 
 static navigationOptions=
  {
    title:'BADMINTON'
  }
  render()
  {
    return(
      <ScrollView>
      <View>
      <View style={styles.container}>
      <Text style={styles.text}>
      Scoring System:
      A match consists of the best of 3 games of 21 points.
Every time there is a serve – there is a point scored.
The side winning a rally adds a point to its score.
At 20 all, the side which gains a 2 point lead first, wins that game.
At 29 all, the side scoring the 30th point, wins that game.
The side winning a game serves first in the next game.
Interval and Change of Ends
When the leading score reaches 11 points, players have a 60 second interval.
A 2 minute interval between each game is allowed.
In the third game, players change ends when the leading score reaches 11 points.
</Text>
      </View>

      <TouchableOpacity
       
      onPress={()=>{
        
        alert("CALL ON 9830635484")
        
      }} >
       

      <View style={styles.submitButton}>
      <Text style={{color: '#FFF',textAlign:'center',paddingTop:15}}>Click here to Register</Text>
      </View>
       
     
      </TouchableOpacity>
      <Image source={{uri:'https://images.theconversation.com/files/134386/original/image-20160817-13683-gpi7mg.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=496&fit=clip'}}
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

export default BadiScreen