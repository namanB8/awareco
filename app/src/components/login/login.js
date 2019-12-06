import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Inputs from './input';

export default class Login extends React.Component {
   render() {
      return (
         <View style = {styles.container}>
           <Image></Image>
            <Inputs />
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