import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import { StudySessionSettings } from "../../utils/types";
import { StyledH2, StyledH3, StyledH4 } from "../sharedComponents/Text/StyledText";
import Color from "../../styles/Color";
import { findTimeUntil, formatNumPeople, truncateText } from "../../utils/utils";

type Props = {
  sessionInfo: StudySessionSettings;
  width: number;
	setModalVisibleWithData: (visible: boolean, data: StudySessionSettings) => void;
};

const StudySessionPreviewCard = (props: Props) => {
  const { sessionInfo, width, setModalVisibleWithData } = props;
	const cardWidth = width * 0.4 - 10;
	const charactersPerLine = Math.round(cardWidth / 7.5);
  return (
    <TouchableOpacity onPress={() => setModalVisibleWithData(true, sessionInfo)}>
      <View style={[styles.studySessionPreviewCard, { width: cardWidth }]}>
        <Image source={require("../../assets/testing/Grainger.png")} style={styles.locationImage} />
        <StyledH4
          text={truncateText(sessionInfo.name, true, charactersPerLine)}
          numberOfLines={2}
          ellipsizeMode="clip"
        />
        <StyledH4
          text={truncateText("🕖 " + findTimeUntil(sessionInfo.startTime), true, charactersPerLine)}
          numberOfLines={2}
          ellipsizeMode="clip"
          style={styles.subText}
        />
        <StyledH4
          text={truncateText("📍 " + sessionInfo.location, true, 18)}
          numberOfLines={2}
          ellipsizeMode="clip"
          style={styles.subText}
        />
        <StyledH4
          text={truncateText(
            sessionInfo.maxPeople > 1
              ? "👥 " + formatNumPeople(sessionInfo.maxPeople)
              : "👤 " + formatNumPeople(sessionInfo.maxPeople),
            true,
            20
          )}
          numberOfLines={2}
          ellipsizeMode="clip"
          style={styles.subText}
        />
      </View>
    </TouchableOpacity>
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
