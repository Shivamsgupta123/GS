import React, { Component } from 'react';
import { View, Text, ImageBackground, FlatList, Alert, Image, BackHandler, KeyboardAvoidingView, ScrollView, TextInput, TouchableOpacity, ActivityIndicator, Animated, Easing } from 'react-native';
import styles from './Styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import Header from '../../Header/Header';
import { Container, Content, Tab, Tabs } from 'native-base';

export default class ViewAttendance extends Component {
    constructor(props) {
        super(props)
        console.log(props)
        this.EmployeeData = [{ Name: "xyz lmn", NOWD: 30, NOHD: 3, TWD: 25.5, OT: 15, EmployeeImage: require("../../../assets/images/user.png") }, { Name: "pqr abc", NOWD: 28, NOHD: 5, TWD: 25, OT: 10, EmployeeImage: require("../../../assets/images/user.png") }]
    }
    render() {
        return (
            <View style={styles.Container}>
                <FlatList
                    data={this.EmployeeData}
                    renderItem={({ item }) => (
                        <View style={{ flex: 1, marginTop: 5 }}>
                            <View style={styles.UserDetailView}>
                                <View style={styles.UserImageView}>
                                    <Image style={styles.UserImage} source={item.EmployeeImage} />
                                </View>
                                <View style={styles.UserDetail}>
                                    <Text style={styles.text}>Name:{item.Name}</Text>
                                    <Text style={styles.text1}>Number Of Working Day: {item.NOWD}</Text>
                                    <Text style={styles.text1}>Number Of Half Day: {item.NOHD}</Text>
                                    <Text style={styles.text1}>Total Working Day: {item.TWD}</Text>
                                    <Text style={styles.text1}>Over Time: {item.OT}</Text>
                                </View>
                            </View>
                        </View>
                    )}
                    keyExtractor={(item, index) => '' + index}
                />
                {/* <View style={{ flex: 1 }}>
                    <View style={styles.UserDetailView}>
                        <View style={styles.UserImageView}>
                            <Image style={styles.UserImage} source={require('../../../assets/images/user.png')} />
                        </View>
                        <View style={styles.UserDetail}>
                            <Text style={styles.text}>Name: xyz lmn</Text>
                            <Text style={styles.text1}>Number Of Working Day: 30</Text>
                            <Text style={styles.text1}>Number Of Half Day: 3</Text>
                            <Text style={styles.text1}>Total Working Day: 25.5</Text>
                            <Text style={styles.text1}>Over Time: 15</Text>
                        </View>
                    </View>
                </View> */}
            </View>
        );
    }
}


