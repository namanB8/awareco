import React from "react";
// import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { StyleSheet, Text, View } from "react-native";
import LoginScreen from "./src/screens/LoginScreen";
import DashboardScreen from "./src/screens/DashboardScreen";
import DonateScreen from "./src/screens/DonateScreen";
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

 const AppNavigator = createStackNavigator(
  {
   Home: LoginScreen,
   
   DashboardScreen: DashboardScreen,
   DonateScreen: DonateScreen
  },
  {
    initialRouteName: 'DonateScreen',
  });
  const AppContainer = createAppContainer(AppNavigator);
  export default class App extends React.Component {
    render() {
      return <AppContainer />;
    }
  }
// const AppSwitchNavigator = createSwitchNavigator({
//   Login: LoginScreen,
//   Dashboard: DashboardScreen
// },
// {
//   initialRouteName: 'Login',
// }
// );

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
