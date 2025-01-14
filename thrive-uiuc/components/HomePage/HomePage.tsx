import { StyleSheet, Text, useWindowDimensions, View } from "react-native";
import sharedStyles from "../../styles/SharedStyles";
import React from "react";
import HomePageButton from "./HomePageButton";
import { StyledH2, StyledH3, StyledH4 } from "../sharedComponents/Text/StyledText";
import ProfilePreviewBox from "./ProfilePreviewBox";
import Color from "../../styles/Color";
import { ScrollView } from "react-native-gesture-handler";
import { ProfileSettings } from "../../utils/types";
import NavBar from "../sharedComponents/NavBar";
type HomePageProps = {
  setCurrentPage: any;
};

const profileData: ProfileSettings[] = [
  {
    id: "1",
    name: "Lei",
    year: null,
    major: null,
    introduction: "",
    hobbies: [],
    classes: [],
  },
  {
    id: "2",
    name: "Dhanish",
    year: null,
    major: null,
    introduction: "",
    hobbies: [],
    classes: [],
  },
  {
    id: "3",
    name: "Harith",
    year: null,
    major: null,
    introduction: "",
    hobbies: [],
    classes: [],
  },
  {
    id: "4",
    name: "Sally",
    year: null,
    major: null,
    introduction: "",
    hobbies: [],
    classes: [],
  },
  {
    id: "5",
    name: "Steven",
    year: null,
    major: null,
    introduction: "",
    hobbies: [],
    classes: [],
  },
  {
    id: "6",
    name: "Josephine",
    year: null,
    major: null,
    introduction: "",
    hobbies: [],
    classes: [],
  },
  {
    id: "7",
    name: "Extremely super duper long test string tomakesurethattheoverflowstylingiscorrectfortestingpurposes",
    year: null,
    major: null,
    introduction: "",
    hobbies: [],
    classes: [],
  },
  {
    id: "8",
    name: "Marley",
    year: null,
    major: null,
    introduction: "",
    hobbies: [],
    classes: [],
  },
  {
    id: "9",
    name: "Kendrick Lamar",
    year: null,
    major: null,
    introduction: "",
    hobbies: [],
    classes: [],
  },
  {
    id: "10",
    name: "Peter L. Smithson",
    year: null,
    major: null,
    introduction: "",
    hobbies: [],
    classes: [],
  },
  {
    id: "11",
    name: "Bartholomew Huckleberry",
    year: null,
    major: null,
    introduction: "",
    hobbies: [],
    classes: [],
  },
  {
    id: "12",
    name: "V",
    year: null,
    major: null,
    introduction: "",
    hobbies: [],
    classes: [],
  },
  {
    id: "13",
    name: "William",
    year: null,
    major: null,
    introduction: "",
    hobbies: [],
    classes: [],
  },
];

const HomePage = (props: HomePageProps) => {
  const { setCurrentPage } = props;
  const meetNewStudentsButtonLabel = "Meet New Students 👋";
  const startStudySessionButtonLabel = "Start a Study Session 📚";
  const ongoingStudySessionsHeading = "Ongoing Study Sessions";
  const yourNetworkHeading = "Your Network";
  const { width } = useWindowDimensions();

  return (
    <View>
      <ScrollView overScrollMode="never" contentContainerStyle={styles.scrollContainer}>
        <View style={[sharedStyles.pageContainer, styles.homePage]}>
          <View style={styles.homePageButtons}>
            <HomePageButton
              label={meetNewStudentsButtonLabel}
              onPress={() => {
                setCurrentPage("meet-new-students-page");
              }}
            />
            <HomePageButton
              label={startStudySessionButtonLabel}
              onPress={() => {
                setCurrentPage("meet-new-students-page");
              }}
            />
          </View>
          <StyledH2 text={ongoingStudySessionsHeading} />
          <OngoingStudySessionsBox />
          <StyledH2 text={yourNetworkHeading} />
          <YourNetworkBox width={width} />
        </View>
      </ScrollView>
      <NavBar setCurrentPage={setCurrentPage} />
    </View>
  );
};

type OngoingStudySessionBoxProps = {};

const OngoingStudySessionsBox = (props: OngoingStudySessionBoxProps) => {
  const defaultText = "There are no ongoing public study sessions.";
  return (
    <View style={styles.ongoingStudySessionsBox}>
      <StyledH3 style={styles.ongoingStudySessionsBoxText} text={defaultText} />
    </View>
  );
};

type YourNetworkBoxProps = {
  width: number;
};
const YourNetworkBox = (props: YourNetworkBoxProps) => {
  const { width } = props;
  return (
    <View style={[styles.profileList, { width: width * 0.8 }]}>
      {profileData.map((item, index) => (
        <ProfilePreviewBox profileName={item.name} key={index} width={width} />
      ))}
    </View>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  homePageButtons: {
    gap: 10,
  },
  scrollContainer: {
    backgroundColor: Color.darkestBlue,
    minHeight: "100%",
    paddingTop: 20,
  },
  homePage: {
    gap: 30,
  },
  profileList: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    rowGap: 10,
    columnGap: 10,
    marginLeft: 10
  },
  ongoingStudySessionsBox: {
    backgroundColor: Color.darkBlue,
    width: "70%",
    borderRadius: 20,
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
  ongoingStudySessionsBoxText: {
    textAlign: "center",
    color: Color.blue,
  },
});
