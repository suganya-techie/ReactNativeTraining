/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View, FlatList, Image
} from 'react-native';


const baseURL = "http://10.0.2.2:4000";

//type Props = {};
export default class ProductDetail extends Component {
  constructor(props){
    super(props);
  }
  
  render() {
    
    return (
      <View style={styles.container}>
       <Text> {this.props.navigation.state.params.title}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
