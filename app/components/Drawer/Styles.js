import { Platform, StyleSheet, Dimensions } from 'react-native';
import * as color from '../../utils/Color';
import * as font from '../../utils/FontSize';

export default styles = StyleSheet.create({

    mainview: {
        flex: 1,
        height: "100%",
        backgroundColor: color.White,
        // justifyContent: "center"
    },
    ProfileImage: {
        height: 100,
        width: 100,
        borderRadius: 50,
        borderWidth: 2,
        borderColor: color.PlusIconBackground,
        marginTop: 10,
        position:"relative"
    },
    UserName: {
        color: color.PlusIconBackground,
        marginTop: 18,
        fontWeight: font.ButtonFontWeight,
        fontSize: 20,
    },
    UserEmail: {
        color: color.PlusIconBackground,
        fontSize: 15
    },
    ProfileView: {
        alignItems: "center",
        height: "30%",
        marginTop:Platform.OS==='ios'?25:0
    },
    SubView: {
        // height: "55%",
        // height:"70%",
        justifyContent: "center",
        marginTop:Platform.OS==='ios'?0: 25
        // backgroundColor:"red"
    },
    ButtonView: {
        borderBottomWidth: 1,
        borderColor: color.PlusIconBackground,
        flexDirection: "row",
        width: "100%",
        // height: "20%"
    },
    ButtonText: {
        marginBottom: 10,
        marginTop: 10,
        fontWeight: font.ButtonFontWeight,
        fontSize: font.RegularFont,
        color: color.PlusIconBackground
    },
    IconView: {
        width: "15%",
        justifyContent: "center",
        alignItems: "center",
        //     backgroundColor: "blue"
    },
    EditButtonTouch:{
        backgroundColor:color.PlusIconBackground,
        marginTop:-35,
        height:30,
        justifyContent:"center",
        alignItems:"center",
        width:30,
        borderRadius:15,
        marginLeft:75
    }

});
