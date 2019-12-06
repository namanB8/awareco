import React from 'react';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';

export default class CoIncreased extends React.Component {


   render() {

      return (
         <View style = {styles.container}>
           <Image
          style={{width: 30, height: 30, backgroundColor: "yellow", position: "absolute", top: 20, right: 10}}
          source={require('C:/Users/My-Pc/git/awareco/app/src/images/coins.png')}
        />
        <Text
        style={{position: "absolute", right: -20, top: 20}}
        >1000</Text>

<Image
          style={{width: 90, height: 90}}
          source={require('C:/Users/My-Pc/git/awareco/app/src/images/car.png')}
        />
<Text>Distance covered: 15 KMs</Text>
<Text>CO2 Produced: 50 g/kms</Text>

   <Button title="Take Action" 
        style={{width: 400, marginBottom: 10}}
        onPress={() => {
          // history.push("/congratulations")
        }}/>
                
<Image
          style={{width: 50, height: 50, backgroundColor: "yellow", marginTop: 50}}
          source={require('C:/Users/My-Pc/git/awareco/app/src/images/coins.png')}
        />
        <Text
        style={{color: "red", fontSize: 50}}
        >
          -200
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