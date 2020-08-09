import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";

import Card from "../components/Card";
import Colors from "../constants/colors";
import NumberContainer from "../components/NumberContainer";

const generateRandomBetween = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
};

const GameScreen = (props) => {
  const [rounds, setRounds] = useState(0);

  const currentMin = useRef(1);
  const currentMax = useRef(100);

  const [currentGuess, setCurrentGuess] = useState(
    generateRandomBetween(1, 100, userChoice)
  );

  const { userChoice, onGameOver } = props;

  useEffect(() => {
    if (currentGuess === userChoice) {
      onGameOver(rounds);
    }
  }, [currentGuess, userChoice, onGameOver]);

  const nextGuessHandler = (direction) => {
    if (direction === "menos" && currentGuess > userChoice) {
      currentMax.current = currentGuess;
    } else if (direction === "mais" && currentGuess < userChoice) {
      currentMin.current = currentGuess;
    } else {
      Alert.alert("POLÍCIA!", "Trapaceiro aqui!!!", [
        { text: "Ok, vou ser Honesto", style: "destructive" },
      ]);
      return;
    }
    setCurrentGuess(
      generateRandomBetween(
        currentMin.current,
        currentMax.current,
        currentGuess
      )
    );

    setRounds((rounds) => rounds + 1);
  };

  return (
    <View style={styles.root}>
      <Card>
        <NumberContainer style={styles.numberContainer}>
          {currentGuess}
        </NumberContainer>
        <View style={styles.botoesView}>
          <View style={styles.menorBtn}>
            <Button
              title="MENOS"
              color={Colors.primary}
              onPress={nextGuessHandler.bind(this, "menos")}
            />
          </View>
          <View style={styles.maiorBtn}>
            <Button
              title="MAIS"
              color={Colors.primaryDark}
              onPress={nextGuessHandler.bind(this, "mais")}
            />
          </View>
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
  },
  numberContainer: {
    alignSelf: "center",
    width: 62,
  },
  botoesView: {
    marginVertical: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    color: Colors.buttonText,
  },
  menorBtn: {
    width: "30%",
  },
  maiorBtn: { width: "30%" },
});

export default GameScreen;
