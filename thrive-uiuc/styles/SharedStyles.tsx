import { Platform, StatusBar, StyleSheet } from "react-native";
import Color from "./Color";

const sharedStyles = StyleSheet.create({
  pageContainer: {
    backgroundColor: Color.darkestBlue,
    height: "100%",
    alignItems: "center",
    alignContent: "center",
    justifyContent: "flex-start",
    gap: 10,
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
    boxShadow: "0px 0px 15px 0px rgba(255,255,255,0.3)",
  },
	androidSafeAreaContainer: {
    backgroundColor: Color.darkestBlue,
		maxHeight: "100%",
  },
});

export default sharedStyles;
