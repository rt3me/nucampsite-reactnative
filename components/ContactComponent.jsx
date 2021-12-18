import React, { Component } from "react";
import { ScrollView } from "react-native";

export default class AboutComponent extends Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    title: "Contact Us",
  };

  render() {
    return <ScrollView></ScrollView>;
  }
}
