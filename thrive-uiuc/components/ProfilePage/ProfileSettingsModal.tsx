import { StyleSheet, Text, View } from "react-native";
import React, { ReactNode, useEffect, useRef } from "react";
import BottomSheet from "../sharedComponents/BottomSheet";
import Color from "../../styles/Color";
import { StyledH2, StyledH4 } from "../sharedComponents/Text/StyledText";
import FormTextInput from "../sharedComponents/FormComponents/FormTextInput";
import FormFieldContainer from "../sharedComponents/FormComponents/FormFieldContainer";

type Props = {};

const ProfileSettingsModal = () => {
  const bottomSheetRef: any = useRef(null);

  useEffect(() => {
    bottomSheetRef?.current?.scrollTo(1);
  }, []);

  return (
    <View>
      <BottomSheet
        ref={bottomSheetRef}
        customStyle={styles.modalStyle}
        clamps={[0, 0.5, 1]}
        scrollingEnabled={false}
      >
        <FormFieldContainer>
          <StyledH2 text="Name*" />
          <FormTextInput
            onFocus={() => {}}
            onBlur={() => {}}
            placeholderText={"placeholder text"}
            text={""}
            onChangeText={() => {}}
            multiline={true}
          />
        </FormFieldContainer>

        <FormFieldContainer>
          <View style={styles.titleAndSubtitle}>
            <StyledH2 text="Year* " />
            <StyledH4 text="(pick one)" style={styles.subtitle} />
          </View>
        </FormFieldContainer>

        <FormFieldContainer>
          <StyledH2 text="Major*" />
        </FormFieldContainer>

        <FormFieldContainer>
          <View style={styles.titleAndSubtitle}>
            <StyledH2 text="Description* " />
            <StyledH4 text="(max: 150 chars)" style={styles.subtitle} />
          </View>
          <FormTextInput
            onFocus={() => {}}
            onBlur={() => {}}
            placeholderText={"placeholder text"}
            text={""}
            onChangeText={() => {}}
            multiline={true}
          />
        </FormFieldContainer>

        <FormFieldContainer>
          <StyledH2 text="Hobbies*" />
        </FormFieldContainer>
      </BottomSheet>
    </View>
  );
};

export default ProfileSettingsModal;

const styles = StyleSheet.create({
  modalStyle: {
    backgroundColor: Color.grayBlue,
    paddingHorizontal: 30,
    gap: 24,
  },
  titleAndSubtitle: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end",
  },
  subtitle: {
    color: Color.lightgray,
  },
});
