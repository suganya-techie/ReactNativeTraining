import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import { FontAwesome } from '@expo/vector-icons';

const AppNavigator = createBottomTabNavigator ({
  Home: {
    screen: Home
  },
  About: {
    screen: About
  },
  Contact: {
    screen: Contact
  }
},
  {
    initialRouteName: 'Home',
    tabBarOptions:{
      activeTintColor: 'blue',
      inactiveTintColor: 'grey'
    },
    navigationOptions: ({ navigation}) => ({
      tabBarIcon: ({focused, tintColor}) => {
        const { routeName } = navigation.state;
        const color = focused ? 'blue': 'grey';
        if(routeName === 'Home'){
          return <FontAwesome name="home" size={25} color = {tintColor} />;
        } else if(routeName === 'About') {
          return <FontAwesome name="graduation-cap" size={25} color = {tintColor} />;
        }  else if(routeName === 'Contact') {
            return <FontAwesome name="address-book" size={25} color = {tintColor} />;
          }

        
      },
      headerStyle: {
        backgroundColor: 'purple'
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        color: '#fff'
      }
  })
}
);

//export default AppNavigator;

export default class App extends React.Component {
  render() {
    return (
      <AppNavigator/>
    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
