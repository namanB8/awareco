import React from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";
import { Card } from 'react-native-elements'
import { black, green, yellow } from "color-name";

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
          source={require('C:/Users/My-Pc/git/awareco/app/src/images/donate2.png')}
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
        <Button title="Activities" 
        style={{width: 400, marginBottom: 10}}
        onPress={() => {}}/>
        <Button title="Donate" 
        style={{width: 400, marginBottom: 10}}
        onPress={() => {}}/>
        <Button title="Volunteer" 
        style={{width: 400}}
        onPress={() => {}}/>
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
  }
});
