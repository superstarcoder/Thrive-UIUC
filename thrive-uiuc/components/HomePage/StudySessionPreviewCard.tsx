import { Image, StyleSheet, View } from "react-native";
import React from "react";
import { StudySessionSettings } from "../../utils/types";
import { StyledH2, StyledH3, StyledH4 } from "../sharedComponents/Text/StyledText";
import Color from "../../styles/Color";
import { findTimeUntil, formatNumPeople, truncateText } from "../../utils/utils";

type Props = {
  sessionInfo: StudySessionSettings;
  width: number;
  displayLocationOnly?: boolean;
  previewCardStyles?: Object;
};

const StudySessionPreviewCard = (props: Props) => {
  const { sessionInfo, width, displayLocationOnly = false, previewCardStyles = {} } = props;

  return (
    <View style={[styles.studySessionPreviewCard, { width: width * 0.4 - 10 }, previewCardStyles]}>
      <Image source={require("../../assets/testing/Grainger.png")} style={styles.locationImage} />
      {/* <StyledH3
        style={{ textAlign: "center" }}
        text={truncateText(sessionInfo.name, true, 11)}
        numberOfLines={1}
        ellipsizeMode="clip"
      ></StyledH3> */}
      <StyledH4
        style={{ textAlign: "center" }}
        text={sessionInfo.name}
        ellipsizeMode="clip"
      ></StyledH4>

      {!displayLocationOnly && (
        <>
          <StyledH4
            text={"🕖 " + findTimeUntil(sessionInfo.startTime)}
            numberOfLines={1}
            ellipsizeMode="tail"
            style={styles.subText}
          ></StyledH4>
          <StyledH4
            text={"📍 " + sessionInfo.location}
            numberOfLines={1}
            ellipsizeMode="tail"
            style={styles.subText}
          ></StyledH4>
          <StyledH4
            text={
              sessionInfo.maxPeople > 1
                ? "👥 " + formatNumPeople(sessionInfo.maxPeople)
                : "👤 " + formatNumPeople(sessionInfo.maxPeople)
            }
            numberOfLines={1}
            ellipsizeMode="tail"
            style={styles.subText}
          ></StyledH4>
        </>
      )}
    </View>
  );
};

export default StudySessionPreviewCard;

const styles = StyleSheet.create({
  studySessionPreviewCard: {
    backgroundColor: Color.darkBlue,
    alignItems: "center",
    // justifyContent: "center",
    paddingHorizontal: 9,
    paddingVertical: 15,
    borderRadius: 10,
    justifyContent: "flex-start",
  },
  locationImage: {
    top: 0,
    marginBottom: 7,
  },
  mainText: {},
  subText: {
    color: Color.blue,
  },
});
