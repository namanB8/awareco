import React from "react";
import { View, Text, StyleSheet, Button, Image, Linking, TouchableOpacity  } from "react-native";
import { black, green } from "color-name";
// import history from "../utilities/history";
import { Link } from "react-router-native";

export default class DashboardScreen extends React.Component {
  static navigationOptions =
  {
     title: 'DashboardScreen',
  };
  
  render() {
    var users = [
      {
         name: 'Donation',
         amount: 200,
         avatar: "../images/donate2"
      },
      {
        name: "Events",
        amount: 100,
        avatar: "../images/donate1"
      }
    ];
    return (
      <View style={styles.container}>
        <Image
          style={{width: 30, height: 30, backgroundColor: "yellow", marginLeft: 230}}
          source={require('C:/Users/My-Pc/git/awareco/app/src/images/coins.png')}
        />
        <Text
        style={{position: "absolute", right: 10, top:0}}
        >1200</Text>
        {/* logo */}

        
<View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
<View style={{width: 150, height: 150, border: 1, borderColor: black, backgroundColor: green}} >

<Image
          style={{width: 150, height: 150, backgroundColor: "red" }}
          source={require('C:/Users/My-Pc/git/awareco/app/src/images/donate2.png')}
        />
          <Text style={{marginBottom: 10, marginLeft: 50}}>
    {users[0].name}
  </Text>
  <Text style={{marginBottom: 10, marginLeft: 80}}>
    {users[0].amount}
  </Text>

</View>
<View style={{width: 150, height: 150, border: 1, borderColor: black, backgroundColor: green}}>
<Image
          style={{width: 150, height: 150, backgroundColor: "yellow"}}
          source={require('C:/Users/My-Pc/git/awareco/app/src/images/EVENTS.png')}
        />
          <Text style={{marginBottom: 10, marginLeft: 50}}>
    {users[1].name}
  </Text>
  <Text style={{marginBottom: 10, marginLeft: 80}}>
    {users[1].amount}
  </Text>
  
</View>
</View>
<View style={{paddingBottom: 10}}>
<TouchableOpacity
               style = {styles.submitButton}
               // disabled={this.state.userName === "" || this.state.password === ""}
               // onPress = {
               //    () => this.login(this.state.userName, this.state.password)
               // }
               >
                  <Link to="/activity">
               <Text style = {{width: 400, marginBottom: 10}}> Activity </Text>
               </Link>
            </TouchableOpacity>
            
            <TouchableOpacity
               style = {styles.submitButton}
               // disabled={this.state.userName === "" || this.state.password === ""}
               // onPress = {
               //    () => this.login(this.state.userName, this.state.password)
               // }
               >
                  <Link to="/donate">
               <Text style = {{width: 400, marginBottom: 10}}> Donate </Text>
               </Link>
            </TouchableOpacity>
            <TouchableOpacity
               style = {styles.submitButton}
               // disabled={this.state.userName === "" || this.state.password === ""}
               // onPress = {
               //    () => this.login(this.state.userName, this.state.password)
               // }
               >
                  <Link to="/volunteer">
               <Text style = {{width: 400, marginBottom: 10}}> Volunteer </Text>
               </Link>
            </TouchableOpacity>
{/* <Link to="/activity">
        <Button title="Activities" 
        style={{width: 400, marginBottom: 10}}
      //  onPress={() => {Linking.openURL("/activity")}}
        />
        </Link>
        <Link to="/donate">
        <Button title="Donate" 
        style={{width: 400, marginBottom: 10}}
       
        />
        </Link>
        <Link to="/volunteer">
        <Button title="Volunteer" 
        style={{width: 400}}
        />
        </Link> */}
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
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
});
