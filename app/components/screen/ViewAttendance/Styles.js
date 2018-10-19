import { Platform, StyleSheet, Dimensions } from 'react-native';
import * as color from '../../../utils/Color';
import * as font from '../../../utils/FontSize';

export default styles = StyleSheet.create({
    Container: {
        flex: 1
    },
    UserDetailView: {
        height: "100%",
        flexDirection: "row",
        backgroundColor: "#b8ed6f"
    },
    UserImageView: {
        alignItems: "center",
        justifyContent: "center",
        width: "27%",
        height: "100%",
        // backgroundColor: color.White
    },
    UserImage: {
        height: 90,
        width: 70,
        borderColor: color.LightGreen,
        borderWidth: 1
    },
    UserDetail: {
        width: "73%",
        // backgroundColor: color.White,
        // height: "100%",
        flex: 1,
        justifyContent: "center",
        marginBottom: 7,
    },
    text: {
        color: color.PlusIconBackground,
        fontSize: font.RegularFont,
        fontWeight: font.ButtonFontWeight
    },
    text1: {
        color: color.PlusIconBackground
    }
})