import { StyleSheet, Text, View } from "react-native";
import React, { ReactNode } from "react";
import Color from "../../../styles/Color";

type Props = {
  children: ReactNode;
};

const FormFieldContainer = ({ children }: Props) => {
  return <View style={styles.formFieldContainerStyle}>{children}</View>;
};

export default FormFieldContainer;

const styles = StyleSheet.create({
  formFieldContainerStyle: {
    backgroundColor: Color.darkestBlue,
    display: "flex",
    flexDirection: "column",
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderRadius: 20,
    gap: 7,
  },
});
