import React, { Component } from 'react';
import { View, Text, ImageBackground, Alert, Image, BackHandler, KeyboardAvoidingView, ScrollView, TextInput, TouchableOpacity, ActivityIndicator, Animated, Easing } from 'react-native';
import styles from './Styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import Header from '../../Header/Header';
import { Container, Content, Tab, Tabs } from 'native-base';
import { SwipeListView } from 'react-native-swipe-list-view';
import RadioGroup from 'react-native-radio-buttons-group';
import moment from 'moment';
import { translate } from '../../../Translation/Translation';
import { connect } from "react-redux";

class MarkAttendance extends Component {
    constructor(props) {
        super(props)
        console.log(props)
        this.EmployeeData = [{ Name: "xyz Lmn", UserImage: require("../../../assets/images/user.png") }, { Name: "abc pqr", UserImage: require("../../../assets/images/user.png") }]
        this.state = {
            data: [
                {
                    label: translate("AttendanceSheet.MarkAttendance.Full Day"),
                    value: 'Full Day',
                    color: "#456038",
                    size: 20
                },
                {
                    label: translate("AttendanceSheet.MarkAttendance.Half Day"),
                    value: 'Half Day',
                    color: "#456038",
                    size: 20
                },
            ],
            Ischecked: this.props.Ischecked,
            RadioSelected: 'Full Day',

        };
        this.date = new Date()
        this.date = moment(this.date).format('DD-MM-YYYY')
    }
    onPress = data => {
        this.setState({ data })
        console.log("data", data)
    }
    render() {
        let selectedButton = this.state.data.find(e => e.selected == true);
        selectedButton = selectedButton ? selectedButton.value : this.state.data[0].label;
        // this.setState({ RadioSelected: selectedButton })
        // console.log("selectedButton", selectedButton)
        return (
            <SwipeListView
                useFlatList
                data={this.EmployeeData}
                disableRightSwipe={true}
                renderItem={({ item, index }) => (
                    <View style={{ flex: 1, marginTop: 5 }}>
                        <View style={styles.UserDetailView}>
                            <View style={styles.UserImageView}>
                                <Image style={styles.UserImage} source={item.UserImage} />
                            </View>
                            <View style={styles.UserDetail}>
                                <Text style={styles.text}>Name: {item.Name}</Text>
                            </View>
                        </View>
                    </View>
                )}
                renderHiddenItem={(item, index) => (
                    <View>
                        <View style={{ height: "50%", marginLeft: "60%", marginTop: 5 }}>
                            <Text style={{ marginLeft: "20%" }}>Date: {this.date} </Text>
                            <RadioGroup radioButtons={this.state.data} onPress={this.onPress} />
                        </View>
                        <View style={{ flexDirection: 'row', marginLeft: "69%" }}>

                            <TouchableOpacity style={styles.container} onPress={() => { this.setState({ Ischecked: !this.state.Ischecked }) }} >
                                {console.log(this.state.Ischecked)}
                                <View style={styles.checkboxView}>
                                    <View style={[styles.square, this.state.Ischecked ? { backgroundColor: '#456038', } : { backgroundColor: 'white' },]} ></View>
                                </View>
                                <View>
                                    <Text style={styles.checkboxlable}>{this.props.label}</Text>
                                </View>
                            </TouchableOpacity>
                            <Text style={styles.checkboxClick}>{translate("AttendanceSheet.MarkAttendance.Over Time")}</Text>
                        </View>
                    </View>
                )}
                // leftOpenValue={75}
                rightOpenValue={-130}
                keyExtractor={(item, index) => '' + index}
            />
        );
    }
}
const mapStateToProps = (state) => {
    return {
        ...state
    }
}
export default connect(mapStateToProps)(MarkAttendance)