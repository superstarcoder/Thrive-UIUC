import { ReactNode } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { StyledH1, StyledH2, StyledH3, StyledH4 } from "./Text/StyledText";
import { X } from "phosphor-react-native";
import Color from "../../styles/Color";

export type TagData = {
    label: string;
    color: string;
    emoji: ReactNode;
};

// used to pair hobbies list of labels with other styling properties for the tag (eg: color, emoji, etc)
export const HOBBY_TAG_DATA: TagData[] = [
    { label: "biking", color: "#94A5FF", emoji: "🚴" },
    { label: "baking", color: "#A494FF", emoji: "🍰" },
    { label: "badminton", color: "#FF9494", emoji: "🏸" },
    { label: "boxing", color: "#FFC994", emoji: "🥊" },
];

export const tagDataLookup = (
    label: string,
    tagDataLookupList: TagData[] | undefined
) => {
    return tagDataLookupList?.find((obj) => obj.label == label);
};

type Props = {
    label: string;
    onRemoveTag?: any;
    tagDataLookupList?: TagData[] | undefined;
    canRemove?: boolean;
    textSize?: "H1" | "H2" | "H3" | "H4";
};

const Tag = ({
    label,
    onRemoveTag = () => { },
    tagDataLookupList = undefined,
    canRemove = true,
    textSize = "H3",
}: Props) => {
    let tagData: TagData = tagDataLookup(label, tagDataLookupList) || {
        label,
        color: Color.blue,
        emoji: "",
    };
    return (
        <View style={[styles.tagContainer, { backgroundColor: tagData?.color }]}>
            {canRemove && (
                <TouchableOpacity
                    onPress={() => {
                        onRemoveTag(label);
                    }}
                >
                    <X
                        size={textSize == "H1" ? 25 : textSize == "H2" ? 20 : textSize == "H3" ? 15 : textSize == "H4" ? 10 : 10}
                        color="black"
                        weight="bold"
                    />
                </TouchableOpacity>
            )}
            {textSize == "H1" && 
                <Text>
                    <StyledH1 text={tagData?.label} style={styles.tagLabel} />
                    <StyledH1 text={" " + tagData?.emoji} style={styles.tagLabel} />
                </Text>
            }
            {textSize == "H2" && 
                <Text>
                    <StyledH2 text={tagData?.label} style={styles.tagLabel} />
                    <StyledH2 text={" " + tagData?.emoji} style={styles.tagLabel} />
                </Text>
            }
            {textSize == "H3" && 
                <Text>
                    <StyledH3 text={tagData?.label} style={styles.tagLabel} />
                    <StyledH3 text={" " + tagData?.emoji} style={styles.tagLabel} />
                </Text>
            }
            {textSize == "H4" && 
                <Text>
                    <StyledH4 text={tagData?.label} style={styles.tagLabel} />
                    <StyledH4 text={" " + tagData?.emoji} style={styles.tagLabel} />
                </Text>
            }
        </View>
    );
};

export default Tag;

const styles = StyleSheet.create({
    tagContainer: {
        // paddingVertical: 2,
        paddingHorizontal: 8,
        borderRadius: 5,
        flexDirection: "row",
        gap: 5,
        alignItems: "center",
        height: 30,
    },
    tagLabel: {
        color: "black",
    },
});
