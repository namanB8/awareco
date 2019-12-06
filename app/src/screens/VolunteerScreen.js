import React from 'react';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';
import { DataTable, RadioButton  } from 'react-native-paper';

export default class VolunteerScreen extends React.Component {


   render() {

      return (
         <View style = {styles.container}>
           <Image
          style={{width: 30, height: 30, backgroundColor: "yellow", position: "absolute", top: 20, right: 10}}
          source={require('C:/Users/My-Pc/git/awareco/app/src/images/coins.png')}
        />
        <Text
        style={{position: "absolute", right: -20, top: 20}}
        >1200</Text>

<Image
          style={{width: 280, height: 50, backgroundColor: "yellow", marginBottom: 10}}
          source={require('C:/Users/My-Pc/git/awareco/app/src/images/cleanup.png')}
        />
        <Image
          style={{width: 280, height: 50, backgroundColor: "yellow", marginBottom: 10}}
          source={require('C:/Users/My-Pc/git/awareco/app/src/images/communityservice.png')}
        />
        <Image
          style={{width: 280, height: 50, backgroundColor: "yellow", marginBottom: 10}}
          source={require('C:/Users/My-Pc/git/awareco/app/src/images/culturalevent.png')}
        />
        <Image
          style={{width: 280, height: 50, backgroundColor: "yellow", marginBottom: 10}}
          source={require('C:/Users/My-Pc/git/awareco/app/src/images/standup.png')}
        />
        <Image
          style={{width: 280, height: 50, backgroundColor: "yellow", marginBottom: 10}}
          source={require('C:/Users/My-Pc/git/awareco/app/src/images/treeplantation.png')}
        />

{/* <Image
          style={{width: 280, height: 50, backgroundColor: "yellow"}}
          source={require('C:/Users/My-Pc/git/awareco/app/src/images/proceed.png')}
        /> */}

           


         </View>
      );
   }
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
   },
});