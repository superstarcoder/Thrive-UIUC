import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View } from "react-native";
import React from "react";
import { ProfileSettings } from "../../utils/types";
import PageHeader from "../sharedComponents/PageHeader";
import Color from "../../styles/Color";
import sharedStyles from "../../styles/SharedStyles";
import { PageName } from "../../App";
import ProfileCard from "../sharedComponents/ProfileCard";

type Props = {
  currentPage: PageName;
  profileSettings: ProfileSettings;
  ownProfile: boolean;
  handleBackAction: () => boolean;
};

const ProfilePage = (props: Props) => {
  const { ownProfile, profileSettings, handleBackAction } = props;
  return (
    <SafeAreaView style={sharedStyles.androidSafeAreaContainer}>
      <StatusBar barStyle="light-content" backgroundColor={Color.darkestBlue} />
      <PageHeader
        header={ownProfile ? "My Profile" : "User Profile"}
        isBackButtonPresent={true}
        handleBackAction={handleBackAction}
      />
      <ScrollView overScrollMode="auto" contentContainerStyle={styles.scrollContainer}>
				<View style={styles.profileCardArea}>
					<ProfileCard
						profileSettings={profileSettings}
						truncated={false}
						connectable={false}
						fullProfile={true}
						ownProfile={false}
						// FIXME: need to check if the other profile's user is in the current user's network or not
						// whether here or elsewhere. Defaulting it to true for now until backend integration happens
						connected={true}
						setCurrentlyViewingProfileSettings={() => {}}
						setCurrentPage={() => {}}
					/>
				</View>
			</ScrollView>
    </SafeAreaView>
  );
};

export default ProfilePage;

const styles = StyleSheet.create({
	scrollContainer: {
    backgroundColor: Color.darkestBlue,
    minHeight: "100%",
  },
	profileCardArea: {
		paddingTop: 10,
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
	},
});
