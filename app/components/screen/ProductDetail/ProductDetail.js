// ProductDetail
import React, { Component } from 'react';
import { View, Text, ImageBackground, Alert, FlatList, BackHandler, Dimensions, Image, KeyboardAvoidingView, ScrollView, TextInput, TouchableOpacity, ActivityIndicator, Animated, Easing } from 'react-native';
import styles from './Styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Toast } from 'native-base'
import { EmptyField, Email, Password, Name, PhoneNumber } from '../../../lib/Validation';
import { ListItem, CheckBox, Body } from 'native-base';
import Header from '../../Header/Header';
import { SwipeListView } from 'react-native-swipe-list-view';
import { connect } from "react-redux";

class ProductDetail extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <Header title='Product Details' leftIcon={true} action={() => this.props.navigation.goBack()} />

            </View>
        )
    }

}
const mapStateToProps = (state) => {
    return {
        ...state
    }
}
export default connect(mapStateToProps)(ProductDetail)

// FOR CHECKBOX

// constructor(props) {
//     super(props)
//     this.state = {
//         isChecked: false
//     }
// }
// checkBoxClicked() {
//     this.setState({ isChecked: !this.state.isChecked })
//     console.log("is checked", this.state.isChecked)
// }
// render() {
//     return (
//         <View style={styles.Container}>
//             <Header title='Product Detail' leftIcon={true} action={() => this.props.navigation.goBack()} />
//             <View style={{ flexDirection: "row", backgroundColor: "red", padding: 10 }}>
//                 <CheckBox checked={this.state.isChecked} onPress={() => this.checkBoxClicked()} color="green" />
//                 <Text style={{ paddingLeft: 20 }}>Daily Stand Up</Text>
//             </View>


//         </View>
//     );
// }