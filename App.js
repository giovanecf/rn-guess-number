import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

import { LinearGradient } from "expo-linear-gradient";

import Header from "./components/Header";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import Card from "./components/Card";
import Colors from "./constants/colors";
import GameOverScreen from "./screens/GameOverScreen";

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [guessRounds, setGuessRouds] = useState(0);

  const startGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber);
    setGuessRouds(0);
  };

  const gameOverHandler = (numOfRounds) => {
    setGuessRouds(numOfRounds);
  };

  const newGameHandler = () => {
    setGuessRouds(0);
    setUserNumber(false);
  };

  let content = <StartGameScreen onStartGame={startGameHandler} />;
  let titleContent = "Pense em um número";

  if (userNumber && guessRounds <= 0) {
    content = (
      <GameScreen userChoice={userNumber} onGameOver={gameOverHandler} />
    );
    titleContent = "Deixa eu ver...";
  } else if (guessRounds > 0) {
    content = (
      <GameOverScreen
        gameRounds={guessRounds}
        userChoice={userNumber}
        onNewGame={newGameHandler}
      />
    );
    titleContent = "Mais difícil da próxima, hein!";
  }

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
          <Header title={titleContent} />
        </Card>

        <View style={styles.startGame}>{content}</View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: Colors.background },

  container: {
    alignItems: "center",
  },
  statusBar: { width: "100%", height: "4%" },
  gradient: { padding: "10%" },
  startGame: { width: "95%" },
});
