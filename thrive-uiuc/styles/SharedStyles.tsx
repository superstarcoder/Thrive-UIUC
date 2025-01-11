import { StyleSheet } from "react-native";
import Color from "./Color";

const sharedStyles = StyleSheet.create({
  pageContainer: {
    backgroundColor: Color.darkestBlue,
    height: "100%",
    alignItems: "center",
    alignContent: "center",
    justifyContent: "flex-start",
    gap: 10,
    paddingTop: "15%"
  },
  blueButton: {
    backgroundColor: Color.blue,
    display: "flex",
    padding: 7,
    flexDirection: "row",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  }
})

export default sharedStyles;