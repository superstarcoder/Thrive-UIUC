import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import YourNetworkProfileBox from "./YourNetworkProfileBox";

type Props = {};
type ItemData = {
  id: string;
  profileName: string;
};

const data: ItemData[] = [
  {
    id: "1",
    profileName: "Lei",
  },
  {
    id: "2",
    profileName: "Dhanish",
  },
  {
    id: "3",
    profileName: "Harith",
  },
];

const YourNetworkBox = (props: Props) => {
  return (
    <View style={styles.profileList}>
      {data.map((item, index) => (
        <>
          <YourNetworkProfileBox profileName={item.profileName} key={index} />
        </>
      ))}
    </View>
  );
};

export default YourNetworkBox;

const styles = StyleSheet.create({
    profileList: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        gap: 10,
    }
});
