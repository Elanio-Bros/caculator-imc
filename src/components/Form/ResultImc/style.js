// Arquivo de Estilisação feito pelo o react native
import { StyleSheet } from "react-native";

const style = StyleSheet.create({
  resultImc: {
    width: "100%",
    marginTop: 10,
    paddingTop: 20,
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
  },

  ButtonShare: {
    backgroundColor: "#1877F2",
    borderRadius: 50,
    paddingBottom: 14,
    paddingTop: 14,
    width: "70%",
    alignItems: "center",
    justifyContent: "center",
    Text: {
      color: "#FFFFFF",
      fontWeight: "bold",
      fontSize: 20,
      paddingHorizontal: 30,
    },
  },
});

export default style;
