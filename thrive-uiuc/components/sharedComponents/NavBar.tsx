import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Color from "../../styles/Color";
import sharedStyles from "../../styles/SharedStyles";
import { StyledH3 } from "./Text/StyledText";

type Props = {
  setCurrentPage: any;
};

const NavBar = (props: Props) => {
  const { setCurrentPage } = props;
  const label = "Home";
  return (
    <View style={styles.navBar}>
      <TouchableOpacity
        style={styles.navBarButton}
        onPress={() => {
          setCurrentPage("home-page");
        }}
      >
        <Image source={require("../../assets/navbar/homeIcon.png")} style={styles.navBarButtonIcon} />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.navBarButton}
        onPress={() => {
          setCurrentPage("create-profile-page");
        }}
      >
        <Image source={require("../../assets/navbar/profileIcon.png")} style={styles.navBarButtonIcon} />
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
  },
  navBarButton: {
    height: "100%",
    width: 50,
    marginHorizontal: 30,
    paddingVertical: 10,
    alignContent: "center",
    alignItems: "center"
  },
  navBarButtonIcon: {
    width: 30,
    height: 30,
  },
});
