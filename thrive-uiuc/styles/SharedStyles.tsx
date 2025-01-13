import { StyleSheet } from "react-native";
import Color from "./Color";
import { ShadowProps } from "react-native-shadow-2";

export const ShadowPresets = {
    button: {
      offset: [0, 0], distance: 7 , startColor: 'rgba(255, 255, 255, 0.32)'
    } as ShadowProps,
};

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
    boxShadow: "0px 0px 15px 0px rgba(255,255,255,0.5)",
  }
})

export default sharedStyles;