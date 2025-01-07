import { StyleSheet, Text, View } from "react-native";
import React, { ReactNode, useEffect, useRef, useState } from "react";
import BottomSheet from "../sharedComponents/BottomSheet";
import Color from "../../styles/Color";
import { StyledH2, StyledH4 } from "../sharedComponents/Text/StyledText";
import FormTextInput from "../sharedComponents/FormComponents/FormTextInput";
import FormFieldContainer from "../sharedComponents/FormComponents/FormFieldContainer";
import MultipleChoice from "../sharedComponents/FormComponents/MultipleChoice";
import { ScrollView } from "react-native-gesture-handler";
import { HOBBY_TAGS, TagData } from "../sharedComponents/Tag";
import TextInputDropDown from "../sharedComponents/FormComponents/TextInputDropDown";
import Tag from "../sharedComponents/Tag";
import { isEqualTagData, objectMatchesAnyInArray } from "../../utils/utils";

export type Props = {};

const years = ["Freshman", "Sophomore", "Junior", "Senior"] as const;
type Year = (typeof years)[number];

// temporary list of majors (need to make a full list later)
const majors = [
  "Aerospace Engineering",
  "Bioengineering",
  "Civil Engineering",
  "Computer Engineering",
  "Electrical Engineering",
  "Mechanical Engineering",
];
type Major = (typeof majors)[number];
export type ProfileSettings = {
  name: string;
  year: Year | null;
  major: Major | null;
  introduction: string;
  hobbies: TagData[];
};
const defaultProfileSettings: ProfileSettings = {
  name: "",
  year: null,
  major: null,
  introduction: "",
  hobbies: [],
};

const ProfileSettingsModal = () => {
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

  const updateIntroduction = (newIntroduction: string) =>
    setProfileSettings((prev) => ({ ...prev, introduction: newIntroduction }));

  const addHobby = (newHobby: TagData) => {
    if (objectMatchesAnyInArray(newHobby, profileSettings.hobbies)) return;

    setProfileSettings((prev) => ({
      ...prev,
      hobbies: [...prev.hobbies, newHobby],
    }));
  };

  const removeHobby = (hobbyToRemove: TagData) =>
    setProfileSettings((prev) => ({
      ...prev,
      hobbies: prev.hobbies.filter((h) => !isEqualTagData(h, hobbyToRemove)),
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
            <FormFieldContainer>
              <StyledH2 text="Hobbies*" />
              <TextInputDropDown
                isMultiselect={true}
                onAddTag={addHobby}
                onRemoveTag={removeHobby}
                allTags={HOBBY_TAGS}
                selectedTags={profileSettings.hobbies}
              />
            </FormFieldContainer>

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
                options={[...years]}
                onSelect={(selectedYear: Year) => {
                  updateYear(selectedYear);
                }}
                selectedOption={profileSettings.year}
              />
            </FormFieldContainer>

            <FormFieldContainer>
              <StyledH2 text="Major*" />
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
          </View>
        </ScrollView>
      </BottomSheet>
    </View>
  );
};

export default ProfileSettingsModal;

const styles = StyleSheet.create({
  modalContainerStyle: {
    backgroundColor: Color.grayBlue,
  },
  modalStyle: {
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
