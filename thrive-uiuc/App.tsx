import { StatusBar } from "expo-status-bar";
import React, { useState, FC } from "react";
import { StyleSheet, Text, View } from "react-native";
import Color from "./styles/Color";
import AuthPage from "./components/AuthPage/AuthPage";
import CreateProfilePage from "./components/ProfilePage/CreateProfilePage";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import HomePage from "./components/HomePage/HomePage";
import MeetNewStudentsPage from "./components/MeetNewStudentsPage/MeetNewStudentsPage";

export type Props = {};

export type PageName = "auth-page" | "create-profile-page" | "home-page" | "meet-new-students-page";

const App: FC<Props> = () => {
  const [currentPage, setCurrentPage] = useState<PageName>("auth-page");

  return (
    <GestureHandlerRootView>
      <View style={styles.container}>
        {currentPage == "auth-page" && <AuthPage setCurrentPage={setCurrentPage} />}
        {currentPage == "create-profile-page" && <CreateProfilePage setCurrentPage={setCurrentPage} />}
        {currentPage == "home-page" && <HomePage setCurrentPage={setCurrentPage} />}
        {currentPage == "meet-new-students-page" && <MeetNewStudentsPage setCurrentPage={setCurrentPage} />}
      </View>
    </GestureHandlerRootView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {},
});
