// Arquivo de Estilisação feito pelo o react native
import { StyleSheet } from "react-native";

const style = StyleSheet.create({
  formContext: {
    flex: 1,
    // width: "100%",
    // height: "100%",
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingTop: 15,
    marginTop: 30,
  },

  form: {
    width: "100%",
    height: "auto",
    marginTop: 30,
    padding: 10,
  },

  formLabel: {
    color: "#000000",
    fontSize: 18,
    paddingLeft: 20,
  },

  input: {
    width: "95%",
    height: 40,
    borderRadius: 10,
    backgroundColor: "#f6f6f6",
    paddingLeft: 10,
    margin: 12,
  },

  buttonCaculator: {
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    width: "95%",
    backgroundColor: "#57C5B6",
    paddingTop: 14,
    paddingBottom: 14,
    marginLeft: 12,
    marginTop: 30,

    // Não sei se isso é correto na documentação
    Text: {
      fontSize: 20,
      color: "#FFFFFF",
    },
  },

  errorMessage: {
    fontSize: 12,
    color: "red",
    fontWeight: "bold",
    paddingLeft: 20,
  },
});

export default style;
