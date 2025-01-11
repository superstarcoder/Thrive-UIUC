import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Class, Hobby, ProfileSettings, Year } from "../../utils/types";
import sharedStyles from "../../styles/SharedStyles";
import { StyledH1, StyledH4 } from "./Text/StyledText";
import Color from "../../styles/Color";

// truncated: true (default) = introduction cut off, false = introduction fully shown
// connectable: true (default) = connect/ignore buttons shown, false = connect/ignore buttons hidden
type ProfileCardProps = {
    profileSettings: ProfileSettings,
    truncated?: boolean,
    connectable?: boolean,
};

const ProfileCard = ({ profileSettings, truncated = true, connectable = true }: ProfileCardProps) => {
    return (
        <View style={styles.profileCard}>
            <ProfileHeader name={profileSettings.name} year={profileSettings.year} />
        </View>
    );
};

export default ProfileCard;

type ProfileHeaderProps = {
    name: string,
    year: Year | null
}

const ProfileHeader = (props: ProfileHeaderProps) => {
    const { name, year } = props
    return (
        <View style={styles.profileCardHeader}>
            <Image source={require("../../assets/testing/DefaultProfileImage.jpg")} style={styles.profileImage} />
            <View>
                <StyledH1 text={name} />
                <StyledH4 text={year} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    profileCard: {
        backgroundColor: Color.darkBlue,
        width: 300,
        borderRadius: 5,
        gap: 10
    },
    profileCardHeader: {
        display: "flex",
        flexDirection: "row",
        paddingHorizontal: 20,
        paddingVertical: 10,
        gap: 10,
        verticalAlign: "middle"
    },
    profileImage: {
        width: 35,
        height: 35,
        borderRadius: 50
    },
});
