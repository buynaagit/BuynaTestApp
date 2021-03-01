import { useLinkProps } from "@react-navigation/native";
import React, { useState } from "react";

import {
  View,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
  Input,
} from "react-native";
import FlatButton from "../components/MyButton";
import FlatInput from "../components/MyInput";
import { AntDesign } from "@expo/vector-icons";
// import MainTabScreen from "../screens/MainTab";
// import { createStackNavigator } from "@react-navigation/stack";

// const Stack = createStackNavigator();

export default function ({ navigation }) {
  const buttonClickHandler = () => navigation.navigate("Home");
  const buttonClickHandler2 = () => navigation.navigate("Root");

  return (
    <View style={styles.container}>
      <AntDesign
        style={{ marginTop: 25, marginRight: 300 }}
        name="arrowleft"
        size={24}
        color="white"
        onPress={buttonClickHandler2}
      />
      <Image
        style={styles.logostyle}
        source={require("../../assets/img/deutscher-fubball-bund--black---white--vector-logo.png")}
      />
      <Text style={styles.mytext}>Bundes Liga</Text>
      <View style={styles.container2}>
        <FlatInput style={{}} placeholder="Name" />
        <FlatInput style={{}} placeholder="Password" />
        <FlatInput placeholder="Re-type password" />
        <FlatButton
          style={
            (styles.shadowButton,
            {
              color: "white",
              backgroundColor: "#038cd0",
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 7,
              },
              shadowOpacity: 0.41,
              shadowRadius: 9.11,

              elevation: 15,
            })
          }
          text="Sign up"
          // onPress={buttonClickHandler}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#0288d1",
    alignItems: "center",
    flex: 1,
  },
  container2: {
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    backgroundColor: "white",
    alignItems: "center",
    flex: 3,
    width: 400,
  },
  mytext: {
    fontSize: 18,
    color: "white",
    marginBottom: 50,
  },
  logostyle: {
    marginTop: 10,
    width: 150,
    height: 150,
  },
});
