import React, { Component } from "react";
import {
  View,
  Text,
  ImageBackground,
  Alert,
  FlatList,
  BackHandler,
  Dimensions,
  Image,
  KeyboardAvoidingView,
  ScrollView,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  Animated,
  Easing,
  AsyncStorage
} from "react-native";
import styles from "./Styles";
import Icon from "react-native-vector-icons/FontAwesome";
import { Toast } from "native-base";
import {
  EmptyField,
  Email,
  Password,
  Name,
  PhoneNumber
} from "../../../lib/Validation";
import { CheckBox } from "native-base";
import LinearGradient from "react-native-linear-gradient";
import { translate } from "../../../Translation/Translation";
import moment from "moment";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Email: "",
      Password: "",
      isChecked: false,
      Date: moment()
    };
  }
  validate() {
    // if (EmptyField(this.state.Email) || Email(this.state.Email)) {
    //     Toast.show({
    //         text: "Enter Valid User Name.",
    //         duration: 1500,
    //         type: "warning"
    //     })
    //     return false
    // }
    // else
    //     if (EmptyField(this.state.Password)) {
    //         Toast.show({
    //             text: "Enter Valid Password.",
    //             duration: 1500,
    //             type: "warning"
    //         })
    //         return false
    //     }
    //     else
    this.login();
  }
  login() {
    // if (this.state.Email === "shivam" && this.state.Password === "shivam") {
      this.props.navigation.replace("MyApp");
      // AsyncStorage.setItem("token", "abc");
    // } else
    //   Toast.show({
    //     text: "Enter Valid Id orPassword.",
    //     duration: 1500,
    //     type: "danger"
    //   });
  }
  checkBoxClicked = async () => {
    await this.setState({ isChecked: !this.state.isChecked });
    console.log("is checked", this.state.isChecked);
  };
  handleText = text => {
    this.setState({ Password: text });
  };
  componentDidMount() {
    // console.log("date", this.state.Date.toISOString()); //find date/day,time from string
    // console.log("date", moment(this.state.Date).format("hh:mm")); //find time slot from toISOString()
    // console.log("date", moment(this.state.date).format("hh:mm"));
    // var Token = AsyncStorage.getItem("token");
    // if (Token === "shivam") this.props.navigation.replace("MyApp");
  }

  render() {
    return (
      // <ScrollView style={{ flex: 1 }}>
      <LinearGradient
        colors={["#f78a04", "#f2eeea", "#005408"]}
        style={styles.linearGradient}
      >
        <View style={styles.Container}>
          <KeyboardAvoidingView
            style={{ height: Dimensions.get("window").height }}
          >
            <View style={{ flex: 1 }}>
              <View style={styles.ImageView}>
                <Image
                  source={require("../../../assets/images/ls.jpg")}
                  style={styles.LogoImage}
                />
                {/* <Text style={styles.LogIn}>{translate("Login.LOG IN")}</Text> */}
              </View>

              <View style={{ height: "40%" }}>
                <View style={styles.TextInputView}>
                  <Icon
                    name="user"
                    size={23}
                    color="#f78a04"
                    style={styles.icon}
                  />
                  <TextInput
                    onChangeText={text => this.setState({ Email: text })}
                    placeholder={translate("Login.Email Id")}
                    placeholderTextColor="#f78a04"
                    style={styles.textInput}
                  />
                </View>
                <View style={styles.TextInputView}>
                  <Icon
                    name="lock"
                    color="#005408"
                    size={25}
                    style={styles.icon}
                  />
                  <TextInput
                    onChangeText={text => this.setState({ Password: text })}
                    placeholder={translate("Login.Password")}
                    placeholderTextColor="#005408"
                    style={styles.textInput}
                    secureTextEntry={true}
                  />
                </View>
                <View style={styles.CheckBoxView}>
                  <CheckBox
                    checked={this.state.isChecked}
                    onPress={this.checkBoxClicked}
                    color="green"
                    style={{ left: 0 }}
                  />
                  <Text style={styles.checkBoxText}>
                    {translate("Login.Remember Me")}
                  </Text>
                </View>
              </View>
              <View style={styles.LoginButtonView}>
                <TouchableOpacity
                  style={styles.LoginTouch}
                  onPress={() => this.validate()}
                >
                  <Text style={styles.LoginButtonText}>
                    {translate("Login.Login")}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() =>
                    this.props.navigation.navigate("ForgotPassword")
                  }
                >
                  <Text style={styles.Text}>
                    {translate("Login.Forgot Password?")}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.SubView}>
              <Text style={styles.Text}>
                {translate("Login.Dont Have An Account?")}
              </Text>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("Registration")}
              >
                <Icon name="plus" size={25} style={styles.AddAccount} />
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
        </View>
      </LinearGradient>
    );
  }
}
