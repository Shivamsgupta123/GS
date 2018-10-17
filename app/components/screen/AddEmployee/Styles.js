import { Platform, StyleSheet, Dimensions } from 'react-native';
import * as color from '../../../utils/Color';
import * as font from '../../../utils/FontSize';

export default styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: color.LightGreen,
        alignItems: "center",
        justifyContent: "center"
    },
    view3: {
        height: 45,
        width: 280,
        borderColor: color.White,
        borderWidth: 1,
        padding: Platform.OS === 'ios' ? 10 : 0,
        marginTop: 20,
        flexDirection: 'row',
        alignItems: "center"
    },
    icon: {
        // paddingTop: Platform.OS === 'ios' ? 0 : 8,
        paddingLeft: Platform.OS === 'ios' ? 0 : 5,
        color: color.White,
        textShadowColor: 'black',
        textShadowOffset: { width: 1, height: 2 },
        textShadowRadius: 5
    },
    textinput: {
        flex: 1,
        height: 55,
        marginLeft: 10,
        color: color.White,
        fontSize: font.TextInputFont,
        // paddingBottom: Platform.OS === "ios" ? 30 : 20,
        // fontFamily: FontMedium,
        textShadowColor: 'black',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 5
    },
    loginbutton: {
        borderWidth: 1,
        backgroundColor: color.White,
        height: 55,
        width: "100%",
        marginTop: 18,
        borderRadius: 10,
        fontSize: 5,
        borderColor: color.White,
        justifyContent: "center",
        alignItems: "center"
    },
    buttontext: {

        color: color.ButtonText,
        fontWeight: "bold",
        fontSize: font.ButtonTextSize,
        // fontFamily: FontMedium,
        // paddingTop: Platform.OS === 'ios' ? 7 : 0,
        textShadowColor: 'black',
        textShadowOffset: { width: 1, height: 2 },
        textShadowRadius: 5
    },
    profileimage: {
        width: 133.3,
        height: 133.3,
        borderRadius: 66.6,
        borderColor: color.White,
        borderWidth: 1,
        // alignItems: 'center',
        // justifyContent: 'center'
        paddingLeft: '20%'
    },
})