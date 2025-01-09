import { GestureResponderEvent, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import sharedStyles from "../../styles/SharedStyles";
import React from "react";
import { StyledH3, StyledH4 } from "../sharedComponents/Text/StyledText";

type Props = {
    label: String,
    onPress: (event: GestureResponderEvent) => void;
};

const Button = (props: Props) => {
    const { label, onPress } = props;
    return (
        <View> 
            <TouchableOpacity style={sharedStyles.blueButton} onPress={onPress}>
                <StyledH3 style={styles.homePageButtonText} text={label}/>
            </TouchableOpacity>
        </View>
    );
};

export default Button;

const styles = StyleSheet.create({
    homePageButtonText: {
        color: "black",
    }
});
