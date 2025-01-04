import {
  Image,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import Color from "../../styles/Color";
import { StyledH1, StyledH2 } from "../sharedComponents/Text/StyledText";

const ContinueButton = () => {
  return (
    <View>
      <TouchableOpacity style={styles.continueButton}>
        <StyledH2 text={"Continue with Illinois Email"} />
        <Image source={require("../../assets/logos/uiuc-logo.png")} style={styles.uiucLogo}/>
      </TouchableOpacity>
    </View>
  );
};

export default ContinueButton;

const styles = StyleSheet.create({
  continueButton: {
    display: "flex",
    padding: 10,
    flexDirection: "row",
    backgroundColor: Color.darkBlue,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    gap: 13,
    borderRadius: 20,
    width: "90%",
  },
  uiucLogo: {
    width: 1200/36,
    height: 1728/36,
  },
});
