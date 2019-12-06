import React from 'react';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';

export default class SelectEvent extends React.Component {


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
        <Text
        style={{color: "green", fontSize: 20}}
        >
          Date: 6/12/2019
        </Text>
        <Text
        style={{color: "green", fontSize: 20}}
        >
          From: 10:00 A.M.        To: 12:00 P.M.
        </Text>
        <Button title="Will Go!" 
        style={{width: 400, marginBottom: 10}}
        onPress={() => {
          // history.push("/donate")
        }}/>
        <Button title="Naah!" 
        style={{width: 400, marginBottom: 10}}
        onPress={() => {
          // history.push("/donate")
        }}/>
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