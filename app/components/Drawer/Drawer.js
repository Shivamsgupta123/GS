import React, { Component } from "react";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  AsyncStorage
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import styles from "./Styles";
import { translate } from "../../Translation/Translation";
import i18n from "i18n-js";
import { connect } from "react-redux";
import { White } from "../../utils/Color";
class Drawer extends Component {
  constructor(props) {
    super(props);
  }
  closeScreen = (screen, params = {}) => {
    setTimeout(() => {
      this.props.navigation.navigate(screen, params);
    }, 600);
    this.props.navigation.closeDrawer();
  };

  logOut = () => {
    AsyncStorage.removeItem("token");
    this.props.navigation.replace("Login");
  };
  render() {
    return (
      <View style={styles.mainview}>
        <View style={styles.ProfileView}>
          <Image
            source={require("../../assets/images/user.png")}
            style={styles.ProfileImage}
          />
          <TouchableOpacity style={styles.EditButtonTouch}><Icon name="pencil" size={17} color={White}/></TouchableOpacity>
          <Text style={styles.UserName}>XYZ LMN</Text>
          <Text style={styles.UserEmail}>xyz@gmail.com</Text>
        </View>
        <View style={styles.SubView}>
          <TouchableOpacity onPress={() => this.closeScreen("EmployeeList")}>
            <View style={styles.ButtonView}>
              <View style={styles.IconView}>
                <Icon name="user" size={23} color="green" />
              </View>
              <Text style={styles.ButtonText}>
                {translate("Drawer.Employee List")}
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.ButtonView}>
              <View style={styles.IconView}>
                <Icon name="product-hunt" size={23} color="green" />
              </View>
              <Text style={styles.ButtonText}>
                {translate("Drawer.Product Details")}
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.closeScreen("AttendanceSheet")}>
            <View style={styles.ButtonView}>
              <View style={styles.IconView}>
                <Icon name="file" size={22} color="green" />
              </View>
              <Text style={styles.ButtonText}>
                {translate("Drawer.Attendance Sheet")}
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              i18n.locale = "hi";
              this.props.dispatch({
                type: "CHANGE_LANG",
                data: { lang: "hi" }
              });
            }}
          >
            <View style={styles.ButtonView}>
              <View style={styles.IconView}>
                <Icon name="h-square" size={26} color="green" />
              </View>
              <Text style={styles.ButtonText}>{translate("Drawer.Hindi")}</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              i18n.locale = "en";
              this.props.dispatch({
                type: "CHANGE_LANG",
                data: { lang: "en" }
              });
            }}
          >
            <View style={styles.ButtonView}>
              <View style={styles.IconView}>
                <Icon name="etsy" size={23} color="green" />
              </View>
              <Text style={styles.ButtonText}>
                {translate("Drawer.English")}
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.logOut}>
            <View style={styles.ButtonView}>
              <View style={styles.IconView}>
                <Icon name="sign-out" size={23} color="green" />
              </View>
              <Text style={styles.ButtonText}>
                {translate("Drawer.Log Out")}
              </Text>
            </View>
          </TouchableOpacity> 
        </View>
      </View>
    );
  }
}
const mapStateToProps = state => {
  console.log("state", state);
  return {
    ...state
  };
};
export default connect(mapStateToProps)(Drawer);
