import React, { Component } from 'react';
import { View, Text, ImageBackground, Alert, BackHandler, KeyboardAvoidingView, ScrollView, TextInput, TouchableOpacity, ActivityIndicator, Animated, Easing } from 'react-native';
import styles from './Styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Toast } from 'native-base'
import { EmptyField, Email, Password } from '../../../lib/Validation';

export default class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Username: '',
            Password: '',
        }
    }
    validate() {
        if (EmptyField(this.state.Username) || Email(this.state.Username)) {
            Toast.show({
                text: "Enter Valid User Name.",
                duration: 1500,
                type: "warning"
            })
            return false
        }
        else
            if (EmptyField(this.state.Password)) {
                Toast.show({
                    text: "Enter Valid Password.",
                    duration: 1500,
                    type: "warning"
                })
                return false
            }
            else
                this.login()
    }
    login() {
        this.props.navigation.replace("Home")
    }

    render() {
        return (
            <View style={styles.mainview}>
                <View style={styles.view1}>
                    <Text style={styles.neostore}>GS</Text>
                    <View style={styles.view3}>
                        <Icon name="user" size={25} style={styles.icon} />
                        <TextInput onChangeText={(text) => this.setState({ Username: text })} style={styles.textinput} placeholder="Email" placeholderTextColor="white" ></TextInput>
                    </View>

                    <View style={styles.view3}>
                        <Icon name="lock" size={25} color="#FFFFFF" style={styles.icon} />
                        <TextInput onChangeText={(text) => this.setState({ Password: text })} style={styles.textinput} secureTextEntry={true} placeholder="Password" placeholderTextColor="white"></TextInput>
                    </View>
                    <TouchableOpacity onPress={() => this.validate()} style={styles.loginbutton}>
                        <Text style={styles.buttontext}>LOGIN</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate("ForgotPassword")}>
                        <Text style={styles.forgotpassword}>Forgot Password?</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.view2}>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Text style={styles.newaccount}>DONT HAVE AN ACCOUNT?</Text>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate("Registration")}>
                            <Icon style={styles.addaccount} name="plus" size={30} />
                        </TouchableOpacity>

                    </View>
                </View>
                {/* </ImageBackground> */}
            </View>
        )
    }
}