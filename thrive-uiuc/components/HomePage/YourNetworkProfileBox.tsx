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
            <StyledH4 text={profileName} style={styles.profileText}/>
        </View>
    );
};

export default YourNetworkProfileBox;

const styles = StyleSheet.create({
    profile: {
        backgroundColor: Color.darkBlue,
        width: 100,
        height: 80,
        // marginTop: 10,
        // marginRight: 10,
        alignItems: "center",
        justifyContent: "center",
    },
    profileImage: {
        width: 25,
        height: 25,
        // margin: 5,
        borderRadius: 10
    },
    profileText: {
        // margin: 5,
        textAlign: "center"
    }
});