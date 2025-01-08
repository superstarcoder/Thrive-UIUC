import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ProfileSettingsModal from "./ProfileSettingsModal";

type Props = {
  setCurrentPage: any
}

const CreateProfilePage = ({setCurrentPage}: Props) => {
  return (
    <>
      <ProfileSettingsModal onSavePress={() => {setCurrentPage("home-page")}}/>
    </>
  );
};

export default CreateProfilePage;

const styles = StyleSheet.create({});
