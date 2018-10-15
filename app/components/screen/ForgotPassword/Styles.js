import { Platform, StyleSheet, Dimensions } from 'react-native';
import * as color from '../../../utils/Color';
import * as font from '../../../utils/FontSize';

export default styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: color.LightGreen,
        alignItems: "center"
    },
    MainView: {
        justifyContent: "center",
        alignItems: 'center',
        backgroundColor: "red",
        height: "100%"
    },
    TextInputView: {
        height: 45,
        width: 280,
        borderColor: color.PlusIconBackground,
        borderWidth: 1,
        marginTop: 100,
        backgroundColor: "white",
        flexDirection: 'row',
        alignItems: "center"

    },
    icon: {
        paddingLeft: Platform.OS === 'ios' ? 0 : 5,
        color: color.PlusIconBackground,
        textShadowColor: 'black',
        textShadowOffset: { width: 1, height: 2 },
        textShadowRadius: 5
    },
    textinput: {
        flex: 1,
        height: 55,
        marginLeft: 10,
        color: color.PlusIconBackground,
        fontSize: font.TextInputFont,
        textShadowColor: 'black',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 5,
    },
    loginbutton: {
        borderWidth: 1,
        backgroundColor: color.White,
        height: 55,
        width: 280,
        marginTop: 18,
        borderRadius: 10,
        fontSize: 5,
        borderColor: color.PlusIconBackground,
        justifyContent: "center",
        alignItems: "center"

    },
    buttontext: {
        color: color.ButtonText,
        fontWeight: font.ButtonFontWeight,
        fontSize: font.ButtonTextSize,
        // fontFamily: FontMedium,
        paddingTop: Platform.OS === 'ios' ? 7 : 0,
        textShadowColor: 'black',
        textShadowOffset: { width: 1, height: 2 },
        textShadowRadius: 5
    },
})