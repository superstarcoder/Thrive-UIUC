import { StyleSheet, Text, View } from "react-native";
import sharedStyles from "../../styles/SharedStyles";
import React from "react";
import Button from "./Button";
import OngoingStudySessionsBox from "./OngoingStudySessionsBox";
import { StyledH2 } from "../sharedComponents/Text/StyledText";
import YourNetworkBox from "./YourNetworkBox";

type Props = {
    navigation: any
};

const HomePage = (props: Props) => {
    const { navigation } = props;
    const meetNewStudentsButtonLabel = "Meet New Students 👋";
    const startStudySessionButtonLabel = "Start a Study Session 📚";
    const ongoingStudySessionsHeading = "Ongoing Study Sessions";
    const yourNetworkHeading = "Your Network";

    return (
        <View style={[sharedStyles.pageContainer, styles.homePage]}>
            <Button label={meetNewStudentsButtonLabel} onPress={() => navigation.navigate('meet-new-page')} />
            <Button label={startStudySessionButtonLabel} onPress={() => navigation.navigate('meet-new-page')} />
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

    },
    sectionHeading: {
        marginTop: "3%"
    }
});
