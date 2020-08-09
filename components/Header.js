import React from "react";
import { StyleSheet, View, Text } from "react-native";

const Header = (props) => {
  return (
    <View style={styles.barra}>
      <Text style={styles.texto}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  barra: {
    paddingVertical: 16,
    paddingHorizontal: 12,
    alignContent: "center",
    alignItems: "center",
  },

  texto: {
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default Header;
