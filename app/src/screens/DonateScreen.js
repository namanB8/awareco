import React from 'react';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';
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
    const { checked } = this.state.checked;

      return (
         <View style = {styles.container}>
           <Image
          style={{width: 30, height: 30, backgroundColor: "yellow", position: "absolute", top: 0, right: 40}}
          source={require('C:/Users/My-Pc/git/awareco/app/src/images/coins.png')}
        />
        <Text
        style={{position: "absolute", right: 10, top:0}}
        >1200</Text>

<Text>Amount you want to donate: </Text>
           <TextInput
      style={{ height: 40, width:100, borderColor: 'gray', borderWidth: 1, marginBottom:40 }}
      onChangeText={text => onChangeText(text)}
      value={this.state.value}
    />

<Text>Mode of payment: </Text>   
<RadioButton
          value="first"
          status={checked === 'first' ? 'checked' : 'unchecked'}
          onPress={() => { this.setState({ 
            ...this.state,
            checked: 'first' }); }}
        />
        <RadioButton
          value="second"
          status={checked === 'second' ? 'checked' : 'unchecked'}
          onPress={() => { this.setState({ 
            ...this.state,
            checked: 'second' }); }}
        />
{/* <DataTable style={{marginBottom: 100}}>
        <DataTable.Row>
          <DataTable.Cell>
          <RadioButton
          value="first"
          status={checked === 'first' ? 'checked' : 'unchecked'}
          onPress={() => { this.setState({ checked: 'first' }); }}
        />
          </DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
          <DataTable.Cell>
          <RadioButton
          value="second"
          status={checked === 'second' ? 'checked' : 'unchecked'}
          onPress={() => { this.setState({ checked: 'second' }); }}
        />
          </DataTable.Cell>
        </DataTable.Row>
      </DataTable>  */}
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