import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'
import { Link } from "react-router-native";
// import history from "../../utilities/history";

class Inputs extends Component {
 

   state = {
      userName: '',
      password: ''
   }
   handleUserName = (text) => {
      this.setState({ userName: text })
   }
   handlePassword = (text) => {
      this.setState({ password: text })
   }
   login = (userName, pass) => {
      // alert('userName: ' + userName + ' password: ' + pass)
      // fetch("https://jsonplaceholder.typicode.com/users")
      // .then(response => response.json())
      // .then((responseJson)=> {
      //   history.push("/dashboard")
// })
// .catch(error=>console.log(error))
   }
   render() {
      return (
         <View style = {styles.container}>
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "UserName"
               placeholderTextColor = "#aef359"
               autoCapitalize = "none"
               onChangeText = {this.handleUserName}/>
            
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Password"
               placeholderTextColor = "#aef359"
               autoCapitalize = "none"
               onChangeText = {this.handlePassword}/>
            
            
            <TouchableOpacity
               style = {styles.submitButton}
               // disabled={this.state.userName === "" || this.state.password === ""}
               // onPress = {
               //    () => this.login(this.state.userName, this.state.password)
               // }
               >
                  <Link to="/dashboard">
               <Text style = {styles.submitButtonText}> Login </Text>
               </Link>
            </TouchableOpacity>
            
         </View>
      )
   }
}
export default Inputs

const styles = StyleSheet.create({
   container: {
      paddingTop: 23
   },
   input: {
      margin: 15,
      height: 40,
      width: 300,
      borderColor: '#74b72e',
      borderWidth: 1,
      paddingLeft: 5
   },
   submitButton: {
      backgroundColor: '#aef359',
      padding: 10,
      margin: 15,
      height: 40,
      alignContent: "center"
   },
   submitButtonText:{
      color: '#74b72e'
   }
})