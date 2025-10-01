import { GestureResponderEvent, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import sharedStyles from "../../styles/SharedStyles";
import React from "react";
import { StyledH2, StyledH3, StyledH4 } from "../sharedComponents/Text/StyledText";

type Props = {
  label: string;
  onPress: (event: GestureResponderEvent) => void;
};

const HomePageButton = (props: Props) => {
  const { label, onPress } = props;
  return (
    <View style={{ minWidth: "90%", alignItems: "center" }}>
      <TouchableOpacity style={[sharedStyles.blueButton, styles.homePageButton]} onPress={onPress}>
        <StyledH3 style={styles.homePageButtonText} text={label} />
      </TouchableOpacity>
    </View>
  );
};

export default HomePageButton;

const styles = StyleSheet.create({
  homePageButtonText: {
    color: "black",
    elevation: 5,
  },
  homePageButton: {
    minWidth: "90%",
  },
});
