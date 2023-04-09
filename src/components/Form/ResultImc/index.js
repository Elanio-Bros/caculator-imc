import React from "react";
import { View, Text } from "react-native";
import style from "./style";
export default function ResultImc(props) {
  return (
    <View>
      <View style={style.resultImc}>
        <Text style={style.information}>{props.messageResultImc}</Text>
        <Text style={style.numberImc}>{props.resultImc}</Text>
      </View>
    </View>
  );
}
