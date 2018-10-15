import { Platform, StyleSheet, Dimensions } from 'react-native';
import * as color from '../../utils/Color';
import * as font from '../../utils/FontSize';

export default styles = StyleSheet.create({
    Container: {
        backgroundColor: color.PlusIconBackground,
        ...Platform.select({
            ios: {
                height: "10%", paddingTop: 12
            },
            android: {
                height: 50
            }
        }),
        justifyContent: "center",
        width: "100%",
        flexDirection: "row",

    },
    BackButtonView: {
        // backgroundColor: "red",
        width: "10%",
        justifyContent: "center"
    },
    BackButton: {
        color: color.White,
        paddingLeft: "20%",
        textShadowColor: 'black',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 5,
    },
    HeaderTextView: {
        // backgroundColor: "blue",
        width: "80%",
        justifyContent: "center",
        alignItems: "center"
    },
    HeaderText: {
        color: color.White,
        fontSize: font.HeaderText,
        fontWeight: font.LogoFontWeight,
        textShadowColor: 'black',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 5,
    },
    Icon1View: {
        width: "10%",
        // backgroundColor: "red",
        justifyContent: "center"
    },
    icon1: {
        paddingLeft: "30%",
        color: "white",
        textShadowColor: 'black',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 5,
    }
})