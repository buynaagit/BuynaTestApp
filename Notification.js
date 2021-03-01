import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export class NotificationScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> Notification </Text>
        <Ionicons name="notifications" size={24} color="black" />
      </View>
    );
  }
}

export default NotificationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
