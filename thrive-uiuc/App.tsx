import { StatusBar } from "expo-status-bar";
import React, { useState, FC } from "react";
import { StyleSheet, Text, View } from "react-native";
import Color from "./styles/Color";
import AuthPage from "./components/AuthPage/AuthPage";
import CreateProfilePage from "./components/ProfilePage/CreateProfilePage";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export type Props = {};

export type PageName = "auth-page" | "create-profile-page";

const App: FC<Props> = () => {
  const [currentPage, setCurrentPage] = useState<PageName>("auth-page");

  return (
    <GestureHandlerRootView>
      <View style={styles.container}>
        {currentPage == "auth-page" && (
          <AuthPage setCurrentPage={setCurrentPage} />
        )}
        {currentPage == "create-profile-page" && <CreateProfilePage />}
      </View>
    </GestureHandlerRootView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {},
});
