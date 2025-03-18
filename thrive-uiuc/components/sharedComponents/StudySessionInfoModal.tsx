import { Image, Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Color from "../../styles/Color";
import { StudySessionSettings } from "../../utils/types";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import NavBar from "./NavBar";
import { PageName } from "../../App";
import { StyledH3, StyledH4 } from "./Text/StyledText";
import { findDuration, findTimeUntil, formatNumPeople } from "../../utils/utils";
import { X } from "phosphor-react-native";
import { getRelativeCoords } from "react-native-reanimated";

type Props = {
  sessionInfo: StudySessionSettings;
  modalVisible: boolean;
  setModalVisible: (visible: boolean) => void;
  currentPage: PageName;
  setCurrentPage: (page: PageName) => void;
};

const StudySesionInfoModal = (props: Props) => {
  const { sessionInfo, modalVisible, currentPage, setModalVisible, setCurrentPage } = props;
  return (
    <Modal
      style={{ zIndex: 1000 }}
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
      <TouchableOpacity activeOpacity={1} onPress={() => setModalVisible(false)} style={styles.modalBackground}>
        <TouchableOpacity activeOpacity={1}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <StyledH3 text={sessionInfo.name} />
              <TouchableOpacity
                onPress={() => {
                  setModalVisible(false);
                }}
                style={styles.modalButton}
              >
                <X color="white" weight="bold" size={20} />
              </TouchableOpacity>
            </View>
            <View>
              <Text>
                <StyledH4 text={"🕖 Starts: "} />
                <StyledH4
                  text={findTimeUntil(sessionInfo.startTime) + " (" + sessionInfo.startTime.toLocaleString() + ")"}
                  style={styles.subText}
                />
              </Text>
              <Text>
                <StyledH4 text={"🕖 Ends: "} />
                <StyledH4
                  text={findTimeUntil(sessionInfo.endTime) + " (" + sessionInfo.endTime.toLocaleString() + ")"}
                  style={styles.subText}
                />
              </Text>
							<Text>
                <StyledH4 text={"🕖 Duration: "} />
                <StyledH4
                  text={findDuration(sessionInfo.startTime, sessionInfo.endTime)}
                  style={styles.subText}
                />
              </Text>
              <Text>
                <StyledH4 text={"📍 Location: "} />
                <StyledH4 text={sessionInfo.location} style={styles.subText} />
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
      <NavBar currentPage={currentPage} setCurrentPage={setCurrentPage} />
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
    marginTop: 40,
    marginBottom: 50,
  },
  modalContent: {
    width: "100%",
    padding: 20,
    backgroundColor: Color.darkBlue,
    borderRadius: 10,
    boxShadow: "0px 0px 4px 0px rgba(0,0,0,1)",
		gap: 5
  },
  modalHeader: {
    flexDirection: "row",
    alignItems: "flex-end",
  },
  modalButton: {
    padding: 5,
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
