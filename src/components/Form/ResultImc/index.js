import React from "react";
import { View, Text, TouchableOpacity, Share } from "react-native";
import style from "./style";
import styles from "./style";
export default function ResultImc(props) {
  const onShare = async () => {
    const result = await Share.share({
      message: "Meu IMC hoje é: " + props.resultImc,
    });
  };

  return (
    <View>
      <View style={style.resultImc}>
        <Text style={style.information}>{props.messageResultImc}</Text>
        <Text style={style.numberImc}>{props.resultImc}</Text>
        <View style={styles.boxShareButton}>
          <TouchableOpacity style={styles.ButtonShare} onPress={onShare}>
            <Text style={styles.ButtonShare.Text} >
              Compartilhar
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
