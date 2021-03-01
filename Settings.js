import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export class SettingsScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> Settings </Text>
        <AntDesign name="setting" size={24} color="black" />
      </View>
    );
  }
}

export default SettingsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
