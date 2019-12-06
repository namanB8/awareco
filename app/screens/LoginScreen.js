import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <Button
        title="Sign In With Google"
        onPress={() => this.signInWithGoogleAsync()}
      />
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
