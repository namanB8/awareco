import React from "react";
import { StyleSheet, Text, View } from "react-native";
import LoginScreen from "./src/screens/LoginScreen";
import DashboardScreen from "./src/screens/DashboardScreen";
import DonateScreen from "./src/screens/DonateScreen";
import ActivityScreen from "./src/screens/ActivityScreen";
import CongratulationsScreen from "./src/screens/CongratulationsScreen";
import CoDecreased from "./src/screens/CoDecreased";
import VolunteerScreen from "./src/screens/VolunteerScreen";
import SelectEvent from "./src/screens/SelectEvent";
import { NativeRouter, Switch, Route, Router } from "react-router-native";
import history from "./src/utilities/history";

export default function App() {
  return (
    <NativeRouter >
      <View style={styles.container}>
        <Router history={history}>
          <Route exact path="/" component={LoginScreen} />
          <Route exact path="/dashboard" component={DashboardScreen} />
          <Route exact path="/donate" component={DonateScreen} />
          <Route exact path="/activity" component={ActivityScreen} />
          <Route exact path="/congratulations" component={CongratulationsScreen} />
          <Route exact path="/coDecreased" component={CoDecreased} />
          <Route exact path="/volunteer" component={VolunteerScreen} />
          <Route exact path="/selectEvent" component={SelectEvent} />
          {/* <Route exact path="/" component={SelectEvent} /> */}
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
