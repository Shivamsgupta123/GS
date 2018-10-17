import React, { Component } from 'react';
import { View, Text, ImageBackground, Alert, BackHandler, KeyboardAvoidingView, ScrollView, TextInput, TouchableOpacity, ActivityIndicator, Animated, Easing } from 'react-native';
import styles from './Styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Toast } from 'native-base'
import { EmptyField, Email, Password, Name, PhoneNumber } from '../../../lib/Validation';
import Header from '../../Header/Header';

export default class EmployeeList extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <View style={styles.Container}>
                <Header title='Employee List' leftIcon={true} action={() => this.props.navigation.goBack()} />
                <View style={{ flex: 1 }}>
                </View>
                <TouchableOpacity style={styles.loginbutton} onPress={() => this.props.navigation.navigate("AddEmployee")}>
                    <Text style={styles.buttontext}>ADD EMPLOYEE</Text>
                </TouchableOpacity>

            </View>
        )
    }
}