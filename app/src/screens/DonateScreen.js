import React from "react";
import { StyleSheet, Text, View, Image, TextInput } from "react-native";
import { DataTable, RadioButton } from "react-native-paper";

const DonateScreen = () => {
  const [checked, setChecked] = React.useState("");
  const [value, setValue] = React.useState("40");

  const onChangeText = text => {
    setValue(text);
  };

  return (
    <View style={styles.container}>
      <Image
        style={{
          width: 30,
          height: 30,
          backgroundColor: "yellow",
          position: "absolute",
          top: 20,
          right: -40
        }}
        source={require("C:/Users/My-Pc/git/awareco/app/src/images/coins.png")}
      />
      <Text style={{ position: "absolute", right: -80, top: 20 }}>1200</Text>

      <Text>Amount you want to donate: </Text>
      <TextInput
        style={{
          height: 40,
          width: 100,
          borderColor: "gray",
          borderWidth: 1,
          marginBottom: 40
        }}
        onChangeText={text => onChangeText(text)}
        value={value}
      />

      <Text>Mode of payment: </Text>
      <RadioButton
        value="first"
        status={checked === "first" ? "checked" : "unchecked"}
        onPress={() => setChecked("first")}
      >
        Credit Card
      </RadioButton>
      <RadioButton
        value="second"
        status={checked === "second" ? "checked" : "unchecked"}
        onPress={() => setChecked("second")}
      >
        Debit Card
      </RadioButton>

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
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
