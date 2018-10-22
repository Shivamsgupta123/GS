// ProductDetail
import React, { Component } from 'react';
import { View, Text, ImageBackground, Alert, FlatList, BackHandler, Dimensions, Image, KeyboardAvoidingView, ScrollView, TextInput, TouchableOpacity, ActivityIndicator, Animated, Easing } from 'react-native';
import styles from './Styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Toast } from 'native-base'
import { EmptyField, Email, Password, Name, PhoneNumber } from '../../../lib/Validation';
import { ListItem, CheckBox, Body } from 'native-base';
import Header from '../../Header/Header';
import { SwipeListView } from 'react-native-swipe-list-view';

export default class ProductDetail extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Email: '',
            Password: '',
            isChecked: false
        }
    }
    validate() {
        // if (EmptyField(this.state.Email) || Email(this.state.Email)) {
        //     Toast.show({
        //         text: "Enter Valid User Name.",
        //         duration: 1500,
        //         type: "warning"
        //     })
        //     return false
        // }
        // else
        //     if (EmptyField(this.state.Password)) {
        //         Toast.show({
        //             text: "Enter Valid Password.",
        //             duration: 1500,
        //             type: "warning"
        //         })
        //         return false
        //     }
        //     else
        this.login()
    }
    login() {
        this.props.navigation.replace("MyApp")
    }
    checkBoxClicked = async () => {
        await this.setState({ isChecked: !this.state.isChecked })
        console.log("is checked", this.state.isChecked)
    }
    handleText = (text) => {
        this.setState({ Password: text })

    }

    render() {
        return (
            // <ScrollView style={{ flex: 1 }}>
            <View style={styles.Container}>
                <KeyboardAvoidingView style={{ height: Dimensions.get('window').height }}>
                    <View style={{ flex: 1 }}>
                        <View style={styles.ImageView}>
                            <Image source={require('../../../assets/images/user.png')} style={styles.LogoImage} />
                            <Text style={styles.LogIn}>LOG IN</Text>
                        </View>

                        <View style={{ height: "40%" }}>
                            <View style={styles.TextInputView}>
                                <Icon name="user" size={23} style={styles.icon} />
                                <TextInput onChangeText={(text) => this.setState({ Email: text })} placeholder="Email Id" placeholderTextColor="white" style={styles.textInput} ></TextInput>
                            </View>
                            <View style={styles.TextInputView}>
                                <Icon name="lock" size={25} style={styles.icon} />
                                <TextInput onChangeText={this.handleText} placeholder="Password" placeholderTextColor="white" style={styles.textInput} ></TextInput>
                            </View>
                            <View style={styles.CheckBoxView}>
                                <CheckBox checked={this.state.isChecked} onPress={this.checkBoxClicked} color="white" />
                                <Text style={styles.checkBoxText}>Remember Me</Text>
                            </View>
                        </View>
                        <View style={styles.LoginButtonView}>
                            <TouchableOpacity style={styles.LoginTouch} onPress={() => this.validate()} >
                                <Text style={styles.LoginButtonText}>Login</Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Text style={styles.Text}>Forgot Password?</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.SubView}>
                        <Text style={styles.Text}>Dont Have An Account?</Text>
                        <TouchableOpacity>
                            <Icon name="plus" size={25} style={styles.AddAccount} />
                        </TouchableOpacity>
                    </View>
                </KeyboardAvoidingView>
            </View>
        )
    }
}

// FOR CHECKBOX

// constructor(props) {
//     super(props)
//     this.state = {
//         isChecked: false
//     }
// }
// checkBoxClicked() {
//     this.setState({ isChecked: !this.state.isChecked })
//     console.log("is checked", this.state.isChecked)
// }
// render() {
//     return (
//         <View style={styles.Container}>
//             <Header title='Product Detail' leftIcon={true} action={() => this.props.navigation.goBack()} />
//             <View style={{ flexDirection: "row", backgroundColor: "red", padding: 10 }}>
//                 <CheckBox checked={this.state.isChecked} onPress={() => this.checkBoxClicked()} color="green" />
//                 <Text style={{ paddingLeft: 20 }}>Daily Stand Up</Text>
//             </View>


//         </View>
//     );
// }