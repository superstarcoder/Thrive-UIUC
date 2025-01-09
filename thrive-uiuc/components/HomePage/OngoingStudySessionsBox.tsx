import { StyleSheet, Text, View } from "react-native";
import Color from "../../styles/Color";
import React from "react";
import { StyledH4 } from "../sharedComponents/Text/StyledText";

type Props = {};

const OngoingStudySessionsBox = (props: Props) => {
    const defaultText = "There are no ongoing public study sessions."
    return (
        <View style={styles.ongoingStudySessionsBox}>
            <StyledH4 style={styles.ongoingStudySessionsBoxText} text={defaultText} />
        </View>
    );
};

export default OngoingStudySessionsBox;

const styles = StyleSheet.create({
    ongoingStudySessionsBox: {
        backgroundColor: Color.darkBlue,
        width: "60%",
        borderRadius: 20,
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 30,
        paddingRight: 30
    },
    ongoingStudySessionsBoxText: {
        textAlign: "center",
        color: Color.blue
    }
});