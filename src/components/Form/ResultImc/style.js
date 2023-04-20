// Arquivo de Estilisação feito pelo o react native
import { StyleSheet } from "react-native";

const style = StyleSheet.create({
  resultImc: {
    width: "100%",
    flex: 1,
    marginTop: 20,
    paddingTop: 60,
    borderRadius: 50,
    alignItems: "center",
  },

  numberImc: {
    fontSize: 48,
    color: "#57C5B6",
    fontWeight: "bold",
  },

  information: {
    fontSize: 18,
    color: "#57C5B6",
    fontWeight: "bold",
  },

  boxShareButton: {
    width: "100%",
    alignItems: "center",
    marginBottom: 10,
  },

  ButtonShare: {
    backgroundColor: "#1877F2",
    borderRadius: 50,
    paddingBottom: 5,
    paddingTop: 5,
    Text: {
      color: "#FFFFFF",
      fontWeight: "bold",
      fontSize:20,
      paddingHorizontal: 30,
    },
  },
});

export default style;
