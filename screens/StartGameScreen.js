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

import Colors from "../constants/colors";

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
  };

  const confirmInputHandler = () => {
    const numeroParaTestar = parseInt(numeroInserido);

    if (
      isNaN(numeroParaTestar) ||
      numeroParaTestar <= 0 ||
      numeroParaTestar > 99
    ) {
      Alert.alert('Número Inválido', 'Número precisa ser entre 1 e 99',[{text: 'Ok', style: 'destructive', onPress: resetInputHandler}]);
      return;
    }

    Alert.alert('Número Inválido', 'Número precisa ser entre 1 e 99',[{text: 'Ok', style: 'destructive'}, {text:'cancel', style:'cancel', onPress: resetInputHandler}]);

    setConfirmado(true);
    setNumeroConfirmado(numeroParaTestar);
    setNumeroInserido("");
  };

  let alertaConfirmacao;

  if (confirmado) {
    alertaConfirmacao = <Text>Valor Escolhido: {numeroConfirmado}</Text>
  }

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.root}>
        <View style={styles.tituloView}>
          <Text style={styles.tituloText}>Inicie um Jogo Novo!</Text>
        </View>
        <View style={styles.textInputView}>
          <Text>Insira um Número!</Text>
          <TextInput
            style={styles.textInput}
            keyboardType="number-pad"
            autoCorrect={false}
            autoCapitalize="none"
            maxLength={2}
            blurOnSubmit
            onChangeText={numeroInseridoHandler}
            value={numeroInserido}
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
              onPress={confirmInputHandler}
            />
          </View>
        </View>
        
      <View>{alertaConfirmacao}</View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  root: {
    paddingVertical: 8,
    alignItems: "center",
    justifyContent: "space-between",
  },

  tituloView: {
    marginVertical: 12,
  },

  tituloText: {
    fontSize: 24,
    fontStyle: "italic",
  },

  textInputView: {
    marginTop: 32,
    width: "50%",
    padding: 12,
    alignItems: "center",
  },

  textInput: {
    borderBottomWidth: 1.5,
    borderColor: Colors.primary,
    borderRadius: 3,
    textAlign: "center",
    fontSize: 32,
    padding: "10%",
  },

  botoesView: {
    width: "100%",
    marginVertical: 24,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  resetBtn: { width: "30%" },
  confirmBtn: { width: "30%" },
});

export default StartGameScreen;
