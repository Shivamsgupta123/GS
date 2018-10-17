import { Platform, StyleSheet, Dimensions } from 'react-native';
import * as color from '../../utils/Color';
import * as font from '../../utils/FontSize';

export default styles = StyleSheet.create({

    mainview: {
        flex: 1,
        backgroundColor: color.White,
        // justifyContent: "center"
    },
    ProfileImage: {
        height: 100,
        width: 100,
        borderRadius: 50,
        borderWidth: 2,
        borderColor: color.PlusIconBackground,
        marginTop: 10
    },
    UserName: {
        color: color.PlusIconBackground,
        marginTop: 5,
        fontWeight: font.ButtonFontWeight,
        fontSize: 20
    },
    UserEmail: {
        color: color.PlusIconBackground,
        fontSize: 15
    },
    ProfileView: {
        alignItems: "center",
        height: "30%",
    },
    SubView: {
        height: "70%",
        justifyContent: "center"
    },
    ButtonView: {
        borderBottomWidth: 1,
        borderColor: color.PlusIconBackground
    },
    ButtonText: {
        marginBottom: 10,
        marginTop: 10,
        fontWeight: font.ButtonFontWeight,
        fontSize: font.RegularFont,
        color: color.PlusIconBackground
    }

});
