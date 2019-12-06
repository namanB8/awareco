import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button } from 'react-native';
import { DataTable, RadioButton  } from 'react-native-paper';

export default class DonateScreen extends React.Component {
   static navigationOptions =
   {
      title: 'DonateScreen',
   };
   
   state = {
    checked: 'first',
    value: "40"
 }

 onChangeText = (text) => {
  this.setState({
    ...this.state,
    value: text
  });
 }

   render() {

      return (
         <View style = {styles.container}>
           <Image
          style={{width: 30, height: 30, backgroundColor: "yellow", position: "absolute", top: 20, right: -40}}
          source={require('C:/Users/My-Pc/git/awareco/app/src/images/coins.png')}
        />
        <Text
        style={{position: "absolute", right: -80, top: 20}}
        >1200</Text>

<Image
          style={{width: 90, height: 90, backgroundColor: "yellow"}}
          source={require('C:/Users/My-Pc/git/awareco/app/src/images/donate2.png')}
        />
<Text>Amount you want to donate: </Text>
           <TextInput
      style={{ height: 40, width:100, borderColor: 'gray', borderWidth: 1, marginBottom:40 }}
      onChangeText={text => onChangeText(text)}
      value={this.state.value}
    />

<Text>Mode of payment: </Text>   
<RadioButton
          value="first"
          status={this.state.checked === 'first' ? 'checked' : 'unchecked'}
          onPress={() => { this.setState({ 
            ...this.state,
            checked: 'first' }); }}
        />
        <Text

        style={{marginLeft: 10}}
        >Debit Card </Text>
        <RadioButton
          value="second"
          status={this.state.checked === 'second' ? 'checked' : 'unchecked'}
          onPress={() => { this.setState({ 
            ...this.state,
            checked: 'second' }); }}
        />
        <Text>Credit Card </Text>

        <Button title="Pay" 
        style={{width: 400, marginBottom: 10}}
        onPress={() => {
          history.push("/congratulations")
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