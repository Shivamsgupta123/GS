import React, { Component } from 'react';
import { View, Text, ImageBackground, Alert, BackHandler, KeyboardAvoidingView, ScrollView, TextInput, TouchableOpacity, ActivityIndicator, Animated, Easing } from 'react-native';
import styles from './Styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import Header from '../../Header/Header';
import { Container, Content, Tab, Tabs } from 'native-base';

export default class ViewAttendance extends Component {
    constructor(props) {
        super(props)
        console.log(props)
    }
    render() {
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <Text>View Attendance</Text>
            </View>
        );
    }
}