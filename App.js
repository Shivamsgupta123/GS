import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation';
import Login from './app/components/screen/Login/Login';
import Home from './app/components/screen/Home/Home';
import ForgotPassword from './app/components/screen/ForgotPassword/ForgotPassword';
import { Root } from 'native-base';
import Registration from './app/components/screen/Registration/Registraion';


const RootStack = createStackNavigator({
    Login: {
        screen: Login,
        navigationOptions: {
            header: null,
        }
    },
    Home: {
        screen: Home,
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
    }
})
export default class App extends Component {
    render() {
        return (
            <Root>
                <RootStack />
            </Root>
        );
    }
}

