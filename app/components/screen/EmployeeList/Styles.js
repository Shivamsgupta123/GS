import { Platform, StyleSheet, Dimensions } from 'react-native';
import * as color from '../../../utils/Color';
import * as font from '../../../utils/FontSize';

export default styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: color.LightGreen,
        alignItems: "center"
    },
    loginbutton: {
        // borderWidth: 1,
        backgroundColor: color.White,
        height: 55,
        width: Dimensions.get('window').width,
        marginTop: 18,
        // borderRadius: 10,
        fontSize: 5,
        // borderColor: color.PlusIconBackground,
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