import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import FormTextInput from "./FormTextInput";
import Tag, { TagData } from "../Tag";
import Color from "../../../styles/Color";
import { StyledH3, StyledH4 } from "../Text/StyledText";

const calculateSimilarity = (input: string, option: string): number => {
  let matches = 0;
  for (let i = 0; i < input.length; i++) {
    if (option[i] === input[i]) matches++;
  }
  return matches / option.length;
};

// Function to filter and sort the tags
const filterTags = (
  input: string,
  tags: TagData[],
  selectedTags: TagData[]
): TagData[] => {
  if (!input) return [];
  const lowercaseInput = input.toLowerCase();
  // Create a set of selected labels for faster lookup
  const selectedLabels = new Set(
    selectedTags.map((tag) => tag.label.toLowerCase())
  );

  return tags
    .filter((tag) => !selectedLabels.has(tag.label.toLowerCase()))
    .map((tag) => ({
      ...tag,
      similarity: calculateSimilarity(lowercaseInput, tag.label.toLowerCase()),
    }))
    .sort((a, b) => b.similarity - a.similarity);
};

type Props = {
  isMultiselect: boolean;
  onAddTag: any;
  onRemoveTag: any;
  allTags: TagData[];
  selectedTags: TagData[];
};

const TextInputDropDown = ({
  isMultiselect,
  onAddTag,
  onRemoveTag,
  allTags,
  selectedTags,
}: Props) => {
  const [filteredTags, setFilteredTags] = useState<TagData[]>([]);
  const [textInputString, setTextInputString] = useState<string>("");

  const onChangeText = (newText: string) => {
    setTextInputString(newText);
    setFilteredTags(filterTags(newText, allTags, selectedTags));
  };

  return (
    <View style={styles.container}>
      <View>
        <FormTextInput
          onChangeText={onChangeText}
          placeholderText="type here"
          text={textInputString}
        />
        <ScrollView style={styles.dropdownContainer}>
          {filteredTags.length > 0 && (
            <View style={styles.dropdown}>
              {filteredTags.map((item) => (
                <TouchableOpacity
                  key={item.label}
                  style={styles.option}
                  onPress={() => {
                    onAddTag(item);
                  }}
                >
                  <StyledH3
                    style={styles.optionText}
                    text={item.label + " " + item.emoji}
                  />
                </TouchableOpacity>
              ))}
            </View>
          )}
        </ScrollView>
      </View>

      <View style={styles.tagsContainer}>
        {selectedTags.length > 0 && (
          <>
            {selectedTags.map((tagData) => (
              <Tag
                tagData={tagData}
                onRemoveTag={onRemoveTag}
                key={tagData.label}
              />
            ))}
          </>
        )}
      </View>
    </View>
  );
};

export default TextInputDropDown;

const optionHeight = 30;
const numOptionsDisplayed = 3;
const dropdownOptionsGap = 2;

const styles = StyleSheet.create({
  option: {
    backgroundColor: Color.gray,
    paddingHorizontal: 3,
    textAlignVertical: "center",
    justifyContent: "center",
    height: optionHeight,
  },
  optionText: {
    color: Color.lightgray,
  },
  dropdown: {
    gap: dropdownOptionsGap,
  },
  dropdownContainer: {
    maxHeight:
      optionHeight * numOptionsDisplayed +
      dropdownOptionsGap * (numOptionsDisplayed - 1),
    width: "60%",
  },
  tagsContainer: {
    flexWrap: "wrap",
    display: "flex",
    flexDirection: "row",
    gap: 4,
  },
  container: {
    display: "flex",
    flexDirection: "column",
    gap: 4,
  },
});
