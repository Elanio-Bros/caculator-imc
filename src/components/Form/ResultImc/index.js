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

  function buttonShare() {
    if (props.resultImc !== null) {
      return (
        <TouchableOpacity style={styles.ButtonShare}>
          <Text style={styles.ButtonShare.Text} onPress={onShare}>Compartilhar</Text>
        </TouchableOpacity>
      );
    } else {
      return "";
    }
  }

  return (
    <View>
      <View style={style.resultImc}>
        <View style={styles.boxShareButton}>{buttonShare()}</View>
        <Text style={style.information}>{props.messageResultImc}</Text>
        <Text style={style.numberImc}>{props.resultImc}</Text>
      </View>
    </View>
  );
}
