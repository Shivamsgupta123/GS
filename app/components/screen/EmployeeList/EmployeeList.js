import React, { Component } from 'react';
import { View, Text, ImageBackground, Alert, FlatList, BackHandler, Image, KeyboardAvoidingView, ScrollView, TextInput, TouchableOpacity, ActivityIndicator, Animated, Easing } from 'react-native';
import styles from './Styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Toast } from 'native-base'
import { EmptyField, Email, Password, Name, PhoneNumber } from '../../../lib/Validation';
import Header from '../../Header/Header';
import { SwipeListView } from 'react-native-swipe-list-view';
export default class EmployeeList extends Component {
    constructor(props) {
        super(props)
        this.EmployeeData = [{ Name: "xyz lmn", UserImage: require("../../../assets/images/user.png"), Contact: "9874563210", Salary: "25000/-", DOJ: "25/12/18" }, { Name: "abc pqr", UserImage: require("../../../assets/images/user.png"), Contact: "9987425879", Salary: "20000/-", DOJ: "25/12/15" }]
    }
    componentDidMount() {
        Toast.show({
            text: "Swipe Left to Delete The Record.",
            duration: 3000,
            type: "danger"
        })
    }
    render() {
        return (
            <View style={styles.Container}>
                <Header title='Employee List' leftIcon={true} action={() => this.props.navigation.goBack()} />
                <SwipeListView
                    useFlatList
                    data={this.EmployeeData}
                    disableRightSwipe={true}
                    renderItem={({ item, index }) => (
                        <View style={{ flex: 1, marginTop: 5, }}>
                            <View style={styles.UserDetailView}>
                                <View style={styles.UserImageView}>
                                    <Image style={styles.UserImage} source={item.UserImage} />
                                </View>
                                <View style={styles.UserDetail}>
                                    <Text style={styles.text}>Name: {item.Name}</Text>
                                    <Text style={styles.text1}>Contact No: {item.Contact}</Text>
                                    <Text style={styles.text1}>Salary: {item.Salary}</Text>
                                    <Text style={styles.text1}>Date Of Joining: {item.DOJ}</Text>
                                </View>
                            </View>
                        </View>
                    )}
                    renderHiddenItem={(item, index) => (
                        <View style={styles.DeleteButtonView}>
                            <TouchableOpacity style={styles.DeleteButton}>
                                <Icon name="trash" size={30} color="white" />
                            </TouchableOpacity>
                        </View>
                    )}
                    // leftOpenValue={75}
                    rightOpenValue={-110}
                    keyExtractor={(item, index) => '' + index}
                />
                <TouchableOpacity style={styles.loginbutton} onPress={() => this.props.navigation.navigate("AddEmployee")}>
                    <Text style={styles.buttontext}>ADD EMPLOYEE</Text>
                </TouchableOpacity>

            </View>
        )
    }
}
