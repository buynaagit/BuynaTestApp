import React from "react";
import { TouchableOpacity, Text, StyleSheet, View, Button } from "react-native";
import Elevations from "react-native-elevation";

export default function FlatButton({ text, onPress, style }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View>
        <Text style={[styles.button, style]}> {text} </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    margin: 10,
    borderRadius: 8,
    padding: 8,
    backgroundColor: "white",
    width: 300,
    height: 40,
    textAlign: "center",
    color: "black",
  },
  buttonShadow: {
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
