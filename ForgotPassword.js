import { useLinkProps } from "@react-navigation/native";
import React, { Component } from "react";

import {
  View,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";

export default function ({ navigation }) {
  return (
    <View>
      <Text> Reset password!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0288d1",
    alignItems: "center",
    justifyContent: "center",
  },
  mytext: { fontSize: 18, color: "white", marginBottom: 30 },
});
