import { StyleSheet, Text, useWindowDimensions, View } from "react-native";
import sharedStyles from "../../styles/SharedStyles";
import React from "react";
import HomePageButton from "./HomePageButton";
import StudySessionPreviewCard from "./StudySessionPreviewCard";
import { StyledH1, StyledH2, StyledH3, StyledH4 } from "../sharedComponents/Text/StyledText";
import ProfilePreviewBox from "./ProfilePreviewCard";
import Color from "../../styles/Color";
import { ScrollView } from "react-native-gesture-handler";
import { ProfileSettings, StudySessionSettings } from "../../utils/types";
import NavBar from "../sharedComponents/NavBar";
import { PageName } from "../../App";

type HomePageProps = {
  currentPage: PageName;
  setCurrentPage: (page: PageName) => void;
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

const studySessionData: StudySessionSettings[] = [
  {
    id: "1",
    name: "test1",
    minPeople: 1,
    maxPeople: 2,
    startTime: new Date(Date.now() + 80400000),
    endTime: new Date(Date.now() + 262800000),
    location: "Grainger Library",
  },
  {
    id: "2",
    name: "test2",
    minPeople: 1,
    maxPeople: 1,
    startTime: new Date(Date.now() + 804000000),
    endTime: new Date(Date.now() + 962800000),
    location: "Funk ACES Library",
  },
];

const HomePage = (props: HomePageProps) => {
  const { currentPage, setCurrentPage } = props;
  const homePageHeadingLabel = "Home";
  const meetNewStudentsButtonLabel = "Meet New Students 👋";
  const startStudySessionButtonLabel = "Start a Study Session 📚";
  const ongoingStudySessionsHeading = "Ongoing Study Sessions";
  const yourNetworkHeading = "Your Network";
  const { width } = useWindowDimensions();

  return (
    <View>
      <ScrollView overScrollMode="never" contentContainerStyle={styles.scrollContainer}>
        <View style={[sharedStyles.pageContainer, styles.homePage]}>
          <StyledH1 text={homePageHeadingLabel} style={{ textAlign: "center" }} />
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
          <OngoingStudySessionsBox studySessionData={studySessionData} width={width} />
          <StyledH2 text={yourNetworkHeading} />
          <YourNetworkBox profileData={profileData} width={width} />
        </View>
      </ScrollView>
      <NavBar currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </View>
  );
};

type OngoingStudySessionBoxProps = {
  studySessionData: StudySessionSettings[];
  width: number;
};

const OngoingStudySessionsBox = (props: OngoingStudySessionBoxProps) => {
  const { studySessionData, width } = props;
  const studySessionExists = studySessionData.length > 0;
  const defaultText = "There are no ongoing public study sessions.";
  return (
    <View>
      {!studySessionExists && (
        <View style={styles.ongoingStudySessionsBoxNoSessions}>
          <StyledH3 style={styles.ongoingStudySessionsBoxText} text={defaultText} />
        </View>
      )}
      {studySessionExists && (
        <View>
          <View style={[styles.profileList, { width: width * 0.8 }]}>
            {studySessionData.map((item, index) => (
              <StudySessionPreviewCard sessionInfo={studySessionData[index]} width={width} key={index} />
            ))}
          </View>
        </View>
      )}
    </View>
  );
};

type YourNetworkBoxProps = {
  profileData: ProfileSettings[];
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
  },
  homePage: {
    gap: 30,
    paddingBottom: 60,
  },
  profileList: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    rowGap: 10,
    columnGap: 10,
    marginLeft: 10,
  },
  ongoingStudySessionsBoxNoSessions: {
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
