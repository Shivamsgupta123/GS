import React, { Component } from "react";
import {
  Text,
  View,  
  TouchableOpacity,  Modal
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import styles from "./Styles";
import Card from "./card";
// import AnimateLoadingButton from 'react-native-animate-loading-button';
import moment from "moment";
import DatePicker from "react-native-scrollable-datetime-picker"

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
     
    };
  }
  openCard = () => {
    this.setState({ VisibleCard: true });
    // console.log("video");
  };

  closeCard = () => {
    this.setState({ VisibleCard: false });
  };

  onPressReset(){
    alert("Reset clicked");
  }
  
  onPressDone(startMillies,endMillies){
    let result = "";
    if(startMillies){
      result += new Date(startMillies);
    }
    if(endMillies){
      result += ("\n to  \n" + new Date(endMillies));
    }
    alert(moment(result).format("D") +" "+ moment(result).format("M") +" "+moment(result).format("Y")+ " "+moment(result).format("hh:mm a"));
    // alert(moment(result).format("hh:mm a"))
    // alert(result)
  }
  
  onPressCancel(){
    this.setState({DateModal:false})
    alert("Cancel clicked");
  }
 
  
  // Animated loading button
  // _onPressHandler() {
  //   this.loadingButton.showLoading(true);
 
    
  //       setTimeout(() => {
  //     this.loadingButton.showLoading(false);
  //   }, 2000);
  // }



//add or delete data from array
// this.state.ArrayData:null
// this.count=0
//   Add(){
//     if(this.state.ArrayData== null)
//         console.log("Enter data for Add")
//     else{
//         console.log("Add", this.state.ArrayData)
//         this.list.push(this.state.ArrayData)
//         this.count=this.count+1
//         console.log("list",this.list+ " "+this.count)
//     }       
// }

// Del(){
//     if(this.state.ArrayData== null)
//     console.log("Enter data for Del")
//     else{            
//         var index = this.list.indexOf(this.state.ArrayData)
//         if (index > -1) {
//             this.count=this.count-1
//             this.list.splice(index, 1);
//             console.log("list",this.list+ " "+this.count)
//           }
//           else{
//               console.log("no record found")
//           }
//                 }    
// }




  
  render() {      
    return (
      <View style={styles.container}>     
      {/* <DatePicker
        isSingleDateSelection = {true} //For date range selection,make it false
        onPressReset ={()=>this.onPressReset()}
        onPressDone ={(startMillies,endMillies)=>this.onPressDone(startMillies,endMillies)}
        onPressCancel ={()=>this.onPressCancel()}
        startDate= {new Date()}
        untilDate= '20181215'
        selectedBackgroundColor = "red"
        hideTimePicker = {true} 
      /> */}
     

      {/* card */}
        {/* <TouchableOpacity onPress={this.openCard}>
          <View style={styles.buttonWrapper}>
            <Text style={styles.buttonText}>Open Contact</Text>
          </View>
        </TouchableOpacity>
        <Card visible={this.state.VisibleCard} onclose={this.closeCard} />            */}
        

        {/* Animated loading button */}
        {/* <AnimateLoadingButton
          ref={c => (this.loadingButton = c)}
          width={300}
          height={50}
          title="Add Contact"
          titleFontSize={25}
          titleColor="rgb(255,255,255)"
          backgroundColor="red"
          borderRadius={4}
          onPress={this._onPressHandler.bind(this)}
        /> */}

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


