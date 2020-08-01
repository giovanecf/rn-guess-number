import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { LinearGradient } from "expo-linear-gradient";

import Header from "./components/Header";
import StartGameScreen from "./screens/StartGameScreen";
import Card from "./components/Card";
import Colors from "./constants/colors";

export default function App() {
  return (
    <View style={styles.root}>
      <View style={styles.statusBar}>
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          colors={[Colors.primaryDark, Colors.primary, Colors.primaryLight]}
        >
          <View style={styles.gradient}></View>
        </LinearGradient>
      </View>

      <View style={styles.container}>
        <Card>
          <Header title="Pense em um Número" />
        </Card>

        <Card>
          <StartGameScreen />
        </Card>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: Colors.materialBackground },

  container: {
    alignItems: "center",
  },
  statusBar: { width: "100%", height: "4%" },
  gradient: { padding: "10%" },
});
