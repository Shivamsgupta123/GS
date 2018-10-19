import { Platform, StyleSheet, Dimensions } from 'react-native';
import * as color from '../../../utils/Color';
import * as font from '../../../utils/FontSize';

export default styles = StyleSheet.create({
    UserDetailView: {
        height: "100%",
        // marginTop: 5,
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
        borderWidth: 1,
        marginTop: 5,
        marginBottom: 5
    },
    UserDetail: {
        width: "73%",
        // backgroundColor: color.White,
        height: "100%",
        justifyContent: "center",

    },
    text: {
        color: color.PlusIconBackground,
        fontSize: font.RegularFont,
        fontWeight: font.ButtonFontWeight
    },
    text1: {
        color: color.PlusIconBackground
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',

    },
    checkboxView: {
        width: 15,
        height: 15,
        borderColor: color.PlusIconBackground,
        borderWidth: 2,
        padding: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: "105%"

    },
    checkboxlable: {
        fontSize: 17,
        marginRight: 10,
        fontWeight: 'bold',
        padding: 1
    },
    checkboxClick: {
        color: color.PlusIconBackground,
        fontWeight: 'bold',
        fontSize: 14,
        marginTop: "25%"
    },
    square: {
        marginTop: 9,
        width: 9,
        height: 9,
    },

})