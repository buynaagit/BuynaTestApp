import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export class ProfileScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> Profile </Text>
        <AntDesign name="profile" size={24} color="black" />
      </View>
    );
  }
}

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
