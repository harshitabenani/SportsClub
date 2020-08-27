import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet,Image ,Button,ScrollView, Dimensions} from 'react-native'
import firebase from './firebase'


const devHeight = Dimensions.get('screen').height ;
const devWidth = Dimensions.get('screen').width; 

class SignInputs extends React.Component {

    state = {
      name:'',
      email: '',
      contact:'',
      password: '',
      cp:''

   }
   
   handlename = (text) => {
      this.setState({ name: text })
   }
   handleemail = (text) => {
      this.setState({ email: text })
   }
   handlecontact = (text) => {
      this.setState({ contact: text })
   }
   handlepassword = (text) => {
      this.setState({ password: text })
   }
   handleconfirmpassword = (text) => {
      this.setState({ cp: text })
   }

 
 
  SignUp = (email,password) => {
      try{
    firebase.auth().createUserWithEmailAndPassword(email,password)
      .then(() => this.props.navigation.navigate('MainHome',{email:this.state.email}))
      .catch(error => {   
        alert(error.message);
     })
   }catch(err){
      alert(err);
   }
  };




check=()=>
{

  if(this.state.password != '' && this.state.cp != '' && this.state.name != '' && this.state.email != '' && this.state.contact != '' )
  {
    if( this.state.password!=this.state.cp)
    {
      alert("PASSWORDS DO NOT MATCH ")
    }
  
    else
    {
     this.SignUp(this.state.email,this.state.password)
    }
  }
  else
  {
    alert("PLEASE ENTER THE EMPTY FIELD(S)")
  }
}




   render()
   {
     return(

       <ScrollView style={{flex:1}}>

       
       <View style={{width: '100%', height: devHeight + devHeight*25/100 }}>
       <View>

       <Text style={styles.weltext}>WELCOME TO SIGNUP SCREEN</Text>
       
       <View style={styles.horizontal}/>
       
       </View>

        <TextInput style={styles.inputfirst}
               underlineColorAndroid = "transparent"
               placeholder = " Name"
               placeholderTextColor = "black"
               autoCapitalize = "none"
               onChangeText = {this.handlename}
               const names={this.state.name}/>

                 <TextInput style={styles.input}
               underlineColorAndroid = "transparent"
               placeholder = " Email"
               placeholderTextColor = "black"
               autoCapitalize = "none"
               onChangeText = {this.handleemail}/>


                 <TextInput style={styles.input}
               underlineColorAndroid = "transparent"
               placeholder = " Contact"
               placeholderTextColor = "black"
               autoCapitalize = "none"
               onChangeText = {this.handlecontact}
               keyboardType={'numeric'} />


                 <TextInput style={styles.input}
               underlineColorAndroid = "transparent"
               placeholder = " Password"
               placeholderTextColor = "black"
               autoCapitalize = "none"
               onChangeText = {this.handlepassword}
               secureTextEntry='true'
               />


                 <TextInput style={styles.input}
               underlineColorAndroid = "transparent"
               placeholder = " Confirm Password"
               placeholderTextColor = "black"
               autoCapitalize = "none"
               onChangeText = {this.handleconfirmpassword}
               secureTextEntry='true'
               />

                   <TouchableOpacity
       
      onPress={()=>this.check()} >
       

      <View style={styles.submitButton}>
      <Text style={{color: '#FFF',textAlign:'center',paddingTop:11,fontSize:20,fontWeight:'bold'}}>Submit</Text>
      </View>
       
     
      </TouchableOpacity>
               </View>
</ScrollView>


     )
   }
  
}

const styles = StyleSheet.create({

  weltext: {
    marginTop:30,
    fontSize:22,
    fontWeight:'bold',
    textAlign:'center',
    color:'#091D99'
  },

    inputfirst: {
      marginTop: 40,
      height: 40,
      width:300,
      alignSelf:'center',
      borderColor: 'black',
      borderWidth: 1
   },


    input: {
      marginTop: 30,
      height: 40,
      width:300,
      alignSelf:'center',
      borderColor: 'black',
      borderWidth: 1
   },
      
      horizontal:{

      marginTop:25,
      height:1,
      borderColor:'black',
      borderWidth:2
    },

       submitButton:{
  height:50,
  width:150,
  marginTop:40,
  marginLeft:110,
  
  borderRadius:100,
  backgroundColor:'#14256A',
  borderColor:'#FFF'},
    
})

  export default SignInputs