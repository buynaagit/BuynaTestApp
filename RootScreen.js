import { useLinkProps } from "@react-navigation/native";
import React, { useState } from "react";

import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import FlatButton from "../components/MyButton";

const RootScreen = ({ navigation }) => {
  const buttonClickHandler = () => navigation.navigate("Login");
  const buttonClickHandler2 = () => navigation.navigate("SignUp");
  return (
    <View style={styles.container}>
      <Image
        style={styles.imgstyle}
        source={require("../../assets/img/deutscher-fubball-bund--black---white--vector-logo.png")}
      />
      <Text style={styles.mytext}>Test app</Text>
      <FlatButton
        style={{
          marginTop: 150,
          color: "blue",
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 7,
          },
          shadowOpacity: 0.41,
          shadowRadius: 9.11,

          elevation: 15,
        }}
        text="Sign in"
        onPress={buttonClickHandler}
      />
      <FlatButton
        style={{
          marginBottom: 100,
          color: "white",
          backgroundColor: "#038cd0",
        }}
        text="Sign up"
        onPress={buttonClickHandler2}
      />
    </View>
  );
};

export default RootScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#038cd0",
    alignItems: "center",
    justifyContent: "center",
  },
  mytext: { fontSize: 18, color: "white", marginTop: 10 },
  imgstyle: {
    marginTop: 130,
    width: 200,
    height: 200,
  },
  shadowButton: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,

    elevation: 14,
  },
});
