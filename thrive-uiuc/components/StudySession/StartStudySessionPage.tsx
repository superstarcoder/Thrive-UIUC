import { StyleSheet, Text, View } from "react-native";
import React from "react";
import StartStudySessionModal from "./StartStudySessionModal";
import { PageName } from "../../App";

type Props = {
  setCurrentPage: (page: PageName) => void;
};

const StartStudySessionPage = ({ setCurrentPage }: Props) => {
  return (
    <>
      <StartStudySessionModal
        onSavePress={() => {
          setCurrentPage("home-page");
        }}
      />
    </>
  );
};

export default StartStudySessionPage;

const styles = StyleSheet.create({});
