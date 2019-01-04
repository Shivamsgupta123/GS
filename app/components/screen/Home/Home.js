import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./Styles";
import Icon from "react-native-vector-icons/FontAwesome";
import Header from "../../Header/Header";
import { translate } from "../../../Translation/Translation";
import { connect } from "react-redux";
import LinearGradient from "react-native-linear-gradient";
class Home extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  render() {
    return (
      <View style={styles.Container}>
        <Header
          title={translate("Home.WELCOME")}
          menuBar={true}
          action={() => this.props.navigation.openDrawer()}
        />
        <View style={styles.ButtonView}>
          <View>
            <TouchableOpacity
              style={styles.touch}
              onPress={() => this.props.navigation.navigate("EmployeeList")}
            >
              {/* <Icon name="user" size={23} color="white" style={{ paddingRight: 10 }} /> */}
              <Text style={styles.ButtonText}>
                {translate("Home.Employee List")}
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{ paddingTop: 10 }}>
            <TouchableOpacity
              style={styles.touch}
              onPress={() => this.props.navigation.navigate("ProductDetail")}
            >
              {/* <Icon name="product-hunt" size={23} color="white" style={{ paddingRight: 10 }} /> */}
              <Text style={styles.ButtonText}>
                {translate("Home.Product Details")}
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{ paddingTop: 10 }}>
            <TouchableOpacity
              style={styles.touch}
              onPress={() => this.props.navigation.navigate("AttendanceSheet")}
            >
              {/* <Icon name="file" size={22} color="white" style={{ paddingRight: 10 }} /> */}
              <Text style={styles.ButtonText}>
                {translate("Home.Attendance Sheet")}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => {
  console.log("Drawer state", state);
  return {
    ...state
  };
};

export default connect(mapStateToProps)(Home);
