import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './Styles';
import { AsyncStorage } from 'react-native';

export default class Drawer extends Component {
    constructor(props) {
        super(props);
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
                    <TouchableOpacity>
                        <View style={styles.ButtonView}>
                            <Text style={styles.ButtonText}>Employee List</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={styles.ButtonView}>
                            <Text style={styles.ButtonText}>Product Details</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={styles.ButtonView}>
                            <Text style={styles.ButtonText}>Attendance Sheet</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={styles.ButtonView}>
                            <Text style={styles.ButtonText}>Log Out</Text>
                        </View>
                    </TouchableOpacity>

                </View>
            </View>
        );
    }
}