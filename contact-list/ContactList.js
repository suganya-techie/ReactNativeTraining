
import React from "react";
import ContactListItem from "./ContactListItem";
import { View, ScrollView } from "react-native";

class ContactList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { contacts: [] };
  }

  componentDidMount() {
    fetch("https://randomuser.me/api/?results=20")
      .then(response => response.json())
      .then(data => {
        this.setState({ contacts: data.results });
      });
  }

  renderResult() {
    return this.state.contacts.map((c,index) => (
      <ContactListItem
        name={`${c.name.title} ${c.name.first} ${c.name.last}`}
        profileImage={c.picture.thumbnail}
        itemPosition={index % 2}
      />
    ));
  }

  render() {
    return <ScrollView>{this.renderResult()}</ScrollView>;
  }
}

export default ContactList;

