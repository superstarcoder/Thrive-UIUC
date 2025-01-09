import { StyleSheet, Text, View } from "react-native";
import React from "react";
import sharedStyles from "../../styles/SharedStyles";

type Props = {};

const MeetNewStudentsPage = (props: Props) => {
  return (
    <View style={[sharedStyles.pageContainer]}>
      <Text>Template Component</Text>
    </View>
  );
};

export default MeetNewStudentsPage;

const styles = StyleSheet.create({});