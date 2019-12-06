import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const LoginScreen = ({ history }) => {
  return (
    <Button
      title="Sign In With Google"
      onPress={() => history.push("/dashboard")}
    />
  );
};

export default LoginScreen;
