import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
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
import PageHeader from "../sharedComponents/PageHeader";
import { SafeAreaView } from "react-native-safe-area-context";

type Props = {
  currentPage: PageName;
  setCurrentlyViewingProfileSettings: (profileSettings: ProfileSettings) => void;
  setCurrentPage: (pageName: PageName) => void;
  handleBackAction: () => void;
};

const profileData: ProfileSettings[] = [
  {
    id: "14",
    name: "Daniel Wong",
    year: "Sophomore",
    major: "Electrical Engineering",
    introduction:
      "Lorem ipsum odor amet, consectetuer adipiscing elit. Quis massa ultrices donec at nisl vehicula maecenas ex amet varius maximus integer massa urna finibus gravida lacinia dapibus vulputate lacinia eleifend blandit venenatis elementum nulla placerat tortor dignissim risus vel nam vestibulum rhoncus consequat metus himenaeos class maximus vitae fusce imperdiet quisque convallis leo et class consequat montes dictum fames vulputate augue scelerisque justo porta etiam ultricies platea mus sit aenean posuere libero consectetur scelerisque primis nibh maximus congue egestas mauris hac dolor amet congue pretium fusce tempus quisque taciti dictum nascetur tincidunt pellentesque id turpis habitasse ligula felis volutpat rutrum rhoncus cursus semper vitae malesuada ultricies natoque est consequat potenti laoreet erat habitasse eros ex duis dignissim molestie posuere interdum potenti.",
    hobbies: ["biking"],
    classes: ["CS 225", "MATH 257"],
  },
  {
    id: "15",
    name: "Sarah Johnson",
    year: "Junior",
    major: "Mechanical Engineering",
    introduction:
      "Lorem ipsum odor amet, consectetuer adipiscing elit. Quis massa ultrices donec at nisl vehicula maecenas ex amet varius maximus integer massa urna finibus gravida lacinia dapibus vulputate lacinia eleifend blandit venenatis elementum nulla placerat tortor dignissim risus vel nam vestibulum rhoncus consequat metus himenaeos class maximus vitae fusce imperdiet quisque convallis leo et class consequat montes dictum fames vulputate augue scelerisque justo porta etiam ultricies platea mus sit aenean posuere libero consectetur scelerisque primis nibh maximus congue egestas mauris hac dolor amet congue pretium fusce tempus quisque taciti dictum nascetur tincidunt pellentesque id turpis habitasse ligula felis volutpat rutrum rhoncus cursus semper vitae malesuada ultricies natoque est consequat potenti laoreet erat habitasse eros ex duis dignissim molestie posuere interdum potenti.",
    hobbies: ["badminton"],
    classes: ["CS 233", "ENG 199"],
  },
  {
    id: "16",
    name: "David Kim",
    year: "Senior",
    major: "Civil Engineering",
    introduction:
      "Lorem ipsum odor amet, consectetuer adipiscing elit. Quis massa ultrices donec at nisl vehicula maecenas ex amet varius maximus integer massa urna finibus gravida lacinia dapibus vulputate lacinia eleifend blandit venenatis elementum nulla placerat tortor dignissim risus vel nam vestibulum rhoncus consequat metus himenaeos class maximus vitae fusce imperdiet quisque convallis leo et class consequat montes dictum fames vulputate augue scelerisque justo porta etiam ultricies platea mus sit aenean posuere libero consectetur scelerisque primis nibh maximus congue egestas mauris hac dolor amet congue pretium fusce tempus quisque taciti dictum nascetur tincidunt pellentesque id turpis habitasse ligula felis volutpat rutrum rhoncus cursus semper vitae malesuada ultricies natoque est consequat potenti laoreet erat habitasse eros ex duis dignissim molestie posuere interdum potenti.",
    hobbies: ["boxing"],
    classes: ["CS 233", "ENG 201"],
  },
  {
    id: "17",
    name: "Jessica Martinez",
    year: "Freshman",
    major: "Biomedical Engineering",
    introduction:
      "Lorem ipsum odor amet, consectetuer adipiscing elit. Quis massa ultrices donec at nisl vehicula maecenas ex amet varius maximus integer massa urna finibus gravida lacinia dapibus vulputate lacinia eleifend blandit venenatis elementum nulla placerat tortor dignissim risus vel nam vestibulum rhoncus consequat metus himenaeos class maximus vitae fusce imperdiet quisque convallis leo et class consequat montes dictum fames vulputate augue scelerisque justo porta etiam ultricies platea mus sit aenean posuere libero consectetur scelerisque primis nibh maximus congue egestas mauris hac dolor amet congue pretium fusce tempus quisque taciti dictum nascetur tincidunt pellentesque id turpis habitasse ligula felis volutpat rutrum rhoncus cursus semper vitae malesuada ultricies natoque est consequat potenti laoreet erat habitasse eros ex duis dignissim molestie posuere interdum potenti.",
    hobbies: ["biking"],
    classes: ["CS 225"],
  },
  {
    id: "18",
    name: "Michael Brown",
    year: "Sophomore",
    major: "Aerospace Engineering",
    introduction:
      "Lorem ipsum odor amet, consectetuer adipiscing elit. Quis massa ultrices donec at nisl vehicula maecenas ex amet varius maximus integer massa urna finibus gravida lacinia dapibus vulputate lacinia eleifend blandit venenatis elementum nulla placerat tortor dignissim risus vel nam vestibulum rhoncus consequat metus himenaeos class maximus vitae fusce imperdiet quisque convallis leo et class consequat montes dictum fames vulputate augue scelerisque justo porta etiam ultricies platea mus sit aenean posuere libero consectetur scelerisque primis nibh maximus congue egestas mauris hac dolor amet congue pretium fusce tempus quisque taciti dictum nascetur tincidunt pellentesque id turpis habitasse ligula felis volutpat rutrum rhoncus cursus semper vitae malesuada ultricies natoque est consequat potenti laoreet erat habitasse eros ex duis dignissim molestie posuere interdum potenti.",
    hobbies: ["badminton"],
    classes: ["CS 233", "MATH 257"],
  },
  {
    id: "19",
    name: "Emma Wilson",
    year: "Junior",
    major: "Computer Engineering",
    introduction:
      "Lorem ipsum odor amet, consectetuer adipiscing elit. Quis massa ultrices donec at nisl vehicula maecenas ex amet varius maximus integer massa urna finibus gravida lacinia dapibus vulputate lacinia eleifend blandit venenatis elementum nulla placerat tortor dignissim risus vel nam vestibulum rhoncus consequat metus himenaeos class maximus vitae fusce imperdiet quisque convallis leo et class consequat montes dictum fames vulputate augue scelerisque justo porta etiam ultricies platea mus sit aenean posuere libero consectetur scelerisque primis nibh maximus congue egestas mauris hac dolor amet congue pretium fusce tempus quisque taciti dictum nascetur tincidunt pellentesque id turpis habitasse ligula felis volutpat rutrum rhoncus cursus semper vitae malesuada ultricies natoque est consequat potenti laoreet erat habitasse eros ex duis dignissim molestie posuere interdum potenti.",
    hobbies: ["boxing"],
    classes: ["ENG 199", "ENG 201"],
  },
  {
    id: "20",
    name: "Lucas Anderson",
    year: "Senior",
    major: "Mechanical Engineering",
    introduction:
      "Lorem ipsum odor amet, consectetuer adipiscing elit. Quis massa ultrices donec at nisl vehicula maecenas ex amet varius maximus integer massa urna finibus gravida lacinia dapibus vulputate lacinia eleifend blandit venenatis elementum nulla placerat tortor dignissim risus vel nam vestibulum rhoncus consequat metus himenaeos class maximus vitae fusce imperdiet quisque convallis leo et class consequat montes dictum fames vulputate augue scelerisque justo porta etiam ultricies platea mus sit aenean posuere libero consectetur scelerisque primis nibh maximus congue egestas mauris hac dolor amet congue pretium fusce tempus quisque taciti dictum nascetur tincidunt pellentesque id turpis habitasse ligula felis volutpat rutrum rhoncus cursus semper vitae malesuada ultricies natoque est consequat potenti laoreet erat habitasse eros ex duis dignissim molestie posuere interdum potenti.",
    hobbies: ["biking"],
    classes: ["CS 233"],
  },
];

const MeetNewStudentsPage = (props: Props) => {
  const { currentPage, handleBackAction, setCurrentlyViewingProfileSettings, setCurrentPage } = props;
  return (
    <SafeAreaView style={sharedStyles.androidSafeAreaContainer}>
      <StatusBar barStyle="light-content" backgroundColor={Color.darkestBlue} />
      <PageHeader header="Meet New Students" isBackButtonPresent={true} handleBackAction={handleBackAction} />
      <ScrollView overScrollMode="auto" contentContainerStyle={styles.scrollContainer}>
        <View style={[sharedStyles.pageContainer, styles.meetNewStudentsPage]}>
          {profileData.map((item, index) => (
            <ProfileCard
              setCurrentPage={setCurrentPage}
              setCurrentlyViewingProfileSettings={setCurrentlyViewingProfileSettings}
              profileSettings={item}
              key={index}
              truncated={true}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
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
    paddingTop: 10,
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
  },
});
