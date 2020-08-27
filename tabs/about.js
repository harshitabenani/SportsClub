import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet,Image ,Button,ScrollView,SafeAreaView} from 'react-native'
import { SliderBox } from 'react-native-image-slider-box';
import {Header,Left,Icon} from 'native-base'

class AboutScreen extends React.Component{



   constructor(props) {     
super(props);     
this.state = {       
images: [   

  'https://www.urbana.co.in/images/club/club-urbana.png',
  'https://5.imimg.com/data5/DF/SO/MY-4814293/untitled-500x500.jpg',
  'https://www.lakeclub.in/img/gallery/rowing-01.jpg' ,
  'https://www.irishexaminer.com/remote/content.assets.pressassociation.io/2018/10/08154319/2c19249b-2289-4d4f-8939-21cfe7d39975.jpg?crop=0,368,4632,2973&ext=.jpg&width=648&s=ie-874419',
  'https://cdn6.dissolve.com/p/D1061_17_370/D1061_17_370_1200.jpg'

]     
}   
}  


render() {
    return (
<View>
          
      <SafeAreaView style={{flexDirection:'row',justifyContent:'space-between'}}>
     
      

      
      <View style={{marginLeft:15,marginTop:10}}>
      <Icon name="menu" onPress={()=>this.props.navigation.openDrawer()}/>
      
      </View>

      <Text style={{textAlign:'center',fontSize:18,paddingRight:133,fontWeight:'bold',paddingTop:15,color:'#14256A'}}> WELCOME! {this.props.navigation.state.params.name}</Text>
      
      
     

     </SafeAreaView>
     

      <SliderBox   
images={this.state.images}   
sliderBoxHeight={200}   
 
dotColor="#454546"   
inactiveDotColor="#90A4AE"   

paginationBoxVerticalPadding={20} 
marginTop={5}  
marginLeft={5}
marginRight={15}
autoplay   
circleLoop />

      <View style={styles.container}>
      <Text style={styles.quote}> "Never say never because limits, like fears, are often just an illusion"</Text>
      </View>
      
      <View style={styles.scrollcontainer}>

      <Text style={styles.text}>WHAT DO WE DO?</Text>
      <View style={styles.horizontal}/>
       <ScrollView>
      <Text style={styles.text2}>
The oarsmen and rowers gently wake up the Lakes at the crack of dawn every morning as the coxswain fours set out on the club raft. Some members ritually walk and jog amidst gleaming dew as others browse through newspapers over a steaming cuppa. Plush green lawns are dotted with seasonal blooms back dropped by the Lakes. A cluster of trees provide succour and shade on balmy evenings that see kids splashing water and practising their strokes under the watchful eye of the trainer. Fitness conscious members work out in the fully equipped gymnasium next door. Badminton and squash enthusiasts sweat it out at the newly furnished courts in the indoor arena. Some others focus on the perfect cue in the billiards room. </Text>
      
      </ScrollView>
      </View>
      </View>

    );
  }
}
const styles=StyleSheet.create({
  container:{
  height:80,
  marginTop:15,
  marginLeft:20,
  marginRight:20,

  borderRadius:10,
  backgroundColor:'#14256A',
  borderColor:'#FFF'},

  scrollcontainer:{
  height:250,
  marginTop:25,
  marginLeft:20,
  marginRight:20,
  marginBottom:10,
  borderRadius:10,
  backgroundColor:'#E3E4EB',
  borderColor:'#14256A',
  borderWidth:2},


  quote:
  {
    fontWeight:'bold',
    textAlign:'center',
    fontSize:18,
    color:'#FFF',
    paddingTop:15,
    fontFamily:'American Typewriter'


  },

  text:
  {
    paddingTop:12,
    color:'#454546',
    fontSize:15,
    textAlign:'center',
    fontWeight:'bold',
  },

  horizontal:{

      marginTop:10,
      height:1,
      borderColor:'#2B2B2C',
      borderWidth:2,
      marginLeft:20,
      marginRight:20,
    },

      text2:
  {
    paddingTop:10,
    color:'#454546',
    fontSize:15,
    paddingLeft:10,
    paddingRight:10,
    textAlign:'center',
    lineHeight:23
    
  },

 


})
export default AboutScreen