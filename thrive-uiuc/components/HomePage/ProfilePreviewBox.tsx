import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import Color from "../../styles/Color";
import { StyledH4 } from "../sharedComponents/Text/StyledText";
type Props = {
  profileName: string;
  width: number;
};

const ProfilePreviewBox = (props: Props) => {
  const { profileName, width } = props;
  return (
    <View style={[styles.profile, { width: width * 0.4 - 10 }]}>
      <Image source={require("../../assets/testing/DefaultProfileImage.jpg")} style={styles.profileImage} />
      <StyledH4 numberOfLines={1} text={profileName} style={styles.profileText} />
    </View>
  );
};

export default ProfilePreviewBox;

const styles = StyleSheet.create({
  profile: {
    paddingVertical: 20,
    backgroundColor: Color.darkBlue,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    gap: 7,
  },
  profileImage: {
    width: 35,
    height: 35,
    borderRadius: 50,
  },
  profileText: {
    textAlign: "justify",
    paddingHorizontal: 8,
  },
});
