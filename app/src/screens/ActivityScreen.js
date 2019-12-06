import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { ListItem } from 'react-native-elements'

export default class ActivityScreen extends React.Component {
   
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
    const list = [
      {
        name: 'CO2 Saved',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        subtitle: 'Coins credited 50'
      },
      {
        name: 'CO2 Consumed',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        subtitle: 'Coins debited 100'
      },
    ];
    const { checked } = this.state.checked;

      return (
         <View style = {styles.container}>
           <Image
          style={{width: 30, height: 30, backgroundColor: "yellow", position: "absolute", top: 20, right: -90}}
          source={require('C:/Users/My-Pc/git/awareco/app/src/images/coins.png')}
        />
        <Text
        style={{position: "absolute", right: -120, top: 20}}
        >1200</Text>

<Text>Events:</Text>
  {
    list.map((l, i) => (
      <ListItem
      style={{width: 250, height: 50, marginBottom: 10}}
        key={i}
        leftAvatar={{ source: { uri: l.avatar_url } }}
        title={l.name}
        subtitle={l.subtitle}
        bottomDivider
        onPress={() => {

        }}
      />
    ))
  }

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