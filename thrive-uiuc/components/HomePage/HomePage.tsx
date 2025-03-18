import { StatusBar, StyleSheet, Text, useWindowDimensions, View } from "react-native";
import sharedStyles from "../../styles/SharedStyles";
import React, { useState } from "react";
import HomePageButton from "./HomePageButton";
import StudySessionPreviewCard from "./StudySessionPreviewCard";
import { StyledH1, StyledH2, StyledH3, StyledH4 } from "../sharedComponents/Text/StyledText";
import ProfilePreviewBox from "./ProfilePreviewCard";
import Color from "../../styles/Color";
import { ScrollView } from "react-native-gesture-handler";
import { ProfileSettings, StudySessionSettings } from "../../utils/types";
import NavBar from "../sharedComponents/NavBar";
import { PageName } from "../../App";
import PageHeader from "../sharedComponents/PageHeader";
import { SafeAreaView } from "react-native";
import StudySesionInfoModal from "../sharedComponents/StudySessionInfoModal";

type HomePageProps = {
  currentPage: PageName;
  studySessionInfoModalVisible: boolean;
  setCurrentPage: (page: PageName) => void;
  setStudySessionInfoModalVisible: (visible: boolean) => void;
  handleBackAction: () => void;
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
    name: "MATH 257 Grind Session Group",
    minPeople: 1,
    maxPeople: 2,
    startTime: new Date(Date.now() + 3600000),
    endTime: new Date(Date.now() + 3600000 * 2),
    location: "Grainger Library",
  },
  {
    id: "2",
    name: "CS 173",
    minPeople: 1,
    maxPeople: 1,
    startTime: new Date(Date.now() + 804000000),
    endTime: new Date(Date.now() + 804000000 + 7200000),
    location: "Funk ACES Library",
  },
];

const HomePage = (props: HomePageProps) => {
  const {
    currentPage,
    studySessionInfoModalVisible,
    setCurrentPage,
    handleBackAction,
    setStudySessionInfoModalVisible,
  } = props;
  const meetNewStudentsButtonLabel = "Meet New Students 👋";
  const startStudySessionButtonLabel = "Start a Study Session 📚";
  const upcomingStudySessionsHeading = "Upcoming Study Sessions";
  const yourNetworkHeading = "Your Network";
  const { width } = useWindowDimensions();
  const [studySessionInfoModalData, setStudySessionInfoModalData] = useState<StudySessionSettings>(studySessionData[0]);

  return (
    <SafeAreaView style={sharedStyles.androidSafeAreaContainer}>
      <StatusBar barStyle="light-content" backgroundColor={Color.darkestBlue} />
      <PageHeader header="Home" handleBackAction={handleBackAction} />
      <StudySesionInfoModal
        sessionInfo={studySessionInfoModalData}
        modalVisible={studySessionInfoModalVisible}
        setModalVisible={setStudySessionInfoModalVisible}
        setCurrentPage={setCurrentPage}
        currentPage="home-page"
      />
      <ScrollView overScrollMode="never" contentContainerStyle={styles.scrollContainer}>
        <View style={[sharedStyles.pageContainer, styles.homePage]}>
          <View style={styles.homePageButtons}>
            {/* Meet New Students Button */}
            <HomePageButton
              label={meetNewStudentsButtonLabel}
              onPress={() => {
                setCurrentPage("meet-new-students-page");
              }}
            />
            {/* Start a Study Session Button */}
            <HomePageButton
              label={startStudySessionButtonLabel}
              onPress={() => {
                setCurrentPage("meet-new-students-page");
              }}
            />
          </View>
          <View style={styles.homePageSectionBox}>
            <StyledH3 text={upcomingStudySessionsHeading} />
            <UpcomingStudySessionsBox
              studySessionData={studySessionData}
              width={width}
              setModalVisible={setStudySessionInfoModalVisible}
              setModalData={setStudySessionInfoModalData}
            />
          </View>
          <View style={styles.homePageSectionBox}>
            <StyledH3 text={yourNetworkHeading} />
            <YourNetworkBox profileData={profileData} width={width} />
          </View>
        </View>
      </ScrollView>
      <NavBar currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </SafeAreaView>
  );
};

type UpcomingStudySessionBoxProps = {
  studySessionData: StudySessionSettings[];
  setModalVisible: (visible: boolean) => void;
  setModalData: (data: StudySessionSettings) => void;
  width: number;
};

const UpcomingStudySessionsBox = (props: UpcomingStudySessionBoxProps) => {
  const { studySessionData, width, setModalVisible, setModalData } = props;
  const studySessionExists = studySessionData.length > 0;
  const defaultText = "You have no upcoming study sessions.";
  function setModalVisibleWithData(visible: boolean, data: StudySessionSettings) {
    setModalVisible(visible);
    setModalData(data);
  }
  return (
    <View>
      {!studySessionExists && (
        <View style={styles.upcomingStudySessionsBoxNoSessions}>
          <StyledH3 style={styles.upcomingStudySessionsBoxText} text={defaultText} />
        </View>
      )}
      {studySessionExists && (
        <View>
          <View style={[styles.profileList, { width: width * 0.8 }]}>
            {studySessionData.map((item, index) => (
              <StudySessionPreviewCard
                sessionInfo={studySessionData[index]}
                width={width}
                setModalVisibleWithData={setModalVisibleWithData}
                key={index}
              />
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
    paddingTop: 20,
    paddingBottom: 60,
  },
  homePage: {
    gap: 30,
  },
  homePageSectionBox: {
    gap: 15,
    textAlign: "center",
    alignContent: "center",
    alignItems: "center",
  },
  profileList: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    rowGap: 10,
    columnGap: 10,
    marginLeft: 10,
  },
  upcomingStudySessionsBoxNoSessions: {
    backgroundColor: Color.darkBlue,
    width: "70%",
    borderRadius: 20,
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
  upcomingStudySessionsBoxText: {
    textAlign: "center",
    color: Color.blue,
  },
});
