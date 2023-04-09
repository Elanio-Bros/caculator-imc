import React from "react";
import { View, Text } from "react-native";
import styles from "./style";
export default function Title() {
  return (
    <View style={styles.boxTitle}>
      {/* 
        Estilo em linha:style={{fontSize:10}}
        Estilo em variavel:style={[variavel].[nome_no_Json]}
      */}
      <Text style={styles.textTitle}>SAFEHEALTH</Text>
    </View>
  );
}
