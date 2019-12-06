import React from "react";
import { StyleSheet, Text, View } from "react-native";
import LoginScreen from "./src/screens/LoginScreen";
import DashboardScreen from "./src/screens/DashboardScreen";
import DonateScreen from "./src/screens/DonateScreen";
import VolunteerScreen from "./src/screens/VolunteerScreen";
import { NativeRouter, Switch, Route } from "react-router-native";

export default function App() {
  return (
    <NativeRouter>
      <View style={styles.container}>
        <Switch>
          <Route exact path="/" component={LoginScreen} />
          <Route exact path="/dashboard" component={DashboardScreen} />
          <Route exact path="/donate" component={DonateScreen} />
          <Route exact path="/volunteer" component={VolunteerScreen} />
        </Switch>
      </View>
    </NativeRouter>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
