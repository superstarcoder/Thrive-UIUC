import { GestureResponderEvent, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Class, Hobby, Major, ProfileSettings, Year } from "../../utils/types";
import sharedStyles from "../../styles/SharedStyles";
import { StyledH2, StyledH3, StyledH4 } from "./Text/StyledText";
import Color from "../../styles/Color";
import Tag, { HOBBY_TAG_DATA } from "./Tag";

// truncated: true (default) = introduction cut off, false = introduction fully shown
// connectable: true (default) = connect/ignore buttons shown, false = connect/ignore buttons hidden
type ProfileCardProps = {
  profileSettings: ProfileSettings;
  truncated?: boolean;
  connectable?: boolean;
};

const ProfileCard = ({ profileSettings, truncated = true, connectable = true }: ProfileCardProps) => {
  return (
    <View style={styles.profileCard}>
      <View style={styles.profileDetails}>
        <ProfileHeader name={profileSettings.name} year={profileSettings.year} />
        <MajorArea major={profileSettings.major} />
        <ClassesArea classes={profileSettings.classes} />
        <HobbiesArea hobbies={profileSettings.hobbies} />
        <IntroArea
          introduction={profileSettings.introduction}
          truncated={truncated}
          onViewFullProfilePress={() => null}
        />
        {connectable && <ConnectIgnoreArea onConnectPress={() => null} onIgnorePress={() => null} />}
      </View>
    </View>
  );
};

export default ProfileCard;

type ProfileHeaderProps = {
  name: string;
  year: Year | null;
};

const ProfileHeader = (props: ProfileHeaderProps) => {
  const { name, year } = props;
  return (
    <View style={styles.profileCardHeader}>
      <Image source={require("../../assets/testing/DefaultProfileImage.jpg")} style={styles.profileImage} />
      <View>
        <StyledH2 text={name} numberOfLines={1} ellipsizeMode="tail" />
        <StyledH4 text={year} style={styles.profileCardHeaderYearText} />
      </View>
    </View>
  );
};

type MajorAreaProps = {
  major: Major | null;
};

const MajorArea = (props: MajorAreaProps) => {
  const { major } = props;
  const majorAreaLabel = "Major: ";
  return (
    <View style={styles.profileCardMajorArea}>
      <Text>
        <StyledH4 text={majorAreaLabel} style={{ flex: 1 }} />
        <StyledH4 text={major} style={styles.profileCardMajor} />
      </Text>
    </View>
  );
};

type ClassesAreaProps = {
  classes: Class[];
};

const ClassesArea = (props: ClassesAreaProps) => {
  const { classes } = props;
  const classesAreaLabel = "Classes: ";
  return (
    <View style={styles.profileCardClassesArea}>
      <View style={styles.profileCardClassesAreaList}>
        <StyledH4 text={classesAreaLabel} style={{ paddingTop: 7 }} />
        {classes.map((item, index) => (
          <Tag label={item} key={index} TextComponent={StyledH4} canRemove={false} />
        ))}
      </View>
    </View>
  );
};

type HobbiesAreaProps = {
  hobbies: Hobby[];
};

const HobbiesArea = (props: HobbiesAreaProps) => {
  const { hobbies } = props;
  const hobbiesAreaLabel = "Hobbies: ";
  return (
    <View style={styles.profileCardHobbiesArea}>
      <View style={styles.profileCardHobbiesAreaList}>
        <StyledH4 text={hobbiesAreaLabel} style={{ paddingTop: 7 }} />
        {hobbies.map((item, index) => (
          <Tag label={item} tagDataLookupList={HOBBY_TAG_DATA} key={index} canRemove={false} TextComponent={StyledH4} />
        ))}
      </View>
    </View>
  );
};

type IntroAreaProps = {
  introduction: string;
  truncated: boolean;
  onViewFullProfilePress: (event: GestureResponderEvent) => void;
};

const IntroArea = (props: IntroAreaProps) => {
  const { introduction, truncated, onViewFullProfilePress } = props;
  const introAreaLabel = "Intro: ";
  const viewFullProfileButtonLabel = "View Full Profile";

  return (
    <View style={styles.profileCardIntroArea}>
      <Text numberOfLines={truncated ? 2 : 0} ellipsizeMode="tail">
        <StyledH4 text={introAreaLabel} />
        <StyledH4 text={introduction} style={styles.profileCardIntroAreaBodyText} />
      </Text>
      {truncated ? (
        <View style={{ alignItems: "center" }}>
          <TouchableOpacity
            style={[sharedStyles.blueButton, styles.profileCardViewFullProfileButton]}
            onPress={onViewFullProfilePress}
          >
            <StyledH4 style={styles.profileCardViewFullProfileButtonText} text={viewFullProfileButtonLabel} />
          </TouchableOpacity>
        </View>
      ) : null}
    </View>
  );
};

type ConnectIgnoreAreaProps = {
  onConnectPress: (event: GestureResponderEvent) => void;
  onIgnorePress: (event: GestureResponderEvent) => void;
};

const ConnectIgnoreArea = (props: ConnectIgnoreAreaProps) => {
  const { onConnectPress, onIgnorePress } = props;
  const connectButtonLabel = "Connect";
  const ignoreButtonLabel = "Ignore";
  return (
    <View style={styles.profileCardConnectIgnoreArea}>
      <TouchableOpacity style={[sharedStyles.blueButton, { minWidth: 100 }]} onPress={onConnectPress}>
        <StyledH3 style={styles.profileCardConnectIgnoreButtonText} text={connectButtonLabel} />
      </TouchableOpacity>
      <TouchableOpacity
        style={[sharedStyles.blueButton, { minWidth: 100, paddingHorizontal: 20, backgroundColor: Color.orange }]}
        onPress={onIgnorePress}
      >
        <StyledH3 style={styles.profileCardConnectIgnoreButtonText} text={ignoreButtonLabel} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  profileCard: {
    minWidth: "100%",
    backgroundColor: Color.darkBlue,
    borderRadius: 17,
  },
  profileDetails: {
    marginBottom: 15,
    gap: 5,
  },
  profileCardHeader: {
    flexDirection: "row",
    gap: 18,
    marginTop: 20,
    verticalAlign: "middle",
  },
  profileImage: {
    width: 45,
    height: 45,
    borderRadius: 50,
    marginLeft: 20,
  },
  profileCardHeaderYearText: {
    marginLeft: 1,
    color: Color.blue,
  },
  profileCardMajorArea: {
    marginTop: 8,
    paddingHorizontal: 23,
    flexDirection: "row",
  },
  profileCardMajor: {
    color: Color.blue,
    flex: 5,
  },
  profileCardClassesArea: {
    paddingLeft: 23,
    paddingRight: 10,
    flexDirection: "row",
    width: "100%",
    flexWrap: "wrap",
  },
  profileCardClassesAreaList: {
    flexDirection: "row",
    gap: 3,
    flexWrap: "wrap",
  },
  profileCardHobbiesArea: {
    paddingLeft: 23,
    paddingRight: 10,
    flexDirection: "row",
    width: "100%",
    flexWrap: "wrap",
  },
  profileCardHobbiesAreaList: {
    flexDirection: "row",
    gap: 3,
    flexWrap: "wrap",
  },
  profileCardIntroArea: {
    paddingHorizontal: 23,
    gap: 9,
    marginBottom: 5,
  },
  profileCardIntroAreaBodyText: {
    color: Color.blue,
  },
  profileCardViewFullProfileButton: {
    width: 120,
    boxShadow: "0px 0px 0px 0px rgba(255,255,255,0.3)",
  },
  profileCardConnectIgnoreArea: {
    flexDirection: "row",
    gap: 7,
    justifyContent: "center",
    marginTop: 5,
    marginBottom: 7,
  },
  profileCardViewFullProfileButtonText: {
    color: "black",
  },
  profileCardConnectIgnoreButtonText: {
    color: "black",
  },
});
