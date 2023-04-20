import React, { useState } from "react";
import {
  Vibration,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import ResultImc from "./ResultImc/index.js";
import styles from "./style.js";

export default function Form() {
  // Estados para aplicação
  const [height, setHeight] = useState(null);
  const [weight, setWeight] = useState(null);
  const [messageImc, setMessageImc] = useState("Prencha o peso e altura");
  const [imc, setImc] = useState(null);
  const [TextButton, setTextButton] = useState("Calcular");
  const [errorMessage, setErrorMessage] = useState(null);

  // Funções para os estados
  function validationImc() {
    if (weight != null && weight != "" && height != null && height != "") {
      setErrorMessage(null);
      imcCaculator();
      setMessageImc("Seu Imc é igual:");
      setTextButton("Calcular Novamente");
      return;
    }
    setImc(null);
    setMessageImc("Prencha o peso e altura");
    setTextButton("Calcular");
    verificationImc();
  }

  function verificationImc() {
    if ((weight == null || weight == "") && (height == null || height == "")) {
      setErrorMessage("Campo obrigatorio*");
      Vibration.vibrate();
    }
  }

  function imcCaculator() {
    return setImc((weight / (height * height)).toFixed(2));
  }

  return (
    <View style={styles.formContext}>
      <View style={styles.form}>
        <Text style={styles.formLabel}>Altura</Text>
        <Text style={styles.errorMessage}>{errorMessage}</Text>
        <TextInput
          style={styles.input}
          onChangeText={setHeight}
          value={height}
          placeholder="Ex:1.75"
          keyboardType="numeric"
        />
        <Text style={styles.formLabel}>Peso</Text>
        <Text style={styles.errorMessage}>{errorMessage}</Text>
        <TextInput
          style={styles.input}
          onChangeText={setWeight}
          value={weight}
          placeholder="Ex:75.35"
          keyboardType="numeric"
        />
        {/* <Button onPress={validationImc} title={TextButton} /> */}

        <TouchableOpacity
          style={styles.buttonCaculator}
          onPress={validationImc}
        >
          <Text style={styles.buttonCaculator.Text}>{TextButton}</Text>
        </TouchableOpacity>
      </View>
      <ResultImc messageResultImc={messageImc} resultImc={imc} />
    </View>
  );
}
