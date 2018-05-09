
import React, { Component } from 'react';
import {Button,View, Text} from "react-native"

class Contact extends Component {
    static navigationOptions = {
        title: 'Contact'
    }
    render() {
        return (
            <View>
            <Button title="Home" onPress={()=>this.props.navigation.navigate('Home')}/> 
            <Button title="About" onPress={()=>this.props.navigation.navigate('About')}/> 
            {/* <Text>{this.props.navigation.state.params.comingFrom } </Text> */}
            </View>
        );
    }
}

export default Contact;