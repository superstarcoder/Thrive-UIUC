import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { StyledH2, StyledH3 } from "../Text/StyledText";
import Color from "../../../styles/Color";
import { Check, CheckSquare, Square } from "phosphor-react-native";

type Props = {
  options: string[];
  onSelect: any;
  selectedOption: string | null;
};

const MultipleChoice = ({ options, onSelect, selectedOption }: Props) => {
  return (
    <View style={styles.multipleChoiceContainer}>
      {options.map((option, index) => (
        <TouchableOpacity key={index} onPress={() => onSelect(option)} style={styles.selectionOption}>
          {selectedOption === option ? (
            <CheckSquare size={25} color={Color.lightgray} weight="fill" />
          ) : (
            <Square size={25} color={Color.lightgray} />
          )}

          <StyledH3 text={option} style={styles.selectionOptionText} />
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default MultipleChoice;

const styles = StyleSheet.create({
  multipleChoiceContainer: {
    display: "flex",
    flexDirection: "column",
    gap: 8,
  },
  selectionOption: {
    display: "flex",
    flexDirection: "row",
    paddingVertical: 6,
    paddingHorizontal: 20,
    backgroundColor: Color.gray,
    width: "80%",
    gap: 10,
  },
  selectionOptionText: {
    color: Color.lightgray,
  },
});
