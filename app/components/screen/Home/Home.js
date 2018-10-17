import React, { Component } from 'react';
import { View, Text, ImageBackground, Alert, BackHandler, KeyboardAvoidingView, ScrollView, TextInput, TouchableOpacity, ActivityIndicator, Animated, Easing } from 'react-native';
import styles from './Styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import Header from '../../Header/Header';
export default class Home extends Component {
    constructor(props) {
        super(props)
        console.log(props)
    }
    render() {
        return (
            <View style={styles.Container}>
                <Header title='WELCOME' menuBar={true} action={() => this.props.navigation.openDrawer()} />
                <View style={styles.ButtonView}>
                    <View>
                        <TouchableOpacity style={styles.touch} onPress={() => this.props.navigation.navigate("EmployeeList")}>
                            <Text style={styles.ButtonText}>Employee List</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ paddingTop: 10 }}>
                        <TouchableOpacity style={styles.touch}>
                            <Text style={styles.ButtonText}>Product Details</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ paddingTop: 10 }}>
                        <TouchableOpacity style={styles.touch} onPress={() => this.props.navigation.navigate("AttendanceSheet")}>
                            <Text style={styles.ButtonText}>Attendance Sheet</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}