import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { StyledH1, StyledH2, StyledH3, StyledH4 } from "./Text/StyledText";
import Color from "../../styles/Color";

type Props = {
    label: string;
    textSize?: "H1" | "H2" | "H3" | "H4";
};

const ClassTag = ({ label, textSize = "H4" }: Props) => {
    return (
        <View style={styles.tagContainer}>
            {textSize == "H1" && (<StyledH1 text={label} style={styles.tagLabel} />)}
            {textSize == "H2" && (<StyledH2 text={label} style={styles.tagLabel} />)}
            {textSize == "H3" && (<StyledH3 text={label} style={styles.tagLabel} />)}
            {textSize == "H4" && (<StyledH4 text={label} style={styles.tagLabel} />)}
        </View>
    );
};

export default ClassTag;

const styles = StyleSheet.create({
    tagContainer: {
        backgroundColor: Color.blue,
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