import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { upperCase } from 'change-case';
import ContactList from './ContactList';
export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {counter:0};
    this.incCounter = this.incCounter.bind(this);
    this.decCounter = this.decCounter.bind(this);
  }

  incCounter(){
    this.setState({counter:this.state.counter+1});
  }

  decCounter(){
    this.setState({counter:this.state.counter-1});
  }
  render() {
    const {container, label, result } = styles;
    return (
      <View style={container}>
       {/* <Image source={{uri:'https://facebook.github.io/react-native/docs/assets/GettingStartedCongratulations.png'}} style = {{width:400, height:400}} />
       <Text style={label} onPress={this.incCounter}>INC</Text>
        <Text style={ [result, {alignSelf:'center'}] }>{ this.state.counter}</Text>
        <Text style={label} onPress={this.decCounter}>DEC</Text> */}
        <ContactList />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
   justifyContent: 'space-around',
    flexDirection: 'row',  
    flexWrap: 'wrap'  
  },
  label: {
    fontSize: 32,
    color: 'white',
    backgroundColor: 'blue'
  },
  result: {
    color: 'red',
    fontSize: 32,
  }
});
