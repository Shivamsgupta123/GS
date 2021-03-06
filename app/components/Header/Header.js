import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./Styles";
import Icon from "react-native-vector-icons/FontAwesome";
import LinearGradient from "react-native-linear-gradient";
import { connect } from "react-redux";
class Header extends Component {
  constructor(props) {
    super(props);
    // console.log(props)
  }

  render() {
    return (
      <View style={styles.Container}>
        <View style={styles.BackButtonView}>
          <TouchableOpacity onPress={this.props.action}>
            {this.props.menuBar ? (
              <Icon name="bars" size={28} style={styles.BackButton} />
            ) : null}
            {this.props.leftIcon ? (
              <Icon name="angle-left" size={30} style={styles.BackButton} />
            ) : null}
          </TouchableOpacity>
        </View>
        <View style={styles.HeaderTextView}>
          <Text style={styles.HeaderText}>{this.props.title}</Text>
        </View>
        <View style={styles.Icon1View}>
          {this.props.rightIcon ? (
            <Icon name="angle-right" style={styles.icon1} size={30} />
          ) : null}
        </View>
      </View>
    );
  }
}
const mapStateToProps = state => {
  return {
    ...state
  };
};
export default connect(mapStateToProps)(Header);
