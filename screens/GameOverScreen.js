import React, { useState, useRef, useEffect } from "react";
import { View, Text, Button, StyleSheet, Image } from "react-native";

import Card from "../components/Card";
import Colors from "../constants/colors";
import NumberContainer from "../components/NumberContainer";

const GameOverScreen = (props) => {
  return (
    <View style={styles.root}>
      <Card>
        <View style={styles.imageView}>
          <Image
            style={styles.image}
            source={require("../assets/game_over_256px.png")}
          />
        </View>
        <NumberContainer style={styles.numberContainer}>
          {props.userChoice}
        </NumberContainer>
        <View style={styles.numberRounds}>
          <Text style={styles.numberRoundsText}>
            Acertei em {props.gameRounds} rounds.
          </Text>
        </View>

        <View style={styles.newGameButton}>
          <Button
            title="Novo Jogo"
            color={Colors.primary}
            onPress={props.onNewGame}
          />
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
  imageView: {
    alignItems: "center",
  },
  image: {
    width: 127,
    height: 127,
  },
  numberContainer: {
    width: 62,
    alignSelf: "center",
  },
  numberRounds: {
    alignItems: "center",
    padding: 12,
  },
  numberRoundsText: {
    fontSize: 16,
    fontWeight: "400",
    color: Colors.textBase,
  },
  newGameButton: {
    padding: 12,
  },
});

export default GameOverScreen;
