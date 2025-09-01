import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { ReactNode, useEffect, useRef, useState } from "react";
import BottomSheet from "../sharedComponents/BottomSheet";
import Color from "../../styles/Color";
import { StyledH1, StyledH2, StyledH3, StyledH4 } from "../sharedComponents/Text/StyledText";
import FormTextInput from "../sharedComponents/FormComponents/FormTextInput";
import FormFieldContainer from "../sharedComponents/FormComponents/FormFieldContainer";
import MultipleChoice from "../sharedComponents/FormComponents/MultipleChoice";
import { ScrollView } from "react-native-gesture-handler";
import { HOBBY_TAG_DATA } from "../sharedComponents/Tag";
import TextInputDropDown from "../sharedComponents/FormComponents/TextInputDropDown";
import Tag from "../sharedComponents/Tag";
import { isEqualTagData, objectMatchesAnyInArray } from "../../utils/utils";
import { HOBBIES, Hobby, Major, MAJORS, ProfileSettings, StudySessionSettings, Year, YEARS } from "../../utils/types";
import StudySessionPreviewCard from "../HomePage/StudySessionPreviewCard";
import DualThumbSlider from "../sharedComponents/RangeSlider";
import RangeSlider from "../sharedComponents/RangeSlider";
import LocationSelectField from "./LocationSelectField";

export type Props = {
  onSavePress: any;
};

const defaultStudySessionSettings: StudySessionSettings = {
  id: "0",
  name: "",
  minPeople: 2,
  maxPeople: 5,
  startTime: new Date(Date.now() + 80400000),
  endTime: new Date(Date.now() + 262800000),
  location: null,
};

const sampleStudySessionData: StudySessionSettings[] = [
  {
    id: "1",
    name: "MATH 257 Grind Session Group",
    minPeople: 1,
    maxPeople: 2,
    startTime: new Date(Date.now() + 80400000),
    endTime: new Date(Date.now() + 262800000),
    location: null,
  },
];

// TODO: make a data type for StudyLocation and StudyRoom!!
// 

const StartStudySessionModal = ({ onSavePress }: Props) => {
  const bottomSheetRef: any = useRef(null);
  // const [profileSettings, setProfileSettings] = useState<ProfileSettings>(defaultProfileSettings);
  const [studySessionSettings, setStudySessionSettings] = useState<StudySessionSettings>(defaultStudySessionSettings);

  const updateName = (newName: string) => setStudySessionSettings((prev) => ({ ...prev, name: newName }));

  const updateMinPeople = (newMinPeople: number) =>
    setStudySessionSettings((prev) => ({ ...prev, minPeople: newMinPeople }));
  const updateMaxPeople = (newMaxPeople: number) =>
    setStudySessionSettings((prev) => ({ ...prev, maxPeople: newMaxPeople }));

  useEffect(() => {
    bottomSheetRef?.current?.scrollTo(1);
  }, []);



  return (
    <View>
      <BottomSheet
        ref={bottomSheetRef}
        customStyle={styles.modalContainerStyle}
        clamps={[0, 0.5, 1]}
        scrollingEnabled={false}
      >
        <ScrollView>
          <View style={styles.modalStyle}>
            <TouchableOpacity onPress={onSavePress}>
              <View style={styles.saveButton}>
                <StyledH1 text={"Save"} style={styles.saveButtonText} />
              </View>
            </TouchableOpacity>
            <FormFieldContainer>
              {/* <StyledH2 text="Title*" /> */}
              <View style={styles.titleAndSubtitle}>
                <StyledH2 text="Title* " />
                <StyledH4 text="(eg: PHYS 212 midterm prep)" style={styles.subtitle} />
              </View>
              <FormTextInput
                onFocus={() => {}}
                onBlur={() => {}}
                placeholderText={"placeholder text"}
                text={studySessionSettings.name}
                onChangeText={(newName: string) => {
                  updateName(newName);
                }}
                multiline={false}
              />
            </FormFieldContainer>

            <FormFieldContainer>
              <View style={styles.titleAndSubtitle}>
                <StyledH2 text="How Many People?* " />
                <StyledH4 text="(min - max)" style={styles.subtitle} />
              </View>
              <StyledH3 text={`${studySessionSettings.minPeople} - ${studySessionSettings.maxPeople} people`} />
              <RangeSlider min={0} max={10} onValue1Change={updateMinPeople} onValue2Change={updateMaxPeople} />
            </FormFieldContainer>

            {/* TODO: work on making work so you can invite other ppl from ur network. */}
            {/* <FormFieldContainer>
              <StyledH3 text="Invite People From Your Network*" />
              <TextInputDropDown
                isMultiselect={true}
                onAddTag={addHobby}
                onRemoveTag={removeHobby}
                tagDataLookupList={HOBBY_TAG_DATA}
                selectedTagLabels={profileSettings.hobbies}
                allTagLabels={HOBBIES}
              />
            </FormFieldContainer> */}

            <View style={styles.locationFormFieldContainer}>
              <StyledH2 text="Where?*" />
              <LocationSelectField />
            </View>
          </View>
        </ScrollView>
      </BottomSheet>
    </View>
  );
};

export default StartStudySessionModal;

const styles = StyleSheet.create({
  saveButton: {
    alignSelf: "center",
    paddingHorizontal: 12,
    paddingVertical: 6,
    backgroundColor: Color.orange,
    borderRadius: 10,
  },
  locationFormFieldContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
  saveButtonText: {
    color: "black",
  },
  modalContainerStyle: {
    backgroundColor: Color.grayBlue,
  },
  modalStyle: {
    paddingHorizontal: 30,
    gap: 24,
    paddingBottom: 1000,
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
