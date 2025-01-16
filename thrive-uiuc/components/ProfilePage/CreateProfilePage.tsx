import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ProfileSettingsModal from "./ProfileSettingsModal";
import { PageName } from "../../App";

type Props = {
  setCurrentPage: (page: PageName) => void;
};

const CreateProfilePage = ({ setCurrentPage }: Props) => {
  return (
    <>
      <ProfileSettingsModal
        onSavePress={() => {
          setCurrentPage("home-page");
        }}
      />
    </>
  );
};

export default CreateProfilePage;

const styles = StyleSheet.create({});
