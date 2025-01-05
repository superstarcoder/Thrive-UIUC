import { StyleSheet, Text, View } from "react-native";
import React, { ReactNode, useEffect, useRef } from "react";
import BottomSheet from "../sharedComponents/FormComponents/BottomSheet";
import Color from "../../styles/Color";
import { StyledH2 } from "../sharedComponents/Text/StyledText";

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
        <></>
        <StyledH2 text="hello" />
      </BottomSheet>
    </View>
  );
};

export default ProfileSettingsModal;

const styles = StyleSheet.create({
  modalStyle: {
    backgroundColor: Color.grayBlue,
    // paddingHorizontal: 30,
  },
});
