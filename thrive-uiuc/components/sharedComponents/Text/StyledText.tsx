import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { useFonts } from "expo-font";

type Props = {
  text: string,
  style?: Object,
  weight?: string,
}

export function StyledH1({ text, style = {}, weight = "regular" }: Props) {
  var [fontsLoaded] = useFonts({
    MPlusRegular: require("../../../assets/fonts/mplusRegular.ttf"),
    MPlusMedium: require("../../../assets/fonts/mplusMedium.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return <Text style={[fontStyles.styledH1, style]}>{text}</Text>;
}

export function StyledH2({ text, style = {}, weight = "medium" }: Props) {
  var [fontsLoaded] = useFonts({
    MPlusRegular: require("../../../assets/fonts/mplusRegular.ttf"),
    MPlusMedium: require("../../../assets/fonts/mplusMedium.ttf"),
  });

  var fontFamily = weight == "medium" ? "MPlusMedium" : "MPlusRegular";

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Text style={[fontStyles.styledH2, { fontFamily: fontFamily }, style]}>
      {text}
    </Text>
  );
}

export function StyledH3({ text, style = {}, weight = "regular" }: Props) {
  var [fontsLoaded] = useFonts({
    MPlusRegular: require("../../../assets/fonts/mplusRegular.ttf"),
    MPlusMedium: require("../../../assets/fonts/mplusMedium.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return <Text style={[fontStyles.styledH3, style]}>{text}</Text>;
}

export function StyledH4({ text, style = {}, weight = "regular" }: Props) {
  var [fontsLoaded] = useFonts({
    MPlusRegular: require("../../../assets/fonts/mplusRegular.ttf"),
    MPlusMedium: require("../../../assets/fonts/mplusMedium.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return <Text style={[fontStyles.styledH4, style]}>{text}</Text>;
}

export const fontStyles = {
  styledH1: {
    fontFamily: "MPlusMedium",
    fontSize: 24,
    color: "white",
  },
  styledH2: {
    fontFamily: "MPlusMedium",
    fontSize: 20,
    color: "white",
  },
  styledH3: {
    fontFamily: "MPlusMedium",
    fontSize: 16,
    color: "white",
  },
  styledH4: {
    fontFamily: "MPlusMedium",
    fontSize: 12,
    color: "white",
  },
};
