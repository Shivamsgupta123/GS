import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './Styles';
import { AsyncStorage } from 'react-native';

export default class Drawer extends Component {
    constructor(props) {
        super(props);
    }
    closeScreen = (screen, params = {}) => {
        setTimeout(() => {
            this.props.navigation.navigate(screen, params)
        }, 600)
        this.props.navigation.closeDrawer()
    }
    render() {
        return (
            <View style={styles.mainview}>
                <View style={styles.ProfileView}>
                    <Image source={require('../../assets/images/user.png')} style={styles.ProfileImage} />
                    <Text style={styles.UserName}>XYZ LMN</Text>
                    <Text style={styles.UserEmail}>xyz@gmail.com</Text>
                </View>
                <View style={styles.SubView}>
                    <TouchableOpacity onPress={() => this.closeScreen('EmployeeList')}>
                        <View style={styles.ButtonView}>
                            <View style={styles.IconView}>
                                <Icon name="user" size={23} color="green" />
                            </View>
                            <Text style={styles.ButtonText}>Employee List</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={styles.ButtonView}>
                            <View style={styles.IconView}>
                                <Icon name="product-hunt" size={23} color="green" />
                            </View>
                            <Text style={styles.ButtonText}>Product Details</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.closeScreen("AttendanceSheet")}>
                        <View style={styles.ButtonView}>
                            <View style={styles.IconView}>
                                <Icon name="file" size={22} color="green" />
                            </View>
                            <Text style={styles.ButtonText}>Attendance Sheet</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={styles.ButtonView}>
                            <View style={styles.IconView}>
                                <Icon name="sign-out" size={23} color="green" />
                            </View>
                            <Text style={styles.ButtonText}>Log Out</Text>
                        </View>
                    </TouchableOpacity>

                </View>
            </View>
        );
    }
}