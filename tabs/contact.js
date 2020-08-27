import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet,Image ,Button,Separator} from 'react-native'
import Swiper from 'react-native-swipe-image';

class ContactScreen extends React.Component{


render() {
    return (
      <View>
      <View>
      
       <Image source={{uri:'https://upload.wikimedia.org/wikipedia/commons/0/0a/Kolkata_map.jpg'}}
      style={styles.img} /> 
      
     <Text style={styles.maintext}>Calcutta Sports Club</Text>
      </View>
      
      <View style={styles.horizontal}/>
      
      
      <View>
      <Text style={styles.text1}>
      Head Office - Kolkata</Text>
      <Text style={styles.text2}>7/1 Lord Sinha Road</Text>
      <Text style={styles.text3}>Lords Building</Text>
      <Text style={styles.text3}>Kolkata - 700027</Text>
      
      </View>

      <View style={{flexDirection:'row', justifyContent:'space-between'}}>
       
       <Image source={{uri:'https://www.freepnglogos.com/uploads/email-logo-png-27.png'}}
      style={styles.img1} /> 

      <Text style={styles.imgtext1}>:  sportclub19@gmail.com</Text>
      
      

      </View>

      <View style={{flexDirection:'row', justifyContent:'space-between'}}>
       
      <Image source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXS77ASO76NQZmW-JhikzRNRHfKa4_ip-tiwXTwJ9stOfKf72pHg&s'}}
      style={styles.img2} /> 

      <Text style={styles.imgtext2}>:  9830635484</Text>
      
      

      </View>
     
     
</View>
    );
  }
}

const styles=StyleSheet.create(
  {
    img:{
      height:270,
      width:400,
      marginTop:100
    },

    maintext:{

      paddingTop:10,
      fontSize:30,
      fontWeight:'bold',
      color:'#14256A',
      textAlign:'center'
    },
    
    horizontal:{

      marginTop:10,
      height:1,
      borderColor:'black',
      borderWidth:2
    },
    
    text1:{

      marginTop:10,
      fontSize:18,
      textAlign: 'center'
      

  },
    text2:{

      marginTop:10,
      fontSize:15,
      textAlign: 'center'

  },
  text3:{

      marginTop:3,
      fontSize:15,
      textAlign: 'center'

  },

  img1:{
      height:30,
      width:30,
      marginTop:20,
      marginLeft:85
    },

    imgtext1:{
       
       fontSize:15,
       marginTop:25,
       marginRight:75
    },

      img2:{
      height:30,
      width:30,
      marginTop:15,
      marginLeft:115
    },

     imgtext2:{
       
       fontSize:15,
       marginTop:18,
       marginRight:115
    },

  }
)
export default ContactScreen