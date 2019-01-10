import React, { Component } from "react";
import {
  Text,
  View,  
  TouchableOpacity,  
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import styles from "./Styles";
import Card from "./card";
// import { translate } from "../../Translation/Translation";
// import i18n from "i18n-js";
// import { connect } from "react-redux";


export default class Videos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      VisibleCard: false,
      HideCard: false,
      refreshing: false,
      interactionsComplete: false
    };
  }
  openCard = () => {
    this.setState({ VisibleCard: true });
    // console.log("video");
  };

  closeCard = () => {
    this.setState({ VisibleCard: false });
  };

  _onRefresh = () => {
    this.setState({refreshing: true});    
  }    
  render() {      
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.openCard}>
          <View style={styles.buttonWrapper}>
            <Text style={styles.buttonText}>Open Contact</Text>
          </View>
        </TouchableOpacity>
        <Card visible={this.state.VisibleCard} onclose={this.closeCard} />
       </View>
     
    );
  }
}

// import React, { Component } from "react";
// import {
//   AppRegistry, StyleSheet,
//   Text,
//   View,
//   Animated,
//   Image,
//   Easing
// } from 'react-native'

// export default class Videos extends Component {
// constructor () {
//   super()
//   this.state={
//     BColor:000000
//   }
//   this.spinValue = new Animated.Value(0)
// }
// componentDidMount () {
//   this.spin()
// }
// spin () {
//   this.spinValue.setValue(0)
//   Animated.timing(
//     this.spinValue,
//     {
//       toValue: 1,
//       duration: 4000,
//       easing: Easing.linear
//     }
//   ).start(() => this.spin())
// }
// render () {
//   const spin = this.spinValue.interpolate({
//     inputRange: [0, 1],
//     outputRange: ['0deg', '360deg']
//   })
//   return (
//     <View style={{ flex: 1,justifyContent: 'center',alignItems: 'center',backgroundColor:this.state.BColor}}>
//       <Animated.Image
//         style={{
//           width: 200,
//           height: 200,
//           borderRadius:100,
//           transform: [{rotate: spin}] }}
//           source={require("../../../assets/images/ls.jpg")}
//       />
//     </View>
//   )
// }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center'
//   }
// })


