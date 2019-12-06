import React from 'react';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';
import { DataTable, RadioButton  } from 'react-native-paper';

export default class CongratulationsScreen extends React.Component {


   render() {

      return (
         <View style = {styles.container}>
           <Image
          style={{width: 30, height: 30, backgroundColor: "yellow", position: "absolute", top: 20, right: 10}}
          source={require('C:/Users/My-Pc/git/awareco/app/src/images/coins.png')}
        />
        <Text
        style={{position: "absolute", right: -20, top: 20}}
        >1250</Text>

<Image
          style={{width: 90, height: 90, backgroundColor: "yellow"}}
          source={require('C:/Users/My-Pc/git/awareco/app/src/images/ballons.png')}
        />
<Text>Congratulations, you have made the payment.</Text>
           
<Image
          style={{width: 50, height: 50, backgroundColor: "yellow", marginTop: 50}}
          source={require('C:/Users/My-Pc/git/awareco/app/src/images/coins.png')}
        />
        <Text
        style={{color: "orange", fontSize: 50}}
        >
          +50
        </Text>

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