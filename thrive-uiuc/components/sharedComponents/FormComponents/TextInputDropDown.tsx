import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import FormTextInput from "./FormTextInput";
import Tag, { HOBBY_TAG_DATA, TagData, tagDataLookup } from "../Tag";
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
  newText: string,
  allTagLabels: string[],
  selectedTagLabels: string[]
): string[] => {
  if (!newText) return [];

  const lowercaseInput = newText.toLowerCase();
  // Create a set of selected tags for faster lookup
  const selectedSet = new Set(
    selectedTagLabels.map((tag) => tag.toLowerCase())
  );

  return allTagLabels
    .filter((tag) => !selectedSet.has(tag.toLowerCase())) // Exclude selected tags
    .map((tag) => ({
      tag, // Keep original tag for returning later
      similarity: calculateSimilarity(lowercaseInput, tag.toLowerCase()),
    }))
    .sort((a, b) => b.similarity - a.similarity) // Sort by similarity score (descending)
    .map((item) => item.tag); // Return only the sorted tags
};

type Props = {
  isMultiselect: boolean;
  onAddTag: any;
  onRemoveTag: any;
  allTagLabels: string[];
  selectedTagLabels: string[];
  tagDataLookupList: TagData[];
};

const TextInputDropDown = ({
  isMultiselect,
  onAddTag,
  onRemoveTag,
  allTagLabels,
  selectedTagLabels,
  tagDataLookupList,
}: Props) => {
  const [filteredTags, setFilteredTags] = useState<string[]>([]);
  const [textInputString, setTextInputString] = useState<string>("");

  const onChangeText = (newText: string) => {
    setTextInputString(newText);
    setFilteredTags(filterTags(newText, allTagLabels, selectedTagLabels));
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
              {!filteredTags.includes(textInputString) && (
                <TouchableOpacity
                  key={textInputString}
                  style={styles.option}
                  onPress={() => {
                    onAddTag(textInputString);
                  }}
                >
                  <StyledH3 style={styles.optionText} text={textInputString} />
                </TouchableOpacity>
              )}

              {filteredTags.map((item) => (
                <TouchableOpacity
                  key={item}
                  style={styles.option}
                  onPress={() => {
                    onAddTag(item);
                  }}
                >
                  <StyledH3 style={styles.optionText} text={item} />
                  {tagDataLookup(item, tagDataLookupList)?.emoji !=
                    undefined && (
                    <StyledH3
                      style={styles.optionText}
                      text={"" + tagDataLookup(item, tagDataLookupList)?.emoji}
                    />
                  )}
                </TouchableOpacity>
              ))}
            </View>
          )}
        </ScrollView>
      </View>

      <View style={styles.tagsContainer}>
        {selectedTagLabels.length > 0 && (
          <>
            {selectedTagLabels.map((tagLabel) => (
              <Tag
                label={tagLabel}
                tagDataLookupList={tagDataLookupList}
                onRemoveTag={onRemoveTag}
                key={tagLabel}
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
    paddingHorizontal: 7,
    textAlignVertical: "center",
    alignItems: "center",
    height: optionHeight,
    flexDirection: "row",
    gap: 7,
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
