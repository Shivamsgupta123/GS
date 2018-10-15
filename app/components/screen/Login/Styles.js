import { Platform, StyleSheet, Dimensions } from 'react-native';
import * as color from '../../../utils/Color';
import * as font from '../../../utils/FontSize';

export default styles = StyleSheet.create({
    neostore: {
        fontSize: font.LogoSize,
        fontWeight: font.LogoFontWeight,
        color: color.White,
        padding: font.LogoPadding,
        alignItems: 'center',
        textShadowColor: 'black',
        textShadowOffset: { width: 1, height: 2 },
        textShadowRadius: 5,
        // marginBottom: 5


    },
    view3: {
        height: 45,
        width: 280,
        borderColor: color.White,
        borderWidth: 1,
        padding: Platform.OS === 'ios' ? 10 : 0,
        margin: 6,

        flexDirection: 'row'

    },

    textinput: {
        flex: 1,
        height: 55,
        marginLeft: 10,
        color: color.White,
        fontSize: font.TextInputFont,
        paddingBottom: Platform.OS === "ios" ? 30 : 20,
        // fontFamily: FontMedium,
        textShadowColor: 'black',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 5


    },
    loginbutton: {
        borderWidth: 1,
        backgroundColor: color.White,
        height: 55,
        width: 280,
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
        paddingTop: Platform.OS === 'ios' ? 7 : 0,
        textShadowColor: 'black',
        textShadowOffset: { width: 1, height: 2 },
        textShadowRadius: 5


    },
    forgotpassword: {
        color: color.White,
        fontSize: 20,
        marginTop: 6,
        // fontFamily: FontMedium,
        paddingTop: Platform.OS === 'ios' ? 3 : 0,
        textShadowColor: 'black',
        textShadowOffset: { width: 1, height: 2 },
        textShadowRadius: 5

    },
    newaccount: {
        color: color.White,
        fontWeight: "bold",
        fontSize: font.RegularFont,
        // marginTop:90,
        marginLeft: 2,
        justifyContent: 'center',
        // fontFamily: FontMedium,
        textShadowColor: 'black',
        textShadowOffset: { width: 1, height: 2 },
        textShadowRadius: 5

    },
    view1: {
        justifyContent: "center",
        alignItems: "center",
        flex: 1


    },
    view2: {
        marginBottom: Platform.OS === 'ios' ? 5 : 30,
        marginLeft: 10

    },

    genderview: {
        height: 45,
        width: 280,
        // borderColor: 'white',
        // borderWidth: 1,
        padding: 10,
        margin: 6,
        flexDirection: 'row'

    },
    // keyboardview: {
    //     // height:"100%",
    //     flex:1
    // } ,
    swiperimage: {
        height: 300,
        width: Dimensions.get('window').width,

    },


    containerbottom: {
        flex: 3,
        justifyContent: 'space-between',

        flexDirection: 'column',
        marginHorizontal: 40 / 3,
        marginVertical: 45 / 3,
        marginBottom: 15,

    },
    boxrow: {

        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '100%',

    },
    boxrow: {

        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',

    },
    boxtop: {
        padding: 60 / 3,

        justifyContent: 'space-between',
        width: '48%',
        height: '90%',


        backgroundColor: '#e91c1a',
    },
    boxbottom: {
        padding: 60 / 3,
        justifyContent: 'space-between',

        width: '48%',
        height: '90%',
        backgroundColor: '#e91c1a',
    },
    homescreenboxtext1: {
        textAlign: 'right',
        fontWeight: '500',
        fontSize: 25,
        color: '#ffffff'
    },
    homescreenboxtext2: {
        textAlign: 'left',
        fontWeight: '500',
        fontSize: 25,
        color: '#ffffff'
    },
    mainview: {
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,
        backgroundColor: color.LightGreen
    },
    icon: {
        paddingTop: Platform.OS === 'ios' ? 0 : 8,
        paddingLeft: Platform.OS === 'ios' ? 0 : 5,
        color: color.White,
        textShadowColor: 'black',
        textShadowOffset: { width: 1, height: 2 },
        textShadowRadius: 5

    },
    addaccount: {
        marginRight: 15,
        backgroundColor: color.PlusIconBackground,
        padding: 5,
        color: color.White,
        textShadowColor: 'black',
        textShadowOffset: { width: 1, height: 2 },
        textShadowRadius: 5

    }
});