import { StyleSheet, Text, View } from "react-native";
import sharedStyles from "../../styles/SharedStyles";
import React from "react";
import HomePageButton from "./HomePageButton";
import { StyledH2, StyledH4 } from "../sharedComponents/Text/StyledText";
import ProfilePreviewBox from "./ProfilePreviewBox";
import Color from "../../styles/Color";
import { ScrollView } from "react-native-gesture-handler";
import { ProfileSettings } from "../../utils/types";
type OngoingStudySessionBoxProps = {};

const OngoingStudySessionsBox = (props: OngoingStudySessionBoxProps) => {
    const defaultText = "There are no ongoing public study sessions."
    return (
        <View style={styles.ongoingStudySessionsBox}>
            <StyledH4 style={styles.ongoingStudySessionsBoxText} text={defaultText} />
        </View>
    );
};

const profileData: ProfileSettings[] = [
    {
        id: "1",
        name: "Lei",
        year: null,
        major: null,
        introduction: "",
        hobbies: []
    },
    {
        id: "2",
        name: "Dhanish",
        year: null,
        major: null,
        introduction: "",
        hobbies: []
    },
    {
        id: "3",
        name: "Harith",
        year: null,
        major: null,
        introduction: "",
        hobbies: []
    },
    {
        id: "4",
        name: "Sally",
        year: null,
        major: null,
        introduction: "",
        hobbies: [],
    },
    {
        id: "5",
        name: "Steven",
        year: null,
        major: null,
        introduction: "",
        hobbies: []
    },
    {
        id: "6",
        name: "Josephine",
        year: null,
        major: null,
        introduction: "",
        hobbies: []
    },
    {
        id: "7",
        name: "Extremely super duper long test string tomakesurethattheoverflowstylingiscorrectfortestingpurposes",
        year: null,
        major: null,
        introduction: "",
        hobbies: []
    },
    {
        id: "8",
        name: "Marley",
        year: null,
        major: null,
        introduction: "",
        hobbies: []
    },
    {
        id: "9",
        name: "Kendrick Lamar",
        year: null,
        major: null,
        introduction: "",
        hobbies: []
    },
    {
        id: "10",
        name: "Peter L. Smithson",
        year: null,
        major: null,
        introduction: "",
        hobbies: []
    },
    {
        id: "11",
        name: "Bartholomew Huckleberry",
        year: null,
        major: null,
        introduction: "",
        hobbies: []
    },
    {
        id: "12",
        name: "V",
        year: null,
        major: null,
        introduction: "",
        hobbies: []
    },
    {
        id: "13",
        name: "William",
        year: null,
        major: null,
        introduction: "",
        hobbies: []
    },
];

type YourNetworkBoxProps = {}

const YourNetworkBox = (props: YourNetworkBoxProps) => {
    return (
        <View style={styles.profileList}>
            {profileData.map((item) => (
                <ProfilePreviewBox profileName={item.name} key={item.id} />
            ))}
        </View>
    );
};

type HomePageProps = {
    setCurrentPage: any
};

const HomePage = (props: HomePageProps) => {
    const { setCurrentPage } = props;
    const meetNewStudentsButtonLabel = "Meet New Students 👋";
    const startStudySessionButtonLabel = "Start a Study Session 📚";
    const ongoingStudySessionsHeading = "Ongoing Study Sessions";
    const yourNetworkHeading = "Your Network";

    return (
        <ScrollView overScrollMode="never" contentContainerStyle={styles.scrollContainer}>
            <View style={[sharedStyles.pageContainer, styles.homePage]}>
                <HomePageButton label={meetNewStudentsButtonLabel} onPress={() => { setCurrentPage('meet-new-students-page') }} />
                <HomePageButton label={startStudySessionButtonLabel} onPress={() => { setCurrentPage('meet-new-students-page') }} />
                <StyledH2 style={styles.sectionHeading} text={ongoingStudySessionsHeading} />
                <OngoingStudySessionsBox />
                <StyledH2 style={styles.sectionHeading} text={yourNetworkHeading} />
                <YourNetworkBox />
            </View>
        </ScrollView>
    );
};

export default HomePage;

const styles = StyleSheet.create({
    scrollContainer: {
        backgroundColor: Color.darkestBlue
    },
    homePage: {
        paddingVertical: 40,
    },
    sectionHeading: {
        marginTop: "3%"
    },
    profileList: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        rowGap: 10,
        columnGap: 10,
        maxWidth: 250,
    },
    ongoingStudySessionsBox: {
        backgroundColor: Color.darkBlue,
        width: "60%",
        borderRadius: 20,
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 30,
        paddingRight: 30,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    ongoingStudySessionsBoxText: {
        textAlign: "center",
        color: Color.blue
    }
});
