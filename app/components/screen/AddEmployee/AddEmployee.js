import React, { Component } from 'react';
import { View, Text, ImageBackground, Alert, BackHandler, KeyboardAvoidingView, ScrollView, TextInput, Image, TouchableOpacity, ActivityIndicator, Animated, Easing } from 'react-native';
import styles from './Styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Toast } from 'native-base'
import { EmptyField, Email, Password, Name, PhoneNumber } from '../../../lib/Validation';
import Header from '../../Header/Header';
import ImagePicker from 'react-native-image-picker';
import { translate } from '../../../Translation/Translation';
import { connect } from "react-redux";

class AddEmployee extends Component {
    constructor(props) {
        super(props)
        this.state = {
            FirstName: '',
            LastName: '',
            PhoneNumber: '',
            Salary: '',
            avatarSource: null,
        }
    }
    takeimage() {
        var options = {
            title: 'Select Image',
            storageOptions: {
                skipBackup: true,
                path: 'images'
            }
        };
        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled image picker');
            }
            else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            }
            else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            }
            else {
                let source = { uri: 'data:image/jpeg;base64,' + response.data };
                this.setState({
                    avatarSource: source
                });

            }
        });
    }
    validate() {
        if (EmptyField(this.state.FirstName) || Name(this.state.FirstName)) {
            Toast.show({
                text: 'Please Enter Valid First Name with no wide spaces & Numbers.',
                duration: 2000,
                type: "warning"
            })
            return false
        }
        if (EmptyField(this.state.LastName) || Name(this.state.LastName)) {
            Toast.show({
                text: 'Please Enter Valid Last Name with no wide spaces & Numbers.',
                duration: 2000,
                type: "warning"
            })
            return false
        }

        if (EmptyField(this.state.PhoneNumber) || PhoneNumber(this.state.PhoneNumber)) {
            Toast.show({
                text: 'Please enter 10 digit phone no with country code(eg.+91).',
                duration: 2000,
                type: "warning"
            })
            return false
        }
        if (EmptyField(this.state.Salary)) {
            Toast.show({
                text: 'Please Enter Salary.',
                duration: 2000,
                type: "warning"
            })
            return false
        }
        else
            this.props.navigation.goBack()
        // this.props.navigation.replace("EmployeeList")
    }

    render() {
        return (
            <View style={styles.Container}>
                <Header title={translate("AddEmployee.ADD EMPLOYEE")} leftIcon={true} action={() => this.props.navigation.goBack()} />
                <ScrollView>
                    <TouchableOpacity style={{ marginLeft: "24%", marginTop: "3%" }} onPress={() => this.takeimage()} >
                        {this.state.avatarSource === null ? <Image style={styles.profileimage} source={require('../../../assets/images/user.png')} /> :
                            <Image style={styles.profileimage} source={this.state.avatarSource} />}
                    </TouchableOpacity>
                    <View style={styles.view3}>
                        <Icon name="user" size={25} style={styles.icon} />
                        <TextInput onChangeText={(text) => this.setState({ FirstName: text })} style={styles.textinput} placeholder={translate("AddEmployee.First Name")} placeholderTextColor="white" ></TextInput>
                    </View>
                    <View style={styles.view3}>
                        <Icon name="user" size={25} style={styles.icon} />
                        <TextInput onChangeText={(text) => this.setState({ LastName: text })} style={styles.textinput} placeholder={translate("AddEmployee.Last Name")} placeholderTextColor="white" ></TextInput>
                    </View>
                    <View style={styles.view3}>
                        <Icon name="phone" size={25} style={styles.icon} />
                        <TextInput onChangeText={(text) => this.setState({ PhoneNumber: text })} style={styles.textinput} placeholder={translate("AddEmployee.Phone Number")} placeholderTextColor="white" keyboardType="phone-pad"></TextInput>
                    </View>
                    <View style={styles.view3}>
                        <Icon name="dollar" size={25} style={styles.icon} />
                        <TextInput onChangeText={(text) => this.setState({ Salary: text })} style={styles.textinput} placeholder={translate("AddEmployee.Salary")} placeholderTextColor="white" keyboardType="phone-pad" ></TextInput>
                    </View>
                    <View style={styles.view3}>
                        <Icon name="dollar" size={25} style={styles.icon} />
                        <TextInput onChangeText={(text) => this.setState({ Salary: text })} style={styles.textinput} placeholder={translate("AddEmployee.Date Of Joining")} placeholderTextColor="white" keyboardType="phone-pad" ></TextInput>
                    </View>
                    <TouchableOpacity style={styles.loginbutton} onPress={() => this.validate()}>
                        <Text style={styles.buttontext}>{translate("AddEmployee.SUBMIT")}</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        ...state
    }
}
export default connect(mapStateToProps)(AddEmployee)