import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import HomeScreen from "./Home";
import NotificationScreen from "./Notification";
import SettingsScreen from "./Settings";
import ProfileScreen from "./Profile";

const HomeStack = createStackNavigator();
const NotifStack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => (
  <Tab.Navigator initialRouteName="Home" activeColor="#fff">
    <Tab.Screen
      name="Home"
      component={HomeStackScreen}
      options={{
        tabBarLabel: "Home",
        tabBarColor: "#009387",
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="home" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Notifications"
      component={NotifStackScreen}
      options={{
        tabBarLabel: "Updates",
        tabBarColor: "#1f65ff",
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="bell" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Settings"
      component={SettingsScreen}
      options={{
        tabBarLabel: "Settings",
        tabBarColor: "#694fad",
        tabBarIcon: ({ color }) => (
          <Ionicons name="settings-sharp" size={25} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="Profile"
      component={ProfileScreen}
      options={{
        tabBarLabel: "Profile",
        tabBarColor: "#d02860",
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="account" color={color} size={26} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default MainTabScreen;

const HomeStackScreen = ({ navigation }) => (
  <HomeStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: "#009387",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold",
      },
    }}
  >
    <HomeStack.Screen
      name="Home"
      component={HomeScreen}
      options={{
        title: "Overview",
        headerLeft: () => (
          <Entypo
            name="menu"
            size={25}
            color="black"
            backgroundColor="#009387"
            onPress={() => navigation.openDrawer()}
          ></Entypo>
        ),
      }}
    />
  </HomeStack.Navigator>
);

const NotifStackScreen = ({ navigation }) => (
  <NotifStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: "#1f65ff",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold",
      },
    }}
  >
    <NotifStack.Screen
      name="Notification"
      component={NotificationScreen}
      options={{
        headerLeft: () => (
          <Entypo
            name="menu"
            size={25}
            color="black"
            backgroundColor="#1f65ff"
            onPress={() => navigation.openDrawer()}
          ></Entypo>
        ),
      }}
    />
  </NotifStack.Navigator>
);
