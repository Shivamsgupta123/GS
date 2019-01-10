import { StyleSheet, Dimensions, Platform } from "react-native";
import * as color from "../../../utils/Color";
import * as font from "../../../utils/FontSize";
import {IS_IPHONE_X} from "../../../utils/Phone_Info"
import * as FONTSIZE from "../../../utils/Font-Setting"

export default (styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#999999"
  },
  buttonWrapper: {
    marginTop: 70,
    marginLeft: 20,
    marginRight: 20,
    flexDirection: "column",
    backgroundColor: "#00CCFF",
    borderRadius: 4
  },
  buttonText: {
    justifyContent: "center",
    alignSelf: "center",
    marginTop: 10,
    marginBottom: 10,
    marginHorizontal: 20,
    elevation: 1,
    color: "#FFFFFF",
    // fontSize:FONTSIZE.FONT.SIZES.M
  }
}));
