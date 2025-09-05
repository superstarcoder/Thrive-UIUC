import { StatusBar } from "expo-status-bar";
import React, { useState, FC, useEffect } from "react";
import { StyleSheet, View, BackHandler, SafeAreaView, SafeAreaViewBase } from "react-native";
import Color from "./styles/Color";
import AuthPage from "./components/AuthPage/AuthPage";
import CreateProfilePage from "./components/ProfilePage/CreateProfilePage";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import HomePage from "./components/HomePage/HomePage";
import MeetNewStudentsPage from "./components/MeetNewStudentsPage/MeetNewStudentsPage";
import StartStudySessionPage from "./components/StudySession/StartStudySessionPage";
import sharedStyles from "./styles/SharedStyles";
import ProfilePage from "./components/ProfilePage/ProfilePage";
import { ProfileSettings } from "./utils/types";
import { SafeAreaProvider } from "react-native-safe-area-context";

export type Props = {};

export type PageName =
  | "auth-page"
  | "create-profile-page"
  | "home-page"
  | "meet-new-students-page" 
	| "start-study-session-page"
  | "profile-page"
  | "";

const App: FC<Props> = () => {
  const [currentPage, setCurrentPage] = useState<PageName>("auth-page");
  const [navigationStack, setNavigationStack] = useState<PageName[]>(["auth-page"]);
  const [studySessionInfoModalVisible, setStudySessionInfoModalVisible] = useState<boolean>(false);
  const [currentlyViewingProfileSettings, setCurrentlyViewingProfileSettings] = useState<ProfileSettings>({
    id: "1",
    name: "Dhanish Natarajan",
    year: "Sophomore",
    major: "Biotechnology and Molecular Biosciences",
    introduction:
      "Lorem ipsum odor amet, consectetuer adipiscing elit. Quis massa ultrices donec at nisl vehicula maecenas ex amet varius maximus integer massa urna finibus gravida lacinia dapibus vulputate lacinia eleifend blandit venenatis elementum nulla placerat tortor dignissim risus vel nam vestibulum rhoncus consequat metus himenaeos class maximus vitae fusce imperdiet quisque convallis leo et class consequat montes dictum fames vulputate augue scelerisque justo porta etiam ultricies platea mus sit aenean posuere libero consectetur scelerisque primis nibh maximus congue egestas mauris hac dolor amet congue pretium fusce tempus quisque taciti dictum nascetur tincidunt pellentesque id turpis habitasse ligula felis volutpat rutrum rhoncus cursus semper vitae malesuada ultricies natoque est consequat potenti laoreet erat habitasse eros ex duis dignissim molestie posuere interdum potenti.",
    hobbies: ["biking", "badminton", "boxing"],
    classes: ["CS 233", "MATH 257", "ENG 199", "ENG 201", "CS 225"],
  });
  const [ownProfileSettings, setOwnProfileSettings] = useState<ProfileSettings>({
    id: "1",
    name: "Dhanish Natarajan",
    year: "Sophomore",
    major: "Biotechnology and Molecular Biosciences",
    introduction:
      "Lorem ipsum odor amet, consectetuer adipiscing elit. Quis massa ultrices donec at nisl vehicula maecenas ex amet varius maximus integer massa urna finibus gravida lacinia dapibus vulputate lacinia eleifend blandit venenatis elementum nulla placerat tortor dignissim risus vel nam vestibulum rhoncus consequat metus himenaeos class maximus vitae fusce imperdiet quisque convallis leo et class consequat montes dictum fames vulputate augue scelerisque justo porta etiam ultricies platea mus sit aenean posuere libero consectetur scelerisque primis nibh maximus congue egestas mauris hac dolor amet congue pretium fusce tempus quisque taciti dictum nascetur tincidunt pellentesque id turpis habitasse ligula felis volutpat rutrum rhoncus cursus semper vitae malesuada ultricies natoque est consequat potenti laoreet erat habitasse eros ex duis dignissim molestie posuere interdum potenti.",
    hobbies: ["biking", "badminton", "boxing"],
    classes: ["CS 233", "MATH 257", "ENG 199", "ENG 201", "CS 225"],
  });
  const navigate = (page: PageName) => {
    setNavigationStack((prevStack) => [...prevStack, page]);
    setCurrentPage(page);
    setStudySessionInfoModalVisible(false);
  };

  const handleBackAction = () => {
    if (navigationStack.length > 1) {
      const newStack = [...navigationStack];
      newStack.pop();
      setNavigationStack(newStack);
      setCurrentPage(newStack[newStack.length - 1]);
    } else {
      BackHandler.exitApp();
    }
    return true;
  };

  useEffect(() => {
    const subscription = BackHandler.addEventListener("hardwareBackPress", handleBackAction);
    return () => subscription.remove();
  }, [navigationStack]);

  return (
    <SafeAreaProvider>
      <GestureHandlerRootView>
        <View>
          {currentPage == "auth-page" && <AuthPage setCurrentPage={navigate} />}
          {currentPage == "create-profile-page" && <CreateProfilePage setCurrentPage={navigate} />}
          {currentPage == "home-page" && (
            <HomePage
              currentPage={currentPage}
              studySessionInfoModalVisible={studySessionInfoModalVisible}
              ownProfileSettings={ownProfileSettings}
              setCurrentPage={navigate}
              handleBackAction={handleBackAction}
              setStudySessionInfoModalVisible={setStudySessionInfoModalVisible}
              setCurrentlyViewingProfileSettings={setCurrentlyViewingProfileSettings}
            />
          )}
          {currentPage == "meet-new-students-page" && (
            <MeetNewStudentsPage
              currentPage={currentPage}
              handleBackAction={handleBackAction}
              setCurrentPage={navigate}
              setCurrentlyViewingProfileSettings={setCurrentlyViewingProfileSettings}
            />
          )}
          {currentPage == "profile-page" && (
            <ProfilePage
              currentPage={currentPage}
              ownProfile={currentlyViewingProfileSettings.id === ownProfileSettings.id}
              profileSettings={currentlyViewingProfileSettings}
              handleBackAction={handleBackAction}
            />
          )}
        {currentPage == "start-study-session-page" && <StartStudySessionPage setCurrentPage={navigate} />}
        </View>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {},
});
