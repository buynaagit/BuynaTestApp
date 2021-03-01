import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

import RootScreen from "./RootScreen";
import LoginScreen from "./Login";
import SignUpScreen from "./SignUp";
import ForgotPasswordScreen from "./ForgotPassword";
import MainTabScreen from "./MainTab";

const RootStack = createStackNavigator();

const RootStackScreen = ({ navigation }) => (
  <RootStack.Navigator headerMode="none" initialRouteName="Root">
    <RootStack.Screen name="Root" component={RootScreen} />
    <RootStack.Screen name="Login" component={LoginScreen} />
    <RootStack.Screen name="SignUp" component={SignUpScreen} />
    <RootStack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
    {/* <RootStack.Screen name="BottomDrawerTab" component={BottomDrawerTab} /> */}
  </RootStack.Navigator>
);

export default RootStackScreen;
