import React from "react";
import { StyleSheet, Text, View } from "react-native";
import LoginScreen from "./src/screens/LoginScreen";
import DashboardScreen from "./src/screens/DashboardScreen";
import DonateScreen from "./src/screens/DonateScreen";
import VolunteerScreen from "./src/screens/VolunteerScreen";
import CongratulationsScreen from "./src/screens/CongratulationsScreen"
import { NativeRouter, Switch, Route, Router } from "react-router-native";
import history from "./src/utilities/history";

export default function App() {
  return (
    <NativeRouter >
      <View style={styles.container}>
        <Router history={history}>
          {/* <Route exact path="/" component={LoginScreen} /> */}
          <Route exact path="/dashboard" component={DashboardScreen} />
          <Route exact path="/donate" component={DonateScreen} />
          <Route exact path="/volunteer" component={VolunteerScreen} />
          <Route exact path="/congratulations" component={CongratulationsScreen} />
          <Route exact path="/" component={CongratulationsScreen} />
        </Router>
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
