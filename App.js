import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation';
import Login from './app/components/screen/Login/Login';
import Home from './app/components/screen/Home/Home';
import ForgotPassword from './app/components/screen/ForgotPassword/ForgotPassword';
import { Root } from 'native-base';
import Registration from './app/components/screen/Registration/Registraion';
import EmployeeList from './app/components/screen/EmployeeList/EmployeeList';
import AddEmployee from './app/components/screen/AddEmployee/AddEmployee';
import Drawer from './app/components/Drawer/Drawer';
import AttendanceSheet from './app/components/screen/AttendanceSheet/AttendanceSheet';

const MyApp = createDrawerNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            header: null,
        }
    }
},
    {
        contentComponent: Drawer

    }
);
const RootStack = createStackNavigator({
    Login: {
        screen: Login,
        navigationOptions: {
            header: null,
        }
    },
    MyApp: {
        screen: MyApp,
        navigationOptions: {
            header: null,
        }
    },
    ForgotPassword: {
        screen: ForgotPassword,
        navigationOptions: {
            header: null,
        }
    },
    Registration: {
        screen: Registration,
        navigationOptions: {
            header: null,
        }
    },
    EmployeeList: {
        screen: EmployeeList,
        navigationOptions: {
            header: null,
        }
    },
    AddEmployee: {
        screen: AddEmployee,
        navigationOptions: {
            header: null,
        }
    },
    AttendanceSheet: {
        screen: AttendanceSheet,
        navigationOptions: {
            header: null,
        }
    },
},
    // {

    //     initialRouteName: 'StartUp',
    // }
)
export default class App extends Component {
    render() {
        return (
            <Root>
                <RootStack />
            </Root>
        );
    }
}

