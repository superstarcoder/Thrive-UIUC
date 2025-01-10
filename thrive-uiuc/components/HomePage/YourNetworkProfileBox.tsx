import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import Color from "../../styles/Color";
import { StyledH4 } from "../sharedComponents/Text/StyledText";

type Props = {
    profileName: string
};

const YourNetworkProfileBox = (props: Props) => {
    const { profileName } = props;
    return (
        <View style={styles.profile}>
            <Image source={require("../../assets/logos/uiuc-logo.png")} style={styles.profileImage} />
            <StyledH4 numberOfLines={1} text={profileName} style={styles.profileText}/>
        </View>
    );
};

export default YourNetworkProfileBox;

const styles = StyleSheet.create({
    profile: {
        backgroundColor: Color.darkBlue,
        width: 120,
        height: 80,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10
    },
    profileImage: {
        width: 25,
        height: 25,
        borderRadius: 10
    },
    profileText: {
        textAlign: "center",
    }

});