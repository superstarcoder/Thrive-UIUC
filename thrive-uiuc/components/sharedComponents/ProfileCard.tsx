import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Hobby } from "../../utils/types";

// truncated: true (default) = introduction cut off, false = introduction fully shown
// connectable: true (default) = connect/ignore buttons shown, false = connect/ignore buttons hidden
type Props = {
    classes: string[],
    hobbies: Hobby[],
    truncated?: boolean,
    connectable?: boolean
};

const ProfileCard = ({ classes, truncated = true, connectable = true }: Props) => {
    return (
        <View>
            
        </View>
    );
};

export default ProfileCard;

const styles = StyleSheet.create({
    profileCard: {

    }
});
