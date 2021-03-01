import { useLinkProps } from "@react-navigation/native";
import React from "react";

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";
import FlatButton from "../components/MyButton";
import FlatInput from "../components/MyInput";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import * as Animatable from "react-native-animatable";
import { AuthContext } from "../components/Context";
import Users from "../model/users";

const Login = ({ navigation }) => {
  const buttonClickHandler = () => navigation.navigate("BottomDrawerTab");
  const buttonClickHandler2 = () => navigation.navigate("Root");
  const buttonClickHandler3 = () => navigation.navigate("ForgotPassword");
  const [data, setData] = React.useState({
    username: "",
    password: "",
    check_textInputChange: false,
    secureTextEntry: true,
    isValidUser: true,
    isValidPassword: true,
  });

  const { signIn } = React.useContext(AuthContext);

  const textInputChange = (val) => {
    if (val.trim().length >= 4) {
      setData({
        ...data,
        username: val,
        check_textInputChange: true,
        isValidUser: true,
      });
    } else {
      setData({
        ...data,
        username: val,
        check_textInputChange: false,
        isValidUser: false,
      });
    }
  };

  const handlePasswordChange = (val) => {
    if (val.trim().length >= 8) {
      setData({
        ...data,
        password: val,
        isValidPassword: true,
      });
    } else {
      setData({
        ...data,
        password: val,
        isValidPassword: false,
      });
    }
  };

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };

  const loginHandle = (userName, password) => {
    const foundUser = Users.filter((item) => {
      return userName == item.username && password == item.password;
    });

    if (data.username.length == 0 || data.password.length == 0) {
      Alert.alert(
        "Wrong Input!",
        "Username or password field cannot be empty.",
        [{ text: "Okay" }]
      );
      return;
    }

    if (foundUser.length == 0) {
      Alert.alert("Invalid User!", "Username or password is incorrect.", [
        { text: "Okay" },
      ]);
      return;
    }
    signIn(foundUser);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <AntDesign
          style={{ marginRight: 330, marginTop: 40, marginBottom: -30 }}
          name="arrowleft"
          size={24}
          color="white"
          onPress={buttonClickHandler2}
        />
        <AntDesign name="" />
        <Image
          style={styles.logostyle}
          source={require("../../assets/img/deutscher-fubball-bund--black---white--vector-logo.png")}
        />
        <Text style={styles.mytext}>Test app</Text>
      </View>
      <View style={styles.footer}>
        <View style={styles.action}>
          <FlatInput
            placeholder="Username"
            onChangeText={(val) => textInputChange(val)}
          />
          {data.check_textInputChange ? (
            <Animatable.View animation="bounceIn" duration={500}>
              <Feather
                name="check-circle"
                size={20}
                color="green"
                style={{ paddingRight: 40, paddingTop: 25 }}
              />
            </Animatable.View>
          ) : null}
        </View>

        {data.isValidUser ? null : (
          <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={styles.errorMsg}>
              {" "}
              Username must be 4 characters long.{" "}
            </Text>
          </Animatable.View>
        )}

        <View style={styles.action}>
          <FlatInput
            placeholder="Password"
            secureTextEntry={data.secureTextEntry ? true : false}
            onChangeText={(val) => handlePasswordChange(val)}
          />
          <TouchableOpacity onPress={updateSecureTextEntry}>
            {data.secureTextEntry ? (
              <Feather
                name="eye-off"
                color="grey"
                size={20}
                style={{ paddingRight: 40, paddingTop: 25 }}
              ></Feather>
            ) : (
              <Feather
                name="eye"
                color="grey"
                size={20}
                style={{ paddingRight: 40, paddingTop: 25 }}
              ></Feather>
            )}
          </TouchableOpacity>
        </View>
        {data.isValidPassword ? null : (
          <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={styles.errorMsg}>
              {" "}
              Password must be 8 characters long.{" "}
            </Text>
          </Animatable.View>
        )}
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
          text="Login"
          onPress={() => {
            loginHandle(data.username, data.password);
          }}
        />
        <FlatButton
          style={{
            color: "#808080",
            backgroundColor: "white",
          }}
          text="forgot password?"
          onPress={buttonClickHandler3}
        />

        <View
          style={{
            flexDirection: "row",
            flex: 2,
            marginTop: 100,
            marginBottom: 50,
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

export default Login;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#0288d1",
    alignItems: "center",
    flex: 1,
  },
  header: {
    justifyContent: "center",
    alignItems: "center",
    flex: 2,
  },
  footer: {
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: "white",
    alignItems: "center",
    flex: 4,
  },
  mytext: {
    fontSize: 18,
    color: "white",
  },
  logostyle: {
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
  action: { flexDirection: "row" },
  errorMsg: {
    color: "#FF0000",
    fontSize: 14,
    marginRight: 70,
  },
});
