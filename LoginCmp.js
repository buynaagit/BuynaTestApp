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
import MyInputArea from "../components/MyInputArea";

const LoginCmp = ({ navigation, setUsername, setPassword }) => {
  const buttonClickHandler = () => navigation.navigate("Welcome");
  const buttonClickHandler2 = () => navigation.navigate("Home");
  const buttonClickHandler3 = () => navigation.navigate("ForgotPassword");
  return (
    <View style={styles.container}>
      <AntDesign
        style={{ marginRight: 350, marginTop: 20, marginBottom: -30 }}
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
        <FlatInput placeholder="Usersname" onChangeText={setUsername} />
        <FlatInput
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={setPassword}
        />
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
          text="Login in"
          onPress={buttonClickHandler}
        />
        <FlatButton
          style={{
            color: "#808080",
            backgroundColor: "white",
          }}
          text="forgot password?"
          onPress={buttonClickHandler3}
        />
        {/* <MyTextArea placeholder="TextAreaTest   " /> */}
        <View
          style={{
            flexDirection: "row",
            marginTop: 80,
          }}
        >
          <Image
            style={styles.fblogo}
            source={require("../../assets/img/facebook-flat-vector-logo.png")}
          />

          <Image
            style={styles.googlelogo}
            source={require("../../assets/img/new-google-favicon-logo.png")}
          />

          <Image
            style={styles.twitterlogo}
            source={require("../../assets/img/new-twitter-logo-vector.png")}
          />
        </View>
      </View>
    </View>
  );
};

export default LoginCmp;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#0288d1",
    alignItems: "center",
  },
  container2: {
    backgroundColor: "white",
    alignItems: "center",
    width: 400,
    height: 500,
    marginTop: -200,
  },
  mytext: {
    fontSize: 18,
    color: "white",
    marginBottom: 250,
  },
  logostyle: {
    marginTop: 30,
    width: 150,
    height: 150,
  },
  fblogo: {
    width: 30,
    height: 30,
  },
  twitterlogo: {
    width: 30,
    height: 30,
  },
  googlelogo: {
    width: 30,
    height: 30,
    marginHorizontal: 90,
  },
});
