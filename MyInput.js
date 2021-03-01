import React from "react";
import { TextInput, Text, StyleSheet, View } from "react-native";

export default function FlatInput(props) {
  return <TextInput {...props} style={[styles.input, props.style]} />;
}

const styles = StyleSheet.create({
  input: {
    height: 70,
    borderColor: "#777",
    flex: 1,
    paddingHorizontal: 50,
  },
});
