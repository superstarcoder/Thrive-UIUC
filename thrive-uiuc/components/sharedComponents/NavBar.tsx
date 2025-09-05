import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Color from "../../styles/Color";
import { House, User } from "phosphor-react-native";
import sharedStyles from "../../styles/SharedStyles";
import { StyledH3 } from "./Text/StyledText";
import { PageName } from "../../App";
import { ProfileSettings } from "../../utils/types";

type Props = {
  currentPage: PageName;
	ownProfileSettings: ProfileSettings;
	setCurrentlyViewingProfileSettings: (profileSettings: ProfileSettings) => void;
  setCurrentPage: (page: PageName) => void;
};

const NavBar = (props: Props) => {
  const { currentPage, ownProfileSettings, setCurrentPage, setCurrentlyViewingProfileSettings } = props;
  const label = "Home";
  return (
    <View style={styles.navBar}>
      <TouchableOpacity
        style={[styles.navBarButton, currentPage === "home-page" ? { borderTopWidth: 3 } : { borderTopWidth: 0 }]}
        onPress={() => {
          setCurrentPage("home-page");
        }}
      >
        <House color="white" size="34px" weight={currentPage === "home-page" ? "fill" : "regular"}></House>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.navBarButton}
        onPress={() => {
          setCurrentPage("profile-page");
					setCurrentlyViewingProfileSettings(ownProfileSettings);
        }}
      >
        <User color="white" size="34px" weight={currentPage === "create-profile-page" ? "fill" : "regular"}></User>
      </TouchableOpacity>
    </View>
  );
};

export default NavBar;

const styles = StyleSheet.create({
  navBar: {
    backgroundColor: Color.grayBlue,
    position: "absolute",
    bottom: 0,
    height: 50,
    width: "100%",
    borderTopColor: Color.gray,
    borderTopWidth: 1,
    boxShadow: "0px 0px 4px 0px rgba(0,0,0,0.75)",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    gap: 100,
    zIndex: 1000,
  },
  navBarButton: {
    height: "100%",
    width: 50,
    paddingVertical: 8,
    alignContent: "center",
    alignItems: "center",
    borderTopColor: "white",
  },
});
