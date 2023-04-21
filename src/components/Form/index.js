import React, { useState } from "react";
import {
  Vibration,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Pressable,
  Keyboard,
  FlatList,
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
  const [imcList, setImcList] = useState([]);

  // Funções para os estados
  function validationImc() {
    if (weight != null && weight != "" && height != null && height != "") {
      setErrorMessage(null);
      imcCaculator();
      setHeight(null);
      setWeight(null);
      setMessageImc("Seu Imc é igual:");
      setTextButton("Calcular Novamente");
      Keyboard.dismiss();
    } else {
      setImc(null);
      setMessageImc("Prencha o peso e altura");
      setTextButton("Calcular");
      verificationImc();
    }
  }

  function verificationImc() {
    if (weight == null || weight == "" || height == null || height == "") {
      setErrorMessage("Campo obrigatorio*");
      Vibration.vibrate();
    }
  }

  function imcCaculator() {
    let heightFormat = height.replace(",", ".");
    let weightFormat = weight.replace(",", ".");
    let imc = (weightFormat / (heightFormat * heightFormat)).toFixed(2);
    setImcList((arr) => [...arr, { id: new Date().getTime(), imc: imc }]);
    setImc(imc);
  }

  function renderForm() {
    if (imc == null) {
      return (
        <Pressable onPress={Keyboard.dismiss} style={styles.form}>
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
            onPress={() => validationImc()}
          >
            <Text style={styles.buttonCaculator.Text}>{TextButton}</Text>
          </TouchableOpacity>
        </Pressable>
      );
    } else {
      return (
        <View style={styles.exhibitionResultImc}>
          <ResultImc messageResultImc={messageImc} resultImc={imc} />
          <TouchableOpacity
            style={styles.buttonCaculator}
            onPress={() => validationImc()}
          >
            <Text style={styles.buttonCaculator.Text}>{TextButton}</Text>
          </TouchableOpacity>
        </View>
      );
    }
  }

  return (
    <View style={styles.formContext}>
      {renderForm()}
      <FlatList
        showsVerticalScrollIndicator={false}
        style={styles.listImc}
        data={[...imcList].reverse()}
        renderItem={({ item }) => {
          return (
            <Text style={styles.resultImcItem}>
              Resultado IMC=
              <Text style={styles.resultImcItemList}> {item.imc}</Text>
            </Text>
          );
        }}
        keyExtractor={(item) => {
          return item.id;
        }}
      />
    </View>
  );
}
