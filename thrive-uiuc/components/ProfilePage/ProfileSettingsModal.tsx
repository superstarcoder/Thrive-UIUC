import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { ReactNode, useEffect, useRef, useState } from "react";
import BottomSheet from "../sharedComponents/BottomSheet";
import Color from "../../styles/Color";
import {
  StyledH1,
  StyledH2,
  StyledH4,
} from "../sharedComponents/Text/StyledText";
import FormTextInput from "../sharedComponents/FormComponents/FormTextInput";
import FormFieldContainer from "../sharedComponents/FormComponents/FormFieldContainer";
import MultipleChoice from "../sharedComponents/FormComponents/MultipleChoice";
import { ScrollView } from "react-native-gesture-handler";
import {
  HOBBIES,
  Hobby,
  TagData,
  HOBBY_TAG_DATA,
} from "../sharedComponents/Tag";
import TextInputDropDown from "../sharedComponents/FormComponents/TextInputDropDown";
import Tag from "../sharedComponents/Tag";
import { isEqualTagData, objectMatchesAnyInArray } from "../../utils/utils";

export type Props = {onSavePress: any};

const YEARS = ["Freshman", "Sophomore", "Junior", "Senior"] as const;
type Year = (typeof YEARS)[number];

// temporary list of majors (need to make a full list later)
export const MAJORS = [
  "Aerospace Engineering",
  "Bioengineering",
  "Civil Engineering",
  "Computer Engineering",
  "Electrical Engineering",
  "Mechanical Engineering",
  "Biotechnology and Molecular Biosciences.",
  "Computer Science & Statistics",
];
type Major = (typeof MAJORS)[number];

export type ProfileSettings = {
  name: string;
  year: Year | null;
  major: Major | null;
  introduction: string;
  hobbies: Hobby[];
};

const defaultProfileSettings: ProfileSettings = {
  name: "",
  year: null,
  major: null,
  introduction: "",
  hobbies: [],
};

const ProfileSettingsModal = ({onSavePress}: Props) => {
  const bottomSheetRef: any = useRef(null);
  const [profileSettings, setProfileSettings] = useState<ProfileSettings>(
    defaultProfileSettings
  );

  const updateName = (newName: string) =>
    setProfileSettings((prev) => ({ ...prev, name: newName }));

  const updateYear = (newYear: Year | null) =>
    setProfileSettings((prev) => ({ ...prev, year: newYear }));

  const updateMajor = (newMajor: Major | null) =>
    setProfileSettings((prev) => ({ ...prev, major: newMajor }));

  const deleteMajor = (major: Major | null) =>
    setProfileSettings((prev) => ({
      ...prev,
      major: null,
    }));

  const updateIntroduction = (newIntroduction: string) =>
    setProfileSettings((prev) => ({ ...prev, introduction: newIntroduction }));

  const addHobby = (newHobby: Hobby) => {
    if (profileSettings.hobbies.includes(newHobby)) return;

    setProfileSettings((prev) => ({
      ...prev,
      hobbies: [...prev.hobbies, newHobby],
    }));
  };

  const removeHobby = (hobbyToRemove: Hobby) =>
    setProfileSettings((prev) => ({
      ...prev,
      hobbies: prev.hobbies.filter((h) => h != hobbyToRemove),
    }));

  useEffect(() => {
    bottomSheetRef?.current?.scrollTo(1);
  }, []);

  console.log(profileSettings.hobbies);

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
              <StyledH2 text="Name*" />
              <FormTextInput
                onFocus={() => {}}
                onBlur={() => {}}
                placeholderText={"placeholder text"}
                text={profileSettings.name}
                onChangeText={(newName: string) => {
                  updateName(newName);
                }}
                multiline={false}
              />
            </FormFieldContainer>

            <FormFieldContainer>
              <View style={styles.titleAndSubtitle}>
                <StyledH2 text="Year* " />
                <StyledH4 text="(pick one)" style={styles.subtitle} />
              </View>
              <MultipleChoice
                options={[...YEARS]}
                onSelect={(selectedYear: Year) => {
                  updateYear(selectedYear);
                }}
                selectedOption={profileSettings.year}
              />
            </FormFieldContainer>

            <FormFieldContainer>
              <StyledH2 text="Major*" />
              <TextInputDropDown
                isMultiselect={false}
                onAddTag={updateMajor}
                onRemoveTag={deleteMajor}
                selectedTagLabels={
                  profileSettings.major !== null
                    ? [profileSettings.major ?? ""]
                    : []
                }
                allTagLabels={MAJORS}
              />
            </FormFieldContainer>

            <FormFieldContainer>
              <View style={styles.titleAndSubtitle}>
                <StyledH2 text="Introduction* " />
                <StyledH4 text="(max: 150 chars)" style={styles.subtitle} />
              </View>
              <FormTextInput
                onFocus={() => {}}
                onBlur={() => {}}
                placeholderText={"placeholder text"}
                text={profileSettings.introduction}
                onChangeText={(newIntroduction: string) => {
                  updateIntroduction(newIntroduction);
                }}
                multiline={true}
              />
            </FormFieldContainer>

            <FormFieldContainer>
              <StyledH2 text="Hobbies*" />
              <TextInputDropDown
                isMultiselect={true}
                onAddTag={addHobby}
                onRemoveTag={removeHobby}
                tagDataLookupList={HOBBY_TAG_DATA}
                selectedTagLabels={profileSettings.hobbies}
                allTagLabels={HOBBIES}
              />
            </FormFieldContainer>
          </View>
        </ScrollView>
      </BottomSheet>
    </View>
  );
};

export default ProfileSettingsModal;

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
});
