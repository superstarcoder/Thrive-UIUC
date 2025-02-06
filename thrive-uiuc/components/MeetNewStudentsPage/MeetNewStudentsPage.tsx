import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import React from "react";
import ProfileCard from "../sharedComponents/ProfileCard";
import { ProfileSettings } from "../../utils/types";
import sharedStyles from "../../styles/SharedStyles";
import Color from "../../styles/Color";
import { StyledH1 } from "../sharedComponents/Text/StyledText";
import NavBar from "../sharedComponents/NavBar";
import { PageName } from "../../App";
import { ArrowLeft, CaretLeft } from "phosphor-react-native";

type Props = {
  currentPage: PageName;
  setCurrentPage: (page: PageName) => void;
};

const profiles: ProfileSettings[] = [
  {
    id: "1",
    name: "Dhanish Natarajan",
    year: "Sophomore",
    major: "Biotechnology and Molecular Biosciences",
    introduction:
      "Lorem ipsum odor amet, consectetuer adipiscing elit. Quis massa ultrices donec at nisl vehicula maecenas ex amet varius maximus integer massa urna finibus gravida lacinia dapibus vulputate lacinia eleifend blandit venenatis elementum nulla placerat tortor dignissim risus vel nam vestibulum rhoncus consequat metus himenaeos class maximus vitae fusce imperdiet quisque convallis leo et class consequat montes dictum fames vulputate augue scelerisque justo porta etiam ultricies platea mus sit aenean posuere libero consectetur scelerisque primis nibh maximus congue egestas mauris hac dolor amet congue pretium fusce tempus quisque taciti dictum nascetur tincidunt pellentesque id turpis habitasse ligula felis volutpat rutrum rhoncus cursus semper vitae malesuada ultricies natoque est consequat potenti laoreet erat habitasse eros ex duis dignissim molestie posuere interdum potenti.",
    hobbies: ["biking", "badminton", "boxing"],
    classes: ["CS 233", "MATH 257", "ENG 199", "ENG 201", "CS 225"],
  },
  {
    id: "2",
    name: "William Lei",
    year: "Freshman",
    major: "Computer Engineering",
    introduction:
      "Lorem ipsum odor amet, consectetuer adipiscing elit. Quis massa ultrices donec at nisl vehicula maecenas ex amet varius maximus integer massa urna finibus gravida lacinia dapibus vulputate lacinia eleifend blandit venenatis elementum nulla placerat tortor dignissim risus vel nam vestibulum rhoncus consequat metus himenaeos class maximus vitae fusce imperdiet quisque convallis leo et class consequat montes dictum fames vulputate augue scelerisque justo porta etiam ultricies platea mus sit aenean posuere libero consectetur scelerisque primis nibh maximus congue egestas mauris hac dolor amet congue pretium fusce tempus quisque taciti dictum nascetur tincidunt pellentesque id turpis habitasse ligula felis volutpat rutrum rhoncus cursus semper vitae malesuada ultricies natoque est consequat potenti laoreet erat habitasse eros ex duis dignissim molestie posuere interdum potenti.",
    hobbies: ["boxing"],
    classes: ["CS 233"],
  },
  {
    id: "3",
    name: "Harith Palani",
    year: "Junior",
    major: "Aerospace Engineering",
    introduction:
      "Lorem ipsum odor amet, consectetuer adipiscing elit. Quis massa ultrices donec at nisl vehicula maecenas ex amet varius maximus integer massa urna finibus gravida lacinia dapibus vulputate lacinia eleifend blandit venenatis elementum nulla placerat tortor dignissim risus vel nam vestibulum rhoncus consequat metus himenaeos class maximus vitae fusce imperdiet quisque convallis leo et class consequat montes dictum fames vulputate augue scelerisque justo porta etiam ultricies platea mus sit aenean posuere libero consectetur scelerisque primis nibh maximus congue egestas mauris hac dolor amet congue pretium fusce tempus quisque taciti dictum nascetur tincidunt pellentesque id turpis habitasse ligula felis volutpat rutrum rhoncus cursus semper vitae malesuada ultricies natoque est consequat potenti laoreet erat habitasse eros ex duis dignissim molestie posuere interdum potenti.",
    hobbies: ["biking"],
    classes: ["CS 233", "MATH 257", "ENG 199", "ENG 201", "CS 225"],
  },
];

const MeetNewStudentsPage = (props: Props) => {
  const { currentPage, setCurrentPage } = props;
  const meetNewStudentsPageHeading = "Meet New Students";
  return (
    <View>
      <ScrollView overScrollMode="never" contentContainerStyle={styles.scrollContainer}>
        <View style={[sharedStyles.pageContainer, styles.meetNewStudentsPage]}>
          <View style={styles.meetNewStudentsHeader}>
            <TouchableOpacity style={{position: "absolute", left: 0, marginLeft: 10, marginTop: 1}} onPress={() => {
                setCurrentPage("home-page");
              }}>
              <ArrowLeft color="white" size="30px" weight="bold" />
            </TouchableOpacity>
            <StyledH1 text={meetNewStudentsPageHeading} style={{ textAlign: "center" }} />
          </View>
          {profiles.map((item, index) => (
            <ProfileCard profileSettings={item} key={index} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default MeetNewStudentsPage;

const styles = StyleSheet.create({
  scrollContainer: {
    backgroundColor: Color.darkestBlue,
    minHeight: "100%",
  },
  meetNewStudentsPage: {
    gap: 15,
    padding: 20,
  },
  meetNewStudentsHeader: {
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    width: "100%"
  },
});
