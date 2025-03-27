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

export type Props = {
  onSavePress: any;
};

const defaultProfileSettings: ProfileSettings = {
  id: "",
  name: "",
  year: null,
  major: null,
  introduction: "",
  hobbies: [],
  classes: [],
};

const sampleStudySessionData: StudySessionSettings[] = [
  {
    id: "1",
    name: "MATH 257 Grind Session Group",
    minPeople: 1,
    maxPeople: 2,
    startTime: new Date(Date.now() + 80400000),
    endTime: new Date(Date.now() + 262800000),
    location: "Grainger Library",
  },
  {
    id: "2",
    name: "CS 173",
    minPeople: 1,
    maxPeople: 1,
    startTime: new Date(Date.now() + 804000000),
    endTime: new Date(Date.now() + 962800000),
    location: "Funk ACES Library",
  },
];

const StartStudySessionModal = ({ onSavePress }: Props) => {
  const bottomSheetRef: any = useRef(null);
  // const [profileSettings, setProfileSettings] = useState<ProfileSettings>(defaultProfileSettings);
  const [studySessionSettings, setStudySessionSettings] = useState<StudySessionSettings>(sampleStudySessionData[0]);

  const updateName = (newName: string) => setStudySessionSettings((prev) => ({ ...prev, name: newName }));

  const updateMinPeople = (newMinPeople: number) => setStudySessionSettings((prev) => ({ ...prev, minPeople: newMinPeople }));
  const updateMaxPeople = (newMaxPeople: number) => setStudySessionSettings((prev) => ({ ...prev, maxPeople: newMaxPeople }));

  // const updateYear = (newYear: Year | null) => setProfileSettings((prev) => ({ ...prev, year: newYear }));

  // const updateMajor = (newMajor: Major | null) => setProfileSettings((prev) => ({ ...prev, major: newMajor }));

  // const deleteMajor = (major: Major | null) =>
  //   setProfileSettings((prev) => ({
  //     ...prev,
  //     major: null,
  //   }));

  // const updateIntroduction = (newIntroduction: string) =>
  //   setProfileSettings((prev) => ({ ...prev, introduction: newIntroduction }));

  // const addHobby = (newHobby: Hobby) => {
  //   if (profileSettings.hobbies.includes(newHobby)) return;

  //   setProfileSettings((prev) => ({
  //     ...prev,
  //     hobbies: [...prev.hobbies, newHobby],
  //   }));
  // };

  // const removeHobby = (hobbyToRemove: Hobby) =>
  //   setProfileSettings((prev) => ({
  //     ...prev,
  //     hobbies: prev.hobbies.filter((h) => h != hobbyToRemove),
  //   }));

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
              <RangeSlider min={0} max={10} onValue1Change={updateMinPeople} onValue2Change={updateMaxPeople}/>
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

            <FormFieldContainer>
              <StyledH2 text="Where?*" />
              <View style={styles.studyLocationOptions}>
                <TouchableOpacity>
                  <StudySessionPreviewCard
                    sessionInfo={sampleStudySessionData[0]}
                    width={360}
                    displayLocationOnly={true}
                  />
                </TouchableOpacity>
                <TouchableOpacity>
                  <StudySessionPreviewCard
                    sessionInfo={sampleStudySessionData[0]}
                    width={360}
                    displayLocationOnly={true}
                  />
                </TouchableOpacity>
                <TouchableOpacity>
                  <StudySessionPreviewCard
                    sessionInfo={sampleStudySessionData[0]}
                    width={360}
                    displayLocationOnly={true}
                  />
                </TouchableOpacity>
                <TouchableOpacity>
                  <StudySessionPreviewCard
                    sessionInfo={sampleStudySessionData[0]}
                    width={360}
                    displayLocationOnly={true}
                  />
                </TouchableOpacity>
              </View>
            </FormFieldContainer>
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
  studyLocationOptions: {
    gap: 10,
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  studyLocationOption: {
    display: "flex",
  },
});
