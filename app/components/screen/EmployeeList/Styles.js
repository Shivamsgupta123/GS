import { Platform, StyleSheet, Dimensions } from 'react-native';
import * as color from '../../../utils/Color';
import * as font from '../../../utils/FontSize';

export default styles = StyleSheet.create({
    Container: {
        flex: 1,
        // backgroundColor: color.LightGreen,
        // alignItems: "center"
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
    UserDetailView: {

        flex: 1,
        flexDirection: "row"
    },
    UserImageView: {
        alignItems: "center",
        justifyContent: "center",
        width: "25%",
        // height: "100%",
        backgroundColor: color.White
    },
    UserImage: {
        height: 80,
        width: 65,
        borderColor: color.LightGreen,
        borderWidth: 1,
    },
    UserDetail: {
        width: "75%",
        backgroundColor: color.White,
        height: "100%",
        justifyContent: "center",
        // alignItems: "center"
        marginBottom: 20,

    },
    text: {
        color: color.PlusIconBackground,
        fontSize: font.RegularFont,
        fontWeight: font.ButtonFontWeight,
        // backgroundColor: "blue"
    },
    text1: {
        color: color.PlusIconBackground,
        // backgroundColor: "red"
    },
    DeleteButton: {
        marginLeft: "70%",
        // marginTop: "8%",
        backgroundColor: color.LightGreen,
        // padding: 15,
        borderRadius: 25,
        height: 50,
        width: 50,
        justifyContent: "center",
        alignItems: "center"
    },
    DeleteButtonView: {
        justifyContent: "center",
        alignItems: "center",
        height: "100%"
    }
})