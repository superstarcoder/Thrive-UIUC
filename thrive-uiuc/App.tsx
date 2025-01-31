import { StatusBar } from "expo-status-bar";
import React, { useState, FC, useEffect } from "react";
import { StyleSheet, View, BackHandler } from "react-native";
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
  const [navigationStack, setNavigationStack] = useState<PageName[]>(["auth-page"]);

  const navigate = (page: PageName) => {
    setNavigationStack((prevStack) => [...prevStack, page]);
    setCurrentPage(page);
  };

  const handleBackAction = () => {
    if (navigationStack.length > 1) {
      const newStack = [...navigationStack];
      newStack.pop();
      setNavigationStack(newStack);
      setCurrentPage(newStack[newStack.length - 1]);
    }
    else {
      BackHandler.exitApp();
    }
    return true;
  };

  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", handleBackAction);
    return () => {
      BackHandler.removeEventListener("hardwareBackPress", handleBackAction);
    };
  }, [navigationStack]);

  return (
    <GestureHandlerRootView>
      <View style={styles.container}>
        {currentPage == "auth-page" && <AuthPage setCurrentPage={navigate} />}
        {currentPage == "create-profile-page" && <CreateProfilePage setCurrentPage={navigate} />}
        {currentPage == "home-page" && <HomePage setCurrentPage={navigate} />}
        {currentPage == "meet-new-students-page" && <MeetNewStudentsPage setCurrentPage={navigate} />}
      </View>
    </GestureHandlerRootView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {},
});
