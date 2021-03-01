import React from "react";
import { StyleSheet } from "react-native";
import { TextInput } from "react-native-gesture-handler";

export default function MyInputArea(props) {
  return (
    <TextInput
      multiline={true}
      numberOfLine={5}
      {...props}
      style={[styles.input, props.style]}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    width: 300,
    borderColor: "#777",
    padding: 8,
  },
});
