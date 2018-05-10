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
  View, FlatList, TouchableOpacity
} from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import ProductDetail  from './ProductDetail';
import AddProduct from './AddProduct';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});
const baseURL = "http://10.0.2.2:4000";

//type Props = {};
class App extends Component {

  constructor(props){
    super(props);
    this.state={products:[], page:1}
  }

  componentDidMount(){
    this._getData()
  }

  _getData = () => {
    fetch(`${baseURL}/products?_page=${this.state.page}&_limit=15`)
      .then(response => response.json())
      .then(data => {
        this.setState({ products: [...this.state.products, ...data]});
      });
  }

  _getMore = () => {
    this.setState({page: ++this.state.page}, function() {
      this._getData();
    });
  }

  _renderItem =({item})=>{
    return (
      <TouchableOpacity onPress={()=>this.props.navigation.navigate('ProductDetail',item)}>
        <Text style={{margin:10,marginBottom:40}}>{item.id} - {item.title}</Text>
      </TouchableOpacity>
    )
  }

  render() {
    return (
      <View style={styles.container}>
       <FlatList
        data={this.state.products}
        renderItem={this._renderItem}
        keyExtractor={(item,index)=>`${item.id}`}
        onEndReachedThreshold={0.5}
        onEndReached = {this._getMore}
       />
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

const ListStack = createStackNavigator({
  List:{
    screen:App
  },
  Detail:{
    screen:ProductDetail
  }
},{
  initialRouteName:'List',
  navigationOptions:{
  title:'Product Manager'
  }
})

const AddStack = createStackNavigator({
  Add:{
    screen:AddProduct
  }
})


const AppNavigator = createBottomTabNavigator({
  ListStack:ListStack,
  Add:AddStack
})
export default AppNavigator