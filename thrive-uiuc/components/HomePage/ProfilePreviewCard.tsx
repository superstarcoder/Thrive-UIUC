import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Color from "../../styles/Color";
import { StyledH4 } from "../sharedComponents/Text/StyledText";
import { truncateText } from "../../utils/utils";
import { ProfileSettings } from "../../utils/types";
import { PageName } from "../../App";

type Props = {
  profileSettings: ProfileSettings;
	setCurrentPage: (page: PageName) => void;
	setCurrentlyViewingProfileSettings: (profileSettings: ProfileSettings) => void;
  width: number;
};

const ProfilePreviewCard = (props: Props) => {
  const { profileSettings, width, setCurrentlyViewingProfileSettings, setCurrentPage } = props;
	const cardWidth = width * 0.4 - 10;
	const charactersPerLine = Math.round(cardWidth / 7.5);

	const navigateToProfilePage = (profileSettings: ProfileSettings) => {
		setCurrentlyViewingProfileSettings(profileSettings);
		setCurrentPage("profile-page");
	}

  return (
    <TouchableOpacity
			onPress={() => navigateToProfilePage(profileSettings)}
		>
      <View style={[styles.profile, { width: width * 0.4 - 10 }]}>
        <Image source={require("../../assets/testing/DefaultProfileImage.jpg")} style={styles.profileImage} />
        <StyledH4 numberOfLines={1} text={truncateText(profileSettings.name, true, charactersPerLine)} style={styles.profileText} />
      </View>
    </TouchableOpacity>
  );
};

export default ProfilePreviewCard;

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
