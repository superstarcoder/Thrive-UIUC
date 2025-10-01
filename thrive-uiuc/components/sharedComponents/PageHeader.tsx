import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Color from "../../styles/Color";
import { StyledH0, StyledH1, StyledH2 } from "./Text/StyledText";
import { ArrowLeft } from "phosphor-react-native";
import { PageName } from "../../App";
import { useSafeAreaInsets } from "react-native-safe-area-context";

type Props = {
  header: string;
  isBackButtonPresent?: boolean;
  handleBackAction?: () => void;
  setHeaderHeight?: (headerHeight: number) => void;
};

const PageHeader = ({
  header,
  isBackButtonPresent = false,
  handleBackAction = () => {},
  setHeaderHeight = () => {},
}: Props) => {
  const insets = useSafeAreaInsets();
  return (
    <View
      style={[styles.pageHeader, { paddingTop: insets.top }]}
      onLayout={(event) => {
        const { height } = event.nativeEvent.layout;
        setHeaderHeight(height);
      }}
    >
      <View style={styles.pageHeaderContentBox}>
        {isBackButtonPresent && (
          <TouchableOpacity
            style={{
              position: "absolute",
              left: 0,
              marginLeft: 15,
              marginTop: 2,
              paddingRight: 20,
              paddingVertical: 15,
            }}
            onPress={() => {
              handleBackAction();
            }}
          >
            <ArrowLeft color="white" size="30px" weight="bold" />
          </TouchableOpacity>
        )}
        <StyledH2 text={header} />
      </View>
    </View>
  );
};

export default PageHeader;

const styles = StyleSheet.create({
  pageHeader: {
    display: "flex",
    backgroundColor: Color.darkestBlue,
    position: "relative",
    top: 0,
    width: "100%",
    borderBottomColor: Color.gray,
    borderBottomWidth: 2,
    zIndex: 999,
    elevation: 10,
  },
  pageHeaderContentBox: {
    padding: 5,
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    width: "100%",
  },
});
