import { ReactNode } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { StyledH3 } from "./Text/StyledText";
import { X } from "phosphor-react-native";

export type TagData = {
  label: string;
  color: string;
  emoji: ReactNode;
};

// // temporary list of hobbies (need to make a more comprehensive list later)
// const hobbies = ["biking", "baking", "badminton", "boxing"];
// export type Hobby = (typeof hobbies)[number];

// export interface HobbyTagData extends TagData {
//   label: Hobby;
// }

export const HOBBY_TAGS: TagData[] = [
  { label: "biking", color: "#94A5FF", emoji: "🚴" },
  { label: "baking", color: "#A494FF", emoji: "🍰" },
  { label: "badminton", color: "#FF9494", emoji: "🏸" },
  { label: "boxing", color: "#FFC994", emoji: "🥊" },
];

type Props = { tagData: TagData; onRemoveTag: any };

const Tag = ({ tagData, onRemoveTag }: Props) => {
  return (
    <View style={[styles.tagContainer, {backgroundColor: tagData.color}]}>
      <TouchableOpacity
        onPress={() => {
            onRemoveTag(tagData);
        }}
      >
        <X size={15} color="black" weight="bold" />
      </TouchableOpacity>
      <StyledH3 text={tagData.label + " " + tagData.emoji} style={styles.tagLabel} />
    </View>
  );
};

export default Tag;

const styles = StyleSheet.create({
  tagContainer: {
    paddingVertical: 2,
    paddingHorizontal: 8,
    borderRadius: 5,
    flexDirection: "row",
    gap: 5,
    alignItems: "center",
  },
  tagLabel: {
    color: "black"
  }
});
