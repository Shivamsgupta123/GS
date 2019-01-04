import { StyleSheet, Dimensions, Platform } from "react-native";
import * as color from "../../../utils/Color";
import * as font from "../../../utils/FontSize";

export default (styles = StyleSheet.create({
  Container: {
    flex: 1
    // backgroundColor: color.LightGreen,
    // alignItems: "center"
  },
  ImageView: {
    height: "30%",
    justifyContent: "center",
    alignItems: "center"
  },
  LogoImage: {
    height: 100,
    width: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "white"
  },
  LogIn: {
    color: "white",
    fontSize: font.ButtonTextSize,
    fontWeight: font.HeaderTextFontWeight,
    padding: 10
  },
  TextInputView: {
    height: "33.3%",
    justifyContent: "center",
    flexDirection: "row"
  },
  icon: {
    height: 35,
    marginTop: 24,
    paddingRight: 10,
    borderBottomWidth: 2,
    borderColor: color.White
    // color: color.PlusIconBackground
  },
  textInput: {
    height: 45,
    width: 250,
    fontSize: font.RegularFont,
    marginTop: 14,
    borderBottomWidth: 2,
    borderColor: color.White,
    color: color.White
  },
  CheckBoxView: {
    height: "33.3%",
    alignItems: "center",
    flexDirection: "row",
    paddingLeft: "9%"
  },
  checkBoxText: {
    paddingLeft: 20,
    fontSize: 15,
    color: color.PlusIconBackground
  },
  LoginButtonView: {
    height: "30%",
    alignItems: "center",
    padding: 5
  },
  LoginTouch: {
    backgroundColor: "white",
    // height: 60,
    // width: 170,
    paddingVertical: 15,
    paddingHorizontal: 70,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 40
  },
  LoginButtonText: {
    fontSize: font.LogoHeaderText,
    fontWeight: font.LogoFontWeight,
    color: color.PlusIconBackground
  },
  Text: {
    fontSize: font.RegularFont,
    color: color.White,
    fontWeight: font.ButtonFontWeight,
    marginTop: 5
  },
  SubView: {
    height: Platform.OS == "ios" ? "10%" : "13%",
    justifyContent: "space-between",
    padding: 10,
    flexDirection: "row"
    // backgroundColor: "blue",
    // marginBottom: 25
  },
  AddAccount: {
    paddingRight: 10,
    paddingTop: 5,
    color: color.White
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5
  }
}));
