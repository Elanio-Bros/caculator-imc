import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import ResultImc from "./ResultImc/index.js";

export default function Form() {
  // Estados para aplicação
  const [height, setHeight] = useState(null);
  const [weight, setWeight] = useState(null);
  const [messageImc, setMessageImc] = useState("Prencha o peso e altura");
  const [imc, setImc] = useState(null);
  const [TextButton, setTextButton] = useState("Calcular");

  // Funções para os estados
  function validationImc() {
    if (weight != null && weight != "" && height != null && height != "") {
      imcCaculator();
      // setHeight(null);
      // setWeight(null);
      setMessageImc("Seu Imc é igual:");
      setTextButton("Calcular Novamente");
      return;
    }
    setImc(null);
    setMessageImc("Prencha o peso e altura");
    setTextButton("Calcular");
  }

  function imcCaculator() {
    return setImc((weight / (height * height)).toFixed(2));
  }

  return (
    <View>
      <View>
        <Text>Altura</Text>
        <TextInput
          onChangeText={setHeight}
          value={height}
          placeholder="Ex:1.75"
          keyboardType="numeric"
        />
        <Text>Peso</Text>
        <TextInput
          onChangeText={setWeight}
          value={weight}
          placeholder="Ex:75.35"
          keyboardType="numeric"
        />
        <Button onPress={validationImc} title={TextButton} />
        <ResultImc messageResultImc={messageImc} resultImc={imc} />
      </View>
    </View>
  );
}
