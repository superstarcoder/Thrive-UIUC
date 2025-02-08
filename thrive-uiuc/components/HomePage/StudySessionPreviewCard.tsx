import { Image, StyleSheet, View } from "react-native";
import React from "react";
import { StudySessionSettings } from "../../utils/types";
import { StyledH2, StyledH3, StyledH4 } from "../sharedComponents/Text/StyledText";
import Color from "../../styles/Color";
import { findTimeUntil, formatNumPeople } from "../../utils/utils";

type Props = {
  sessionInfo: StudySessionSettings;
  width: number;
};

const StudySessionPreviewCard = (props: Props) => {
  const { sessionInfo, width } = props;

  return (
    <View style={[styles.studySessionPreviewCard, { width: width * 0.4 - 10 }]}>
      <Image source={require("../../assets/testing/Grainger.png")} style={styles.locationImage} />
      <StyledH3 text={sessionInfo.location} numberOfLines={1} ellipsizeMode="tail"></StyledH3>
      <StyledH4
        text={findTimeUntil(sessionInfo.startTime)}
        numberOfLines={1}
        ellipsizeMode="tail"
        style={styles.subText}
      ></StyledH4>
      <StyledH4
        text={formatNumPeople(sessionInfo.maxPeople)}
        numberOfLines={1}
        ellipsizeMode="tail"
        style={styles.subText}
      ></StyledH4>
    </View>
  );
};

export default StudySessionPreviewCard;

const styles = StyleSheet.create({
  studySessionPreviewCard: {
    backgroundColor: Color.darkBlue,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 9,
    paddingVertical: 15,
    borderRadius: 10,
  },
  locationImage: {
    marginBottom: 7,
  },
  mainText: {},
  subText: {
    color: Color.blue,
  },
});
