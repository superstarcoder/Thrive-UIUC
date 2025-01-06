import {
  StyleSheet,
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { StyledH1, fontStyles } from "../Text/StyledText";
import { useFonts } from "expo-font";
import React, { useState, forwardRef, useImperativeHandle } from "react";
import Color from "../../../styles/Color";

type Props = {
  onFocus: any;
  onBlur: any;
  placeholderText: string;
  onChangeText: any;
  text: string;
  inputRef?: any;
  multiline?: boolean;
};

const FormTextInput = ({
  onFocus,
  onBlur,
  placeholderText,
  onChangeText,
  text,
  inputRef = undefined,
  multiline = false,
}: Props) => {
  // load fonts
//   var [fontsLoaded] = useFonts({
//     MPlusRegular: require("../../assets/fonts/mplusRegular.ttf"),
//     MPlusMedium: require("../../assets/fonts/mplusMedium.ttf"),
//   });
//   if (!fontsLoaded) {
//     return null;
//   }

  return (
    <View>
      <TextInput
        onFocus={onFocus}
        onBlur={onBlur}
        ref={inputRef}
        multiline={multiline}
        value={text}
        style={[fontStyles.styledH2, styles.textInput]}
        placeholder={placeholderText}
        placeholderTextColor={Color.gray}
        onChangeText={onChangeText}
      />
    </View>
  );
};

export default FormTextInput;
const styles = StyleSheet.create({
  textInput: {
    borderBottomColor: "#000",
    borderBottomWidth: 1,
    fontFamily: "MPlusRegular",
  },
});
