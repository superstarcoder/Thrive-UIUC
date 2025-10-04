import { StatusBar, StyleSheet, Text, useWindowDimensions, View } from "react-native";
import sharedStyles from "../../styles/SharedStyles";
import React, { useState } from "react";
import HomePageButton from "./HomePageButton";
import StudySessionPreviewCard from "./StudySessionPreviewCard";
import { StyledH1, StyledH2, StyledH3, StyledH4 } from "../sharedComponents/Text/StyledText";
import ProfilePreviewBox from "./ProfilePreviewCard";
import Color from "../../styles/Color";
import { ScrollView } from "react-native-gesture-handler";
import { ProfileSettings, StudySessionSettings, Building, Room } from "../../utils/types";
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
  ownProfileSettings: ProfileSettings;
  setCurrentlyViewingProfileSettings: (profileSettings: ProfileSettings) => void;
  handleBackAction: () => void;
};

const profileData: ProfileSettings[] = [
  {
    id: "2",
    name: "William Lei",
    year: "Freshman",
    major: "Computer Engineering",
    introduction:
      "Lorem ipsum odor amet, consectetuer adipiscing elit. Quis massa ultrices donec at nisl vehicula maecenas ex amet varius maximus integer massa urna finibus gravida lacinia dapibus vulputate lacinia eleifend blandit venenatis elementum nulla placerat tortor dignissim risus vel nam vestibulum rhoncus consequat metus himenaeos class maximus vitae fusce imperdiet quisque convallis leo et class consequat montes dictum fames vulputate augue scelerisque justo porta etiam ultricies platea mus sit aenean posuere libero consectetur scelerisque primis nibh maximus congue egestas mauris hac dolor amet congue pretium fusce tempus quisque taciti dictum nascetur tincidunt pellentesque id turpis habitasse ligula felis volutpat rutrum rhoncus cursus semper vitae malesuada ultricies natoque est consequat potenti laoreet erat habitasse eros ex duis dignissim molestie posuere interdum potenti.",
    hobbies: ["boxing"],
    classes: ["CS 233"],
  },
  {
    id: "3",
    name: "Harith Palani",
    year: "Junior",
    major: "Aerospace Engineering",
    introduction:
      "Lorem ipsum odor amet, consectetuer adipiscing elit. Quis massa ultrices donec at nisl vehicula maecenas ex amet varius maximus integer massa urna finibus gravida lacinia dapibus vulputate lacinia eleifend blandit venenatis elementum nulla placerat tortor dignissim risus vel nam vestibulum rhoncus consequat metus himenaeos class maximus vitae fusce imperdiet quisque convallis leo et class consequat montes dictum fames vulputate augue scelerisque justo porta etiam ultricies platea mus sit aenean posuere libero consectetur scelerisque primis nibh maximus congue egestas mauris hac dolor amet congue pretium fusce tempus quisque taciti dictum nascetur tincidunt pellentesque id turpis habitasse ligula felis volutpat rutrum rhoncus cursus semper vitae malesuada ultricies natoque est consequat potenti laoreet erat habitasse eros ex duis dignissim molestie posuere interdum potenti.",
    hobbies: ["biking"],
    classes: ["CS 233", "MATH 257", "ENG 199", "ENG 201", "CS 225"],
  },
  {
    id: "4",
    name: "Sophia Zhang",
    year: "Sophomore",
    major: "Computer Engineering",
    introduction:
      "Lorem ipsum odor amet, consectetuer adipiscing elit. Quis massa ultrices donec at nisl vehicula maecenas ex amet varius maximus integer massa urna finibus gravida lacinia dapibus vulputate lacinia eleifend blandit venenatis elementum nulla placerat tortor dignissim risus vel nam vestibulum rhoncus consequat metus himenaeos class maximus vitae fusce imperdiet quisque convallis leo et class consequat montes dictum fames vulputate augue scelerisque justo porta etiam ultricies platea mus sit aenean posuere libero consectetur scelerisque primis nibh maximus congue egestas mauris hac dolor amet congue pretium fusce tempus quisque taciti dictum nascetur tincidunt pellentesque id turpis habitasse ligula felis volutpat rutrum rhoncus cursus semper vitae malesuada ultricies natoque est consequat potenti laoreet erat habitasse eros ex duis dignissim molestie posuere interdum potenti.",
    hobbies: ["badminton"],
    classes: ["CS 233", "MATH 257"],
  },
  {
    id: "5",
    name: "Liam Patel",
    year: "Senior",
    major: "Aerospace Engineering",
    introduction:
      "Lorem ipsum odor amet, consectetuer adipiscing elit. Quis massa ultrices donec at nisl vehicula maecenas ex amet varius maximus integer massa urna finibus gravida lacinia dapibus vulputate lacinia eleifend blandit venenatis elementum nulla placerat tortor dignissim risus vel nam vestibulum rhoncus consequat metus himenaeos class maximus vitae fusce imperdiet quisque convallis leo et class consequat montes dictum fames vulputate augue scelerisque justo porta etiam ultricies platea mus sit aenean posuere libero consectetur scelerisque primis nibh maximus congue egestas mauris hac dolor amet congue pretium fusce tempus quisque taciti dictum nascetur tincidunt pellentesque id turpis habitasse ligula felis volutpat rutrum rhoncus cursus semper vitae malesuada ultricies natoque est consequat potenti laoreet erat habitasse eros ex duis dignissim molestie posuere interdum potenti.",
    hobbies: ["biking"],
    classes: ["CS 225", "ENG 201"],
  },
  {
    id: "6",
    name: "Emily Chen",
    year: "Freshman",
    major: "Computer Engineering",
    introduction:
      "Lorem ipsum odor amet, consectetuer adipiscing elit. Quis massa ultrices donec at nisl vehicula maecenas ex amet varius maximus integer massa urna finibus gravida lacinia dapibus vulputate lacinia eleifend blandit venenatis elementum nulla placerat tortor dignissim risus vel nam vestibulum rhoncus consequat metus himenaeos class maximus vitae fusce imperdiet quisque convallis leo et class consequat montes dictum fames vulputate augue scelerisque justo porta etiam ultricies platea mus sit aenean posuere libero consectetur scelerisque primis nibh maximus congue egestas mauris hac dolor amet congue pretium fusce tempus quisque taciti dictum nascetur tincidunt pellentesque id turpis habitasse ligula felis volutpat rutrum rhoncus cursus semper vitae malesuada ultricies natoque est consequat potenti laoreet erat habitasse eros ex duis dignissim molestie posuere interdum potenti.",
    hobbies: ["boxing"],
    classes: ["CS 233"],
  },
  {
    id: "7",
    name: "Noah Rivera",
    year: "Junior",
    major: "Aerospace Engineering",
    introduction:
      "Lorem ipsum odor amet, consectetuer adipiscing elit. Quis massa ultrices donec at nisl vehicula maecenas ex amet varius maximus integer massa urna finibus gravida lacinia dapibus vulputate lacinia eleifend blandit venenatis elementum nulla placerat tortor dignissim risus vel nam vestibulum rhoncus consequat metus himenaeos class maximus vitae fusce imperdiet quisque convallis leo et class consequat montes dictum fames vulputate augue scelerisque justo porta etiam ultricies platea mus sit aenean posuere libero consectetur scelerisque primis nibh maximus congue egestas mauris hac dolor amet congue pretium fusce tempus quisque taciti dictum nascetur tincidunt pellentesque id turpis habitasse ligula felis volutpat rutrum rhoncus cursus semper vitae malesuada ultricies natoque est consequat potenti laoreet erat habitasse eros ex duis dignissim molestie posuere interdum potenti.",
    hobbies: ["badminton"],
    classes: ["CS 233", "MATH 257", "ENG 199"],
  },
  {
    id: "8",
    name: "Ava Kim",
    year: "Sophomore",
    major: "Computer Engineering",
    introduction:
      "Lorem ipsum odor amet, consectetuer adipiscing elit. Quis massa ultrices donec at nisl vehicula maecenas ex amet varius maximus integer massa urna finibus gravida lacinia dapibus vulputate lacinia eleifend blandit venenatis elementum nulla placerat tortor dignissim risus vel nam vestibulum rhoncus consequat metus himenaeos class maximus vitae fusce imperdiet quisque convallis leo et class consequat montes dictum fames vulputate augue scelerisque justo porta etiam ultricies platea mus sit aenean posuere libero consectetur scelerisque primis nibh maximus congue egestas mauris hac dolor amet congue pretium fusce tempus quisque taciti dictum nascetur tincidunt pellentesque id turpis habitasse ligula felis volutpat rutrum rhoncus cursus semper vitae malesuada ultricies natoque est consequat potenti laoreet erat habitasse eros ex duis dignissim molestie posuere interdum potenti.",
    hobbies: ["biking"],
    classes: ["CS 225", "ENG 201"],
  },
  {
    id: "9",
    name: "Ethan Martinez",
    year: "Senior",
    major: "Aerospace Engineering",
    introduction:
      "Lorem ipsum odor amet, consectetuer adipiscing elit. Quis massa ultrices donec at nisl vehicula maecenas ex amet varius maximus integer massa urna finibus gravida lacinia dapibus vulputate lacinia eleifend blandit venenatis elementum nulla placerat tortor dignissim risus vel nam vestibulum rhoncus consequat metus himenaeos class maximus vitae fusce imperdiet quisque convallis leo et class consequat montes dictum fames vulputate augue scelerisque justo porta etiam ultricies platea mus sit aenean posuere libero consectetur scelerisque primis nibh maximus congue egestas mauris hac dolor amet congue pretium fusce tempus quisque taciti dictum nascetur tincidunt pellentesque id turpis habitasse ligula felis volutpat rutrum rhoncus cursus semper vitae malesuada ultricies natoque est consequat potenti laoreet erat habitasse eros ex duis dignissim molestie posuere interdum potenti.",
    hobbies: ["boxing"],
    classes: ["CS 233", "ENG 199"],
  },
  {
    id: "10",
    name: "Isabella Singh",
    year: "Freshman",
    major: "Computer Engineering",
    introduction:
      "Lorem ipsum odor amet, consectetuer adipiscing elit. Quis massa ultrices donec at nisl vehicula maecenas ex amet varius maximus integer massa urna finibus gravida lacinia dapibus vulputate lacinia eleifend blandit venenatis elementum nulla placerat tortor dignissim risus vel nam vestibulum rhoncus consequat metus himenaeos class maximus vitae fusce imperdiet quisque convallis leo et class consequat montes dictum fames vulputate augue scelerisque justo porta etiam ultricies platea mus sit aenean posuere libero consectetur scelerisque primis nibh maximus congue egestas mauris hac dolor amet congue pretium fusce tempus quisque taciti dictum nascetur tincidunt pellentesque id turpis habitasse ligula felis volutpat rutrum rhoncus cursus semper vitae malesuada ultricies natoque est consequat potenti laoreet erat habitasse eros ex duis dignissim molestie posuere interdum potenti.",
    hobbies: ["badminton"],
    classes: ["CS 233"],
  },
  {
    id: "11",
    name: "Mason Gupta",
    year: "Junior",
    major: "Aerospace Engineering",
    introduction:
      "Lorem ipsum odor amet, consectetuer adipiscing elit. Quis massa ultrices donec at nisl vehicula maecenas ex amet varius maximus integer massa urna finibus gravida lacinia dapibus vulputate lacinia eleifend blandit venenatis elementum nulla placerat tortor dignissim risus vel nam vestibulum rhoncus consequat metus himenaeos class maximus vitae fusce imperdiet quisque convallis leo et class consequat montes dictum fames vulputate augue scelerisque justo porta etiam ultricies platea mus sit aenean posuere libero consectetur scelerisque primis nibh maximus congue egestas mauris hac dolor amet congue pretium fusce tempus quisque taciti dictum nascetur tincidunt pellentesque id turpis habitasse ligula felis volutpat rutrum rhoncus cursus semper vitae malesuada ultricies natoque est consequat potenti laoreet erat habitasse eros ex duis dignissim molestie posuere interdum potenti.",
    hobbies: ["biking"],
    classes: ["CS 233", "MATH 257", "ENG 199", "ENG 201"],
  },
  {
    id: "12",
    name: "Olivia Brown",
    year: "Sophomore",
    major: "Computer Engineering",
    introduction:
      "Lorem ipsum odor amet, consectetuer adipiscing elit. Quis massa ultrices donec at nisl vehicula maecenas ex amet varius maximus integer massa urna finibus gravida lacinia dapibus vulputate lacinia eleifend blandit venenatis elementum nulla placerat tortor dignissim risus vel nam vestibulum rhoncus consequat metus himenaeos class maximus vitae fusce imperdiet quisque convallis leo et class consequat montes dictum fames vulputate augue scelerisque justo porta etiam ultricies platea mus sit aenean posuere libero consectetur scelerisque primis nibh maximus congue egestas mauris hac dolor amet congue pretium fusce tempus quisque taciti dictum nascetur tincidunt pellentesque id turpis habitasse ligula felis volutpat rutrum rhoncus cursus semper vitae malesuada ultricies natoque est consequat potenti laoreet erat habitasse eros ex duis dignissim molestie posuere interdum potenti.",
    hobbies: ["boxing"],
    classes: ["CS 233", "MATH 257"],
  },
  {
    id: "13",
    name: "James Lee",
    year: "Senior",
    major: "Aerospace Engineering",
    introduction:
      "Lorem ipsum odor amet, consectetuer adipiscing elit. Quis massa ultrices donec at nisl vehicula maecenas ex amet varius maximus integer massa urna finibus gravida lacinia dapibus vulputate lacinia eleifend blandit venenatis elementum nulla placerat tortor dignissim risus vel nam vestibulum rhoncus consequat metus himenaeos class maximus vitae fusce imperdiet quisque convallis leo et class consequat montes dictum fames vulputate augue scelerisque justo porta etiam ultricies platea mus sit aenean posuere libero consectetur scelerisque primis nibh maximus congue egestas mauris hac dolor amet congue pretium fusce tempus quisque taciti dictum nascetur tincidunt pellentesque id turpis habitasse ligula felis volutpat rutrum rhoncus cursus semper vitae malesuada ultricies natoque est consequat potenti laoreet erat habitasse eros ex duis dignissim molestie posuere interdum potenti.",
    hobbies: ["badminton"],
    classes: ["CS 225", "ENG 201", "MATH 257"],
  },
];

const studySessionData: StudySessionSettings[] = [
  // TODO (9/5/25): Add actual location using type defined in type.tsx
  {
    id: "1",
    name: "MATH 257 Grind Session Group",
    minPeople: 1,
    maxPeople: 2,
    startTime: new Date(Date.now() + 3600000),
    endTime: new Date(Date.now() + 3600000 * 2),
    location: {
      id: "101",
      name: "Room 101",
      minCapacity: 1,
      maxCapacity: 4,
      building: {
        id: "1",
        name: "Main Library",
        minCapacity: 50,
        maxCapacity: 200,
        openingTime: new Date(new Date().setHours(8, 0, 0)), // 8:00 AM
        closingTime: new Date(new Date().setHours(22, 0, 0)), // 10:00 PM
        // image: require("../../../assets/building_images/main_library.jpg"),
      }
    },
  },
  {
    id: "2",
    name: "CS 173",
    minPeople: 1,
    maxPeople: 1,
    startTime: new Date(Date.now() + 804000000),
    endTime: new Date(Date.now() + 804000000 + 7200000),
    location: null,
  },
];

const HomePage = (props: HomePageProps) => {
  const {
    ownProfileSettings,
    currentPage,
    studySessionInfoModalVisible,
    setCurrentPage,
    handleBackAction,
    setStudySessionInfoModalVisible,
    setCurrentlyViewingProfileSettings,
  } = props;
  const meetNewStudentsButtonLabel = "Meet New Students 👋";
  const startStudySessionButtonLabel = "Start a Study Session 📚";
  const upcomingStudySessionsHeading = "Upcoming Study Sessions";
  const yourNetworkHeading = "Your Network";
  const { width } = useWindowDimensions();
  const [studySessionInfoModalData, setStudySessionInfoModalData] = useState<StudySessionSettings>(studySessionData[0]);
  const [headerHeight, setHeaderHeight] = useState(0);

  return (
    <SafeAreaView style={sharedStyles.androidSafeAreaContainer}>
      <StatusBar barStyle="light-content" backgroundColor={Color.darkestBlue} />
      <PageHeader header="Home" handleBackAction={handleBackAction} setHeaderHeight={setHeaderHeight} />
      <StudySesionInfoModal
        headerHeight={headerHeight}
        width={width}
        sessionInfo={studySessionInfoModalData}
        modalVisible={studySessionInfoModalVisible}
        setModalVisible={setStudySessionInfoModalVisible}
        setCurrentPage={setCurrentPage}
        currentPage="home-page"
      />
      <ScrollView overScrollMode="auto" contentContainerStyle={styles.scrollContainer}>
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
                setCurrentPage("start-study-session-page");
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
            <YourNetworkBox
              profileData={profileData}
              width={width}
              setCurrentPage={setCurrentPage}
              setCurrentlyViewingProfileSettings={setCurrentlyViewingProfileSettings}
            />
          </View>
        </View>
      </ScrollView>
      <NavBar
        ownProfileSettings={ownProfileSettings}
        setCurrentlyViewingProfileSettings={setCurrentlyViewingProfileSettings}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
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
  setCurrentlyViewingProfileSettings: (profileSettings: ProfileSettings) => void;
  setCurrentPage: (page: PageName) => void;
  width: number;
};
const YourNetworkBox = (props: YourNetworkBoxProps) => {
  const { width, setCurrentlyViewingProfileSettings, setCurrentPage } = props;
  return (
    <View style={[styles.profileList, { width: width * 0.8 }]}>
      {profileData.map((item, index) => (
        <ProfilePreviewBox
          setCurrentPage={setCurrentPage}
          setCurrentlyViewingProfileSettings={setCurrentlyViewingProfileSettings}
          profileSettings={item}
          key={index}
          width={width}
        />
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
