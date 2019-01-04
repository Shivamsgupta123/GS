import React, { Component } from "react";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  AsyncStorage,
  TouchableWithoutFeedback
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import styles from "./Styles";
import Card from "./card";
// import { translate } from "../../Translation/Translation";
// import i18n from "i18n-js";
// import { connect } from "react-redux";

export default class Videos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      VisibleCard: false,
      HideCard: false
    };
  }
  openCard = () => {
    this.setState({ VisibleCard: true });
    // console.log("video");
  };

  closeCard = () => {
    this.setState({ VisibleCard: false });
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.openCard}>
          <View style={styles.buttonWrapper}>
            <Text style={styles.buttonText}>Open Contact</Text>
          </View>
        </TouchableOpacity>
        <Card visible={this.state.VisibleCard} onclose={this.closeCard} />
      </View>
    );
  }
}
