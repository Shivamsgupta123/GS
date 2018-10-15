import React, { Component } from 'react';
import { View, Text, ImageBackground, Alert, BackHandler, KeyboardAvoidingView, ScrollView, TextInput, TouchableOpacity, ActivityIndicator, Animated, Easing } from 'react-native';
import styles from './Styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Toast } from 'native-base'
import { EmptyField, Email, Password, Name, PhoneNumber } from '../../../lib/Validation';
import Header from '../../Header/Header';

export default class Registration extends Component {
    constructor(props) {
        super(props)
        this.state = {
            FirstName: '',
            LastName: '',
            Email: '',
            Password: '',
            ConfirmPassword: '',
            PhoneNumber: ''
        }
    }
    validate() {
        var namereg = /^[A-Za-z]+$/;
        var emailreg = /\S+@\S+\.\S+/;
        var passwordreg = /^[0-9a-zA-Z]+$/;
        var phonenoreg = /^\+?([0-9]{2})\)?[-. ]?([0-9]{5})[-. ]?([0-9]{5})$/;

        if (EmptyField(this.state.FirstName) || Name(this.state.FirstName)) {
            // alert("Please Enter Valid Name with no wide spaces & Numbers.")
            Toast.show({
                text: 'Please Enter Valid First Name with no wide spaces & Numbers.',
                duration: 2000,
                type: "warning"
            })
            return false
        }
        if (EmptyField(this.state.LastName) || Name(this.state.LastName)) {
            Toast.show({
                text: 'Please Enter Valid Last Name with no wide spaces & Numbers.',
                duration: 2000,
                type: "warning"
            })
            return false
        }
        if (EmptyField(this.state.Email) || Email(this.state.Email)) {
            Toast.show({
                text: 'Please Enter Valid Email.',
                duration: 2000,
                type: "warning"
            })
            return false
        }
        if (EmptyField(this.state.Password) || Password(this.state.Password) || this.state.Password.length < 8) {
            // alert("Enter alphanumeric password having atleast 8 characters.")
            Toast.show({
                text: 'Enter alphanumeric password having atleast 8 characters.',
                duration: 2000,
                type: "warning"
            })
            return false
        }
        if (EmptyField(this.state.ConfirmPassword)) {
            Toast.show({
                text: 'Confirm Password.',
                duration: 2000,
                type: "warning"
            })
            return false
        }
        if (this.state.ConfirmPassword != this.state.Password) {
            Toast.show({
                text: 'Please enter password exactly same as above password.',
                duration: 2000,
                type: "warning"
            })
            return false
        }
        if (EmptyField(this.state.PhoneNumber) || PhoneNumber(this.state.PhoneNumber)) {
            Toast.show({
                text: 'Please enter 10 digit phone no with country code(eg.+91).',
                duration: 2000,
                type: "warning"
            })
            return false
        }
        else
            this.register()
    }
    register() {
        this.props.navigation.replace("Login")
    }
    render() {
        return (
            <View style={styles.Container}>
                {/* <View> */}
                <Header title='Registration' leftIcon={true} goBack={() => this.props.navigation.goBack()} />
                {/* </View> */}
                <ScrollView >
                    <View style={styles.TextInputView}>
                        <Icon name="user" size={25} style={styles.icon} />
                        <TextInput onChangeText={(text) => this.setState({ FirstName: text })} style={styles.textinput} placeholder="First Name" placeholderTextColor="#456038" ></TextInput>
                    </View>
                    <View style={styles.TextInputView}>
                        <Icon name="user" size={25} style={styles.icon} />
                        <TextInput onChangeText={(text) => this.setState({ LastName: text })} style={styles.textinput} placeholder="Last Name" placeholderTextColor="#456038" ></TextInput>
                    </View>
                    <View style={styles.TextInputView}>
                        <Icon name="envelope" size={23} style={styles.icon} />
                        <TextInput onChangeText={(text) => this.setState({ Email: text })} style={styles.textinput} placeholder="Email" placeholderTextColor="#456038" ></TextInput>
                    </View>
                    <View style={styles.TextInputView}>
                        <Icon name="unlock" size={25} style={styles.icon} />
                        <TextInput onChangeText={(text) => this.setState({ Password: text })} style={styles.textinput} placeholder="Password" placeholderTextColor="#456038" ></TextInput>
                    </View>
                    <View style={styles.TextInputView}>
                        <Icon name="lock" size={25} style={styles.icon} />
                        <TextInput onChangeText={(text) => this.setState({ ConfirmPassword: text })} style={styles.textinput} placeholder="Confirm Password" placeholderTextColor="#456038" ></TextInput>
                    </View>
                    <View style={styles.TextInputView}>
                        <Icon name="phone" size={25} style={styles.icon} />
                        <TextInput onChangeText={(text) => this.setState({ PhoneNumber: text })} style={styles.textinput} placeholder="Phone Number" placeholderTextColor="#456038" ></TextInput>
                    </View>
                    <TouchableOpacity onPress={() => this.validate()} style={styles.loginbutton}>
                        <Text style={styles.buttontext}>SUBMIT</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        );
    }
}
