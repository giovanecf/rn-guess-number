import React, { useState } from "react";
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

const StartGameScreen = (props) => {
  const [confirmado, setConfirmado] = useState(false);
  const [numeroInserido, setNumeroInserido] = useState("");
  const [numeroConfirmado, setNumeroConfirmado] = useState("");

  const numeroInseridoHandler = (textoInserido) => {
    setNumeroInserido(textoInserido.replace(/[^0-9]/g, ""));
  };

  const resetInputHandler = () => {
    setNumeroInserido("");
    setConfirmado(false);
    setNumeroConfirmado("");
  };

  const confirmInputNumberHandler = () => {
    const numeroParaTestar = parseInt(numeroInserido);

    if (
      isNaN(numeroParaTestar) ||
      numeroParaTestar <= 0 ||
      numeroParaTestar > 99
    ) {
      Alert.alert("Número Inválido", "Número precisa ser entre 1 e 99", [
        { text: "Ok", style: "destructive", onPress: resetInputHandler },
      ]);
      return 0;
    }

    Keyboard.dismiss();

    setNumeroConfirmado(numeroParaTestar);
    setConfirmado(true);
  };

  const renderConfirmInputCard = () => {
    if (confirmado) {
      return (
        <Card>
          <View style={styles.confirmNumberCardTitleView}>
            <Text style={styles.confirmNumberCardTitle}>É esse mesmo?</Text>
          </View>
          <NumberContainer style={styles.numberContainer}>
            {numeroConfirmado}
          </NumberContainer>
          <View style={styles.confirmNumberCardButtonView}>
            <View style={styles.confirmNumberCardButton}>
              <Button
                color={Colors.primary}
                title="INCIAR JOGO"
                onPress={() => props.onStartGame(numeroConfirmado)}
              />
            </View>
          </View>
        </Card>
      );
    }

    return null;
  };

  renderConfirmInputCard();

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.root}>
        <Card>
          <View style={styles.textInputView}>
            <Text style={styles.textInputTitle}>Digite o número</Text>
            <TextInput
              style={styles.textInput}
              keyboardType="number-pad"
              autoCorrect={false}
              autoCapitalize="none"
              maxLength={2}
              blurOnSubmit
              onChangeText={numeroInseridoHandler}
              value={numeroInserido}
              placeholder=""
            />
          </View>

          <View style={styles.botoesView}>
            <View style={styles.resetBtn}>
              <Button
                color={Colors.resetColor}
                title="Resetar"
                onPress={resetInputHandler}
              />
            </View>
            <View style={styles.confirmBtn}>
              <Button
                color={Colors.primary}
                title="Confirmar"
                onPress={confirmInputNumberHandler}
              />
            </View>
          </View>
        </Card>

        <View style={styles.root}>{renderConfirmInputCard()}</View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  root: {
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
  },

  textInputView: {
    marginVertical: 12,
    width: "50%",
    alignSelf: "center",
    alignItems: "center",
  },

  textInputTitle: {
    fontSize: 18,
    marginBottom: 12,
    color: Colors.textBase,
  },

  textInput: {
    borderBottomWidth: 1,
    borderColor: Colors.primaryLight,
    borderRadius: 3,
    textAlign: "center",
    fontSize: 32,
    paddingVertical: 12,
    marginBottom: 12,
    width: "40%",
  },

  botoesView: {
    width: "100%",
    marginVertical: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    color: Colors.buttonText,
  },
  resetBtn: { width: "30%" },
  confirmBtn: { width: "30%" },

  confirmInputCard: {
    paddingVertical: 8,
    alignItems: "center",
    justifyContent: "space-between",
  },

  confirmNumberCardTitleView: {
    alignItems: "center",
    marginVertical: 12,
  },
  confirmNumberCardTitle: {
    fontSize: 24,
    fontWeight: "400",
    color: Colors.textBase,
  },

  numberContainer: {
    alignSelf: "center",
    width: 62,
  },

  confirmNumberCardButtonView: {
    alignItems: "center",
    width: "100%",
    marginVertical: 12,
  },
  confirmNumberCardButton: {
    width: "95%",
  },
});

export default StartGameScreen;
