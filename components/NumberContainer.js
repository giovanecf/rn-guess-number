import React from "react";
import { View, Text, StyleSheet } from "react-native";

import Colors from "../constants/colors";

const NumberContainer = (props) => {
  return (
    <View style={{ ...styles.confirmNumberCardValueView, ...props.style }}>
      <Text style={styles.confirmNumberCardValue}>{props.children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  confirmNumberCardValueView: {
    alignItems: "center",
    marginVertical: 12,
    borderWidth: 1,
    borderRadius: 15,
    borderColor: Colors.primary,
    padding: 10,
  },
  confirmNumberCardValue: {
    fontSize: 32,
    fontWeight: "700",
    fontStyle: "italic",
    color: Colors.primaryDark,
  },
});

export default NumberContainer;
