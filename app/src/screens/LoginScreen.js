import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import Inputs from "../components/login/input";
const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        style={{ width: 150, height: 150, backgroundColor: "yellow" }}
        source={require("C:/Users/My-Pc/git/awareco/app/src/images/brain.png")}
      />
      <Inputs />
    </View>
  );
};

export default LoginScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
