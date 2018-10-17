import React, { Component } from 'react';
import { View, Text, ImageBackground, Alert, BackHandler, KeyboardAvoidingView, ScrollView, TextInput, TouchableOpacity, ActivityIndicator, Animated, Easing } from 'react-native';
import styles from './Styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Toast } from 'native-base'
import { EmptyField, Email, Password } from '../../../lib/Validation';
import Header from '../../Header/Header';

export default class ForgotPassword extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Username: '',
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
            this.submit()
    }
    submit() {
        this.props.navigation.replace("Login")
    }
    render() {
        return (
            <View style={styles.Container}>
                <Header title='Forgot Password' leftIcon={true} action={() => this.props.navigation.goBack()} />
                <View style={styles.TextInputView}>
                    <Icon name="user" size={25} style={styles.icon} />
                    <TextInput onChangeText={(text) => this.setState({ Username: text })} style={styles.textinput} placeholder="Email" placeholderTextColor="#456038" ></TextInput>
                </View>
                <TouchableOpacity onPress={() => this.validate()} style={styles.loginbutton}>
                    <Text style={styles.buttontext}>SUBMIT</Text>
                </TouchableOpacity>

            </View>



        );
    }
}