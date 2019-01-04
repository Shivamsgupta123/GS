import React, { Component } from "react";
import { Text, View, Modal } from "react-native";
import Header from "../../Header/Header";

export default class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      t: 2
    };
    console.log("card", this.props);
  }
  render() {
    return (
      <Modal visible={this.props.visible}>
        <View style={{ flex: 1 }}>
          <Header title={"card"} leftIcon={true} action={this.props.onclose} />
          <Text
            style={{ paddingRight: 5, color: "#841584", textAlign: "right" }}
          >
            This is Card
          </Text>
        </View>
      </Modal>
    );
  }
}
