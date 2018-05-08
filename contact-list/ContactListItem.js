import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const ContactListItem = ({ profileImage, name, itemPosition }) => (
  <View style={[styles.container, {flexDirection: 'rowreverse' && itemPosition}]} key={profileImage}>
    <Image source={{uri:profileImage}} style={{ width: 50, height: 50,borderRadius:25 }} />
    <Text style={{marginLeft:10}}>{name} {itemPosition}</Text> 
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ecedea",
    marginRight:10,
    marginLeft:10,
    marginBottom:10,
    padding: 10,
  },
  alignLeft: {
    flexDirection: 'row'
  },
  alignRight: {
    flexDirection: 'rowreverse'
  }

});

export default ContactListItem;