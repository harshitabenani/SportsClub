import {createBottomTabNavigator}  from 'react-navigation-tabs';
import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet,Image ,Button,SafeAreaView,ScrollView,Dimensions} from 'react-native'
import AboutScreen from './tabs/about'
import ContactScreen from './tabs/contact'
import EventsScreen from './tabs/events'

import {createDrawerNavigator,DrawerItems}  from 'react-navigation-drawer';
import ProfileScreen from './drawers/profile'
import LogoutScreen from './drawers/logout'


const AppTabNavigator=createBottomTabNavigator(
  {

  About:AboutScreen,
  Events:EventsScreen,
  Contact:ContactScreen,

  },

   {
    
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        if (routeName === 'About') {
          return (
            <Image
              source={{uri:'https://cdn.imgbin.com/11/21/6/imgbin-question-mark-in-circle-question-mark-logo-R1wNMYziqAFva5yyuW6vzwLZ6.jpg'}
              }
              style={{
                width: 20,
                height: 20,
                borderRadius:  40 / 2,
              }}
            />
          );
        }  else if (routeName === 'Events') {
          return (
            <Image
              source={{uri:'https://cdn4.vectorstock.com/i/1000x1000/11/43/mark-calendar-icon-simple-style-vector-19771143.jpg'
              }}
              style={{
                width: 20,
                height: 20,
                borderRadius: 40 / 2,
              }}
            />
          );
        
        }else if (routeName === 'Contact') {
          return (
            <Image
              source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT25Pt3pg0tjFqo5hnuqQACnaMeaaBYSTFP8ghdIpynR6hNDV5v&s'
              }}
              style={{
                width: 20,
                height: 20,
               borderRadius: 40 / 2,
              }}
            />
          );
        }

      },
    }),
    tabBarOptions: {
      activeTintColor: 'white',
      inactiveTintColor: 'gray',
      activeBackgroundColor:'#14256A',
    },
  }
  
  )

const CustomDrawerComponent=(props)=>(

  <SafeAreaView >
  <View style={{backgroundColor:'#14256A'}}>

  <Image source={{uri:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAABmJLR0QA/wD/AP+gvaeTAAACB0lEQVRIia3UPWsUURTG8f8ZNpGgomazMGQ3G61ShIBdKsEELKOImkL8Bn4CC0tJ7Qs2doqVBhRBK0khqB9AJLBCzO5sInmDQSO4kPtYmMQly965mc3phnN4fndmzowRUJKiJFm7CtE1GWMAZizibL5SKb4yM5eVYVkDjUY6iLXmgYtdRhZQ//WRkVNbvpzI15RkWOulBwGYwlovJHkP7YUaK5uXgSnfzG5NN1Y3r+SGDN0IQP7N7mg2N4SYCIUweWf9EJwIhrCTPUD2IxzSam5IuG/hkNVyQxG8CWaQd9YLFQruHbAR4GwUCu5tbiiO423BXJZicC+O4+3cEMDPdOgR6JOH+ZimQ48DDpNd9fr6sEV8B/oOtHbkqFarpZWsjMw7AqhWSyuGNTsaoh6CBEPN5vqM0GhHw6gkydr5kIyuj65Wqx0bGDgzK3QbmPRkOEPvgSdpWno9Pm6tYKjZXJ9xjvsY50JO21Z1w+6Wy8VnZqau0NLSWtzXx1Nhlw4JHKwFOW61v799KEk2K6APQmd7RPZqObLoQrlcbEDbMkju4REiAKPOuQd7F+1bN32ESEfmf8jw/kJylfGrAxLK/I0cttoz95dBkiXJxk0i7iDGexS+gs1VKsXne2ve7Tsak2xS0gRmo6BBg9PC+kHHd9N+G/ZHkIJtGVp26Eshij4PDw8tHsz8CwPlt0n4seGUAAAAAElFTkSuQmCC"}}
         style={{height:110,width:110,alignSelf:'center',justifyContent:'center',marginTop:25}} />

  <View style={{   marginTop:20,
      height:1,
      borderColor:'#2B2B2C',
      borderWidth:2 }}/>

  </View>
  <ScrollView contentContainerStyle={{flexDirection: 'column', justifyContent: 'around' }}>


  <DrawerItems {...props} />


  </ScrollView>
  </SafeAreaView>

)
const MyDrawerNavigator = createDrawerNavigator({
  
  Home:{
    screen:AppTabNavigator,
    navigationOptions:{
      drawerLabel:"Home",
       drawerIcon: ({ tintColor }) => (
          <Image
            source={{uri:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAABUklEQVRIie2Tu0vDUBTGv3ujhVpckttmDjbpILhUxdlBIoLgIIL6B5godKh/gZO7D9x0V0cHRYqLOig4uPgCu+gUMjg0wZJcJ0tMJQ8fU/sbzz3n+865516go2CaWWWaWU1TIyTMI3lteR0cawAmstKI6NhTJ8AZjy2MlR6czbD3wi7A54NhDn7Y33QW6/U998cG8tBqznMbB+DQv03gpOaDzthPG2+pDQpKRfZ7m0fgKEc1wTluiUB1637zNbGBXFpRPN8/BqBGiQd4hkB0627rIXxAwwE2YJQ9379MIQ4ACvH4hVg0xiINpNLSOCipAZBTiAMAOCBRQk7zmjEZjLeeKSuaCwR0H0BfWvEAGYDM5cTRl4Z9ddMyyKtmBQQ7AHp+If4JBcF0Vhx2Hfv6vG3JTDVjP08U1uP2F822Jf81ia8k3FnSSf99gq5BBxh0ieUDFgRYyuGewvYAAAAASUVORK5CYII="}}
            resizeMode="contain"
            style={{ width: 20, height: 20, tintColor: tintColor }}
          /> )
    }
    },

  Profile:{
    screen:ProfileScreen,
    navigationOptions:{
      drawerLabel:"Profile",
       drawerIcon: ({ tintColor }) => (
          <Image
            source={{uri:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAAEvElEQVRoge2YXWwUVRiGn+9MdwulFQu7BRoxoP0BGxUvCMHQC35EY+SOQgQFQgwJbU3Um8ZokEQNhkRFbErFm4LBBGNQLjCGIJqgIoEQJZFkXbD+0Bq6WwGpxd3unM+LLSZtutuZ3ZJW3edq53xn3u99c2bOnCwUKFCgQIFxQKhrCIaS4ZeBJ4FZ423IJ90i8l4s0LPNCZcvfRVoAcrG21UOlAFLptgpAaOqG8bbTb6ostHw73ucRmKWGW8HY0UhyEQj1yBRFd1kLXeWDvRPVjHzgXfG0phfJFTdqD7vibpuauGVH/deG16YUds817X2ILBwbOx5x/eKqPDKSCEALkdaO43Rp/K35R/fQYzL19nqPZE954DrPmVV4UODXW3VmR0PxopTA8FyEepBdwF/jurLZ0OsY294mBbwLKj8rMKi3mBsvaoz1RH3rVCy4kRRMHlIlVWOcXaLZQHI+WwyRZ4bDiLWmQF0ZaqHajeXYZnkUe0XAgOLTUJKQxr+TkXnpccV0m/uUtfaZoystVYfMYZzwO0jKfleEUEfyFY3bsmDHqXUql2bNG7COs5RYB7QB7Sr6CZgnUILynnQA5Oc1A1BXs/Y12uAf7qrfputnkK+9ybE4d8v7PkmmCxuEZgDnMWY2ni0bWtZ8sbBeDT2QW+0baca9gG3JWygwdXUoUxy/oM46mSrO+KGvOgI+j4gwBPAHxizKh5p/S1c1fh2X6Dkeqg6vGbQ4Pz0DVpb8ldJZyY9/4+Wmo7Kyi0lI1cbHEU7vOi4FJ0M1TbPAioV2RePtHaHqhofU6EZKBLhVwAdDCIi1/onpTJuIrl82ecnSp2VIxUq7g4vArnfi8g0iFlXywFE9RTpH/WD5b5AX+osAEo1AFbPOMa9L5NebkcUlTfL79oydfiwa3SbV4l+kygzjlxJu5DJAJLeYq+q0NTdvbef9OAU4LP4hYojVmVzJr2cggjMKXKK5g4ZrGsICvKwV40EzoJ4pLUb6BTVNYDEom0d8WhbuUm5J0PVW9cBKPbeeLRiZai6Z62gGzPp+f6O3ETEGXpGC9dZunqU9As8+v3IRuAY6E5F9oSqmo5h9BNVZitsAmR6deM9AldC1T3LgEez6uVwaAQ4EI9WbIDtdkiWmsYdqrR4DGPV2Id6I+2fh6sadw++5DnjI4gkUf0ITHv8QusXmWZNq2pabESbgNVA8SiiV8XyeOxi26fhmq31qrIeqENVQC4JclRFnweqxiJIQlTeMOruunyxvWc0wZvMrHo67GKfVdHnyB5IUQ4r0mFSeio2pyI+81JvucvAHSrOCtBngMp8g1zHmGXxSOsZrwGGM72mcaEox4HSXDW8kHXXEvSFfEIA9P7QdlrgxXw0vJA1SMp1D49Fk4GUfDwWOtnIddeacPzv/0WZcBSCTDS8BulUY5c7k0tKVWSFwk+30FNOvTztWmrs8t5I+/Gb19NrmpaL6rE8zI55L08rom5gyEdRrTnt36I3cu3lKYhj7JIhN0mqPtPcfMm1lwG6R5ukqu8OHZG9Prz5IsdeXUaE/R4mDj99jnoazQPfvURlv4kFYi+J8BrZV+bEkCvVr/z788yXPnp1icqOWHHP9lvop0CB/wR/A7SkztHYEGojAAAAAElFTkSuQmCC"}}
            resizeMode="contain"
            style={{ width: 20, height: 20, tintColor: tintColor }}
          /> )
    }
    },

Logout:{
  screen:LogoutScreen,
    navigationOptions:{
      marginTop:500,
      drawerLabel:"Logout",
       drawerIcon: ({ tintColor }) => (
          <Image
            source={{uri:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAABmJLR0QA/wD/AP+gvaeTAAABWklEQVRIid2WO0sDQRSFv7vGRGPMLrhiZbcbsLGwVkFELGzE0sbCyg2xsvMv2KgQSxG0shI7QRtTW6QRzC+QpNBCA0K4FpoQJI/ZjQHjVw3DufcwD86MuJngDmWJ6BQqpfxCN5HVownAvIkoVh9USnkJ6+D6gZpqrbDNo/L/jGLdJe0Jc66Du3WuHzxM+tndvhsBM4oeun72wvNyiX4afaObr1K7nprdGwPDyzCR2VkXZFEV2wJHwUZwUGyQOKLjKEkg0VynsFKrvl95Xm7NyEhUjoBp+SpudGkMOufD8gu1M9OtCx1PPzFakQr7orIKpFBSWGqjpFHiWKRRBHDalN86DG1JPRijhGorXD+oAiMAAjfWaHLjuXjw1lMydEQ4Lw+XtylefkCPEdSGR0FPy08nx82Tv25UKeXnWs0PRta5fqCmr+xgrOhPGjVuXZgfTRQsoNBjj3sT0SdqM1cl/2ZI7AAAAABJRU5ErkJggg=="}}
            resizeMode="contain"
            style={{ width: 20, height: 20, tintColor: tintColor }}
          /> )
    }
    },
},

  
{
  contentComponent:CustomDrawerComponent,
 
  contentOptions:
  {
    activeTintColor:'#14256A',
    inactiveTintColor:'#2B2B2C'
  }
}

);
  
 export default MyDrawerNavigator