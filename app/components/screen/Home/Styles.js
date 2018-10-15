import { Platform, StyleSheet, Dimensions } from 'react-native';
import * as color from '../../../utils/Color';
import * as font from '../../../utils/FontSize';

export default styles = StyleSheet.create({
    Container: {
        flex: 1,
    },
    touch: {
        borderWidth: 1,
        backgroundColor: color.PlusIconBackground,
        height: 55,
        width: 280,
        borderRadius: 10,
        fontSize: 5,
        borderColor: color.White,
        justifyContent: "center",
        alignItems: "center",
    },
    ButtonView: {
        flex: 1,
        backgroundColor: color.LightGreen,
        height: "100%",
        justifyContent: "center",
        alignItems: 'center',
        // paddingTop: 10
    },
    ButtonText: {
        color: color.White,
        fontWeight: font.ButtonFontWeight,
        fontSize: font.ButtonText
    }
})