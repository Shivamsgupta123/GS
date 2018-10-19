import React, { Component } from 'react';
import { View, Text, ImageBackground, Alert, BackHandler, KeyboardAvoidingView, ScrollView, TextInput, TouchableOpacity, ActivityIndicator, Animated, Easing } from 'react-native';
import styles from './Styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import Header from '../../Header/Header';
import { Container, Content, Tab, Tabs } from 'native-base';
import ViewAttendance from '../ViewAttendance/ViewAttendance';
import MarkAttendance from '../MarkAttendance/MarkAttendance';

export default class AttendanceSheet extends Component {
    constructor(props) {
        super(props)
        console.log(props)
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <Header title='Attendance Sheet' leftIcon={true} action={() => this.props.navigation.goBack()} />
                <Tabs locked={true}>
                    <Tab
                        activeTabStyle={styles.ActiveTabStyle}
                        tabStyle={styles.TabStyle}
                        textStyle={styles.TabTextStyle}
                        heading="View Attendance" >
                        <ViewAttendance />
                    </Tab>
                    <Tab
                        activeTabStyle={styles.ActiveTabStyle}
                        tabStyle={styles.TabStyle}
                        textStyle={styles.TabTextStyle}
                        heading="Mark Attendance">
                        <MarkAttendance />
                    </Tab>
                </Tabs>
            </View>
        );
    }
}

{/* <View style={styles.Container}>
<Header title='Attendance Sheet' leftIcon={true} action={() => this.props.navigation.goBack()} />
<View style={styles.ButtonView}>
    <View>
        <TouchableOpacity style={styles.touch}>
            <Text style={styles.ButtonText}>View Attendance</Text>
        </TouchableOpacity>
    </View>
    <View style={{ paddingTop: 10 }}>
        <TouchableOpacity style={styles.touch}>
            <Text style={styles.ButtonText}>Mark Attendance</Text>
        </TouchableOpacity>
    </View>
</View>
</View> */}