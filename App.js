import { StyleSheet, View } from "react-native";
import Title from "./src/components/Title/";
import Form from "./src/components/Form/";
export default function App() {
  return (
    <View style={styles.container}>
      <Title />
      <Form />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, //Porcetagem da usabilidade da tela nesse caso sendo 1=100% e 0=0%
    backgroundColor: "#E5E5E5", //cor de fundo da tela
    paddingTop: 80,// espaço entre o elemento principal o o tipo do smartphone
  },
});
