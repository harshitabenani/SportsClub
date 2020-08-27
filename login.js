import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Image,
  Button,
  AsyncStorage,
} from 'react-native';
import firebase from './firebase';

class Inputs extends React.Component {
  static navigationOptions = {
    header: null,
  };
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      name: ''
    };
  }
  handleEmail = text => {
    this.setState({ email: text });
  };
  handlePassword = text => {
    this.setState({ password: text });
  };

  Login = (email, password) => {
    try {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(() =>
          this.props.navigation.navigate('MainHome', {
            email: this.state.email,
            name: this.state.displayName
          })
        )
        .catch(error => {
          alert(error.message);
        });
    } catch (err) {
      alert(err);
    }
  };

  render() {
    return (
      <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center' }}>
        <Image
          resizeMode="contain"
          style={{ height: 200, width: 200, marginTop: 100 }}
          source={{
            uri: 'https://image.flaticon.com/icons/png/512/295/295128.png',
          }}
        />

        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholder=" Email"
          placeholderTextColor="black"
          autoCapitalize="none"
          onChangeText={this.handleEmail}
        />

        <TextInput
          style={styles.input1}
          underlineColorAndroid="transparent"
          placeholder=" Password"
          placeholderTextColor="black"
          autoCapitalize="none"
          secureTextEntry="true"
          onChangeText={this.handlePassword}
        />

        <View
          style={{
            height: '30%',
            width: '60%',
            flexDirection: 'column',
            marginTop: 10,
            justifyContent: 'center',
          }}>
          <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <TouchableOpacity
              onPress={() => this.Login(this.state.email, this.state.password)}
              style={{
                height: '75%',
                width: '70%',
                backgroundColor: '#14256A',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{ color: '#FFF' }}>Sign In</Text>
            </TouchableOpacity>
          </View>

          <View>
            <Text
              style={{
                fontSize: 18,
                fontFamily: 'Palatino',
                marginTop: 30,
                marginLeft: 38,
              }}>
              Not a Member yet?
            </Text>
          </View>
          <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('SignUp')}
              style={{
                height: '75%',
                width: '70%',
                backgroundColor: '#14256A',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{ color: '#FFF' }}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    marginTop: 20,
    height: 40,
    width: 300,
    alignSelf: 'center',
    borderColor: 'black',
    borderWidth: 1,
  },
  input1: {
    marginTop: 15,
    height: 40,
    width: 300,
    alignSelf: 'center',
    borderColor: 'black',
    borderWidth: 1,
  },

  /* submit:
   {
     marginTop:25,
     backgroundColor:'blue',
     height:40,
     width:50
   }*/
});

export default Inputs
