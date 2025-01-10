import { StyleSheet, Text, View } from "react-native";
import sharedStyles from "../../styles/SharedStyles";
import React from "react";
import HomePageButton from "./HomePageButton";
import { StyledH2, StyledH4 } from "../sharedComponents/Text/StyledText";
import YourNetworkProfileBox from "./YourNetworkProfileBox";
import Color from "../../styles/Color";
import { ProfileSettings } from "../ProfilePage/ProfileSettingsModal";
type OngoingStudySessionBoxProps = {};

const OngoingStudySessionsBox = (props: OngoingStudySessionBoxProps) => {
    const defaultText = "There are no ongoing public study sessions."
    return (
        <View style={styles.ongoingStudySessionsBox}>
            <StyledH4 style={styles.ongoingStudySessionsBoxText} text={defaultText} />
        </View>
    );
};

type ProfileData = {
    id: string;
    profileName: string;
};

const data: ProfileData[] = [
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
    {
        id: "4",
        profileName: "Sally",
    },
    {
        id: "5",
        profileName: "Joe",
    },
    {
        id: "6",
        profileName: "Pneumonoultramicroscopicsilicovolcanoconiosis",
    },
    {
        id: "7",
        profileName: "Extremelysuperduperlongteststringtomakesurethattheoverflowstylingiscorrectfortestingpurposes",
    },
    {
        id: "8",
        profileName: "Steven",
    },
    {
        id: "9",
        profileName: "Santa Claus",
    },
    {
        id: "10",
        profileName: "Jonathan",
    },
    {
        id: "11",
        profileName: "Rudy",
    },
    {
        id: "12",
        profileName: "Amos",
    },
    {
        id: "13",
        profileName: "Amos",
    },
];

type YourNetworkBoxProps = {}

const YourNetworkBox = (props: YourNetworkBoxProps) => {
    return (
        <View style={styles.profileList}>
            {data.map((item) => (
                <YourNetworkProfileBox profileName={item.profileName} key={item.id} />
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
        <View style={[sharedStyles.pageContainer, styles.homePage]}>
            <HomePageButton label={meetNewStudentsButtonLabel} onPress={() => { setCurrentPage('meet-new-students-page') }} />
            <HomePageButton label={startStudySessionButtonLabel} onPress={() => { setCurrentPage('meet-new-students-page') }} />
            <StyledH2 style={styles.sectionHeading} text={ongoingStudySessionsHeading} />
            <OngoingStudySessionsBox />
            <StyledH2 style={styles.sectionHeading} text={yourNetworkHeading} />
            <YourNetworkBox />
        </View>
    );
};

export default HomePage;

const styles = StyleSheet.create({
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
        paddingRight: 30
    },
    ongoingStudySessionsBoxText: {
        textAlign: "center",
        color: Color.blue
    }
});
