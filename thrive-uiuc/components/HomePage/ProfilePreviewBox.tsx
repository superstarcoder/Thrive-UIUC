import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import Color from "../../styles/Color";
import { StyledH4 } from "../sharedComponents/Text/StyledText";
type Props = {
    profileName: string
};

const ProfilePreviewBox = (props: Props) => {
    const { profileName } = props;
    return (
        <View style={styles.profile}>
            <Image source={require("../../assets/testing/DefaultProfileImage.jpg")} style={styles.profileImage} />
            <StyledH4 numberOfLines={1} text={profileName} style={styles.profileText}/>
        </View>
    );
};

export default ProfilePreviewBox;

const styles = StyleSheet.create({
    profile: {
        backgroundColor: Color.darkBlue,
        width: 120,
        height: 80,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
        gap: 7
    },
    profileImage: {
        width: 35,
        height: 35,
        borderRadius: 50
    },
    profileText: {
        textAlign: "justify",
        paddingHorizontal: 8,
        
    }
});