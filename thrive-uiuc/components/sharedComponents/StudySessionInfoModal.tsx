import { Image, Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Color from "../../styles/Color";
import { ProfileSettings, StudySessionSettings } from "../../utils/types";
import NavBar from "./NavBar";
import { PageName } from "../../App";
import { StyledH3, StyledH3p5, StyledH4 } from "./Text/StyledText";
import { findDuration, findTimeUntil, formatNumPeople, getFormattedDateTimeString } from "../../utils/utils";
import { X } from "phosphor-react-native";
import { getRelativeCoords } from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";

type Props = {
  headerHeight: number;
  width: number;
  sessionInfo: StudySessionSettings;
  modalVisible: boolean;
  setModalVisible: (visible: boolean) => void;
  currentPage: PageName;
  setCurrentPage: (page: PageName) => void;
};

const StudySesionInfoModal = (props: Props) => {
  const { headerHeight, width, sessionInfo, modalVisible, currentPage, setModalVisible, setCurrentPage } = props;
  const insets = useSafeAreaInsets();
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}
      onShow={() => {
        console.log("Modal set visible");
      }}
    >
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => setModalVisible(false)}
        style={[styles.modalBackground, { marginTop: headerHeight - insets.top }]}
      >
        <TouchableOpacity activeOpacity={1}>
          <View style={[styles.modalContent, { width: width * 0.9 }]}>
            <View>
              <View style={styles.modalHeader}>
                <StyledH3 text={"Study Session Details"} />
                <TouchableOpacity
                  onPress={() => {
                    setModalVisible(false);
                  }}
                  style={styles.modalButton}
                >
                  <X color="white" weight="bold" size={20} />
                </TouchableOpacity>
              </View>
              <StyledH3p5 text={sessionInfo.name} style={{ color: Color.blue, alignSelf: "center" }} />
            </View>
            <View>
              <Text>
                <StyledH4 text={"🕖 Starts: "} />
                <StyledH4
                  text={
                    findTimeUntil(sessionInfo.startTime) +
                    " (" +
                    getFormattedDateTimeString(sessionInfo.startTime) +
                    ")"
                  }
                  style={styles.subText}
                />
              </Text>
              <Text>
                <StyledH4 text={"🕖 Ends: "} />
                <StyledH4
                  text={
                    findTimeUntil(sessionInfo.endTime) + " (" + getFormattedDateTimeString(sessionInfo.endTime) + ")"
                  }
                  style={styles.subText}
                />
              </Text>
              <Text>
                <StyledH4 text={"🕖 Duration: "} />
                <StyledH4 text={findDuration(sessionInfo.startTime, sessionInfo.endTime)} style={styles.subText} />
              </Text>
              <Text>
                <StyledH4 text={"📍 Location: "} />
                {/*<StyledH4 text={sessionInfo.location} style={styles.subText} />*/}
								<StyledH4 text={"Grainger 040A"} style={styles.subText} />
              </Text>
              <Text>
                <StyledH4 text={"👥 People: "} />
                <StyledH4 text={formatNumPeople(sessionInfo.maxPeople)} style={styles.subText} />
              </Text>
            </View>
            <Image source={require("../../assets/testing/Grainger.png")} style={styles.locationImage} />
          </View>
        </TouchableOpacity>
      </TouchableOpacity>
      <NavBar
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        ownProfileSettings={{
          id: "",
          name: "",
          year: null,
          major: null,
          introduction: "",
          hobbies: [],
          classes: [],
        }}
        setCurrentlyViewingProfileSettings={function (profileSettings: ProfileSettings): void {}}
      />
    </Modal>
  );
};

export default StudySesionInfoModal;

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
    marginBottom: 50,
  },
  modalContent: {
    padding: 20,
    backgroundColor: Color.darkBlue,
    borderRadius: 10,
    boxShadow: "0px 0px 4px 0px rgba(0,0,0,1)",
    gap: 5,
  },
  modalHeader: {
    flexDirection: "row",
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
    textAlign: "center",
  },
  modalButton: {
    paddingTop: 2,
    paddingBottom: 20,
    paddingRight: 0,
    paddingLeft: 5,
    position: "absolute",
    top: 0,
    right: 0,
  },
  locationImage: {
    marginTop: 10,
    alignSelf: "center",
  },
  subText: {
    color: Color.blue,
    textAlign: "left",
  },
});
