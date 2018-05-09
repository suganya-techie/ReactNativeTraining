
import React, { Component } from 'react';
import {Button,View} from "react-native"

class About extends Component {
    static navigationOptions = {
        title: 'About'
    }
    render() {
        return (
            <View>
                <Button title="Contact" onPress={()=>this.props.navigation.navigate('Contact')}/> 
                <Button title="Home" onPress={()=>this.props.navigation.navigate('Home')}/> 
            </View>
        );
    }
}

export default About;