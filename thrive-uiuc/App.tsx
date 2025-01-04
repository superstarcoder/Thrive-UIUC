import { StatusBar } from "expo-status-bar";
import React, { useState, FC } from "react";
import { StyleSheet, Text, View } from "react-native";
import Color from "./styles/Color";
import AuthPage from "./components/AuthPage/AuthPage";

export type Props = {};

export enum PageName {
  AuthPage = "AuthPage"
}

const App: FC<Props> = () => {
  const [currentPage, setCurrentPage] = useState<PageName>(PageName.AuthPage);

  return (
    <View style={styles.container}>
      {currentPage == PageName.AuthPage && <AuthPage />}
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {},
});