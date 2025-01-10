import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { useFonts } from "expo-font";

type Props = {
    text: string,
    style?: Object,
    weight?: string,
    numberOfLines?: number,
    ellipsizeMode?: "head" | "middle" | "tail" | "clip"
}

export function StyledH1({ text, style = {}, weight = "regular", numberOfLines = 0, ellipsizeMode = "tail" }: Props) {
    var [fontsLoaded] = useFonts({
        MPlusRegular: require("../../../assets/fonts/mplusRegular.ttf"),
        MPlusMedium: require("../../../assets/fonts/mplusMedium.ttf"),
    });

    if (!fontsLoaded) {
        return null;
    }

    return <Text style={[fontStyles.styledH1, style]} numberOfLines={numberOfLines} ellipsizeMode={ellipsizeMode}>{text}</Text>;
}

export function StyledH2({ text, style = {}, weight = "medium", numberOfLines = 0, ellipsizeMode = "tail" }: Props) {
    var [fontsLoaded] = useFonts({
        MPlusRegular: require("../../../assets/fonts/mplusRegular.ttf"),
        MPlusMedium: require("../../../assets/fonts/mplusMedium.ttf"),
    });

    var fontFamily = weight == "medium" ? "MPlusMedium" : "MPlusRegular";

    if (!fontsLoaded) {
        return null;
    }

    return (
        <Text style={[fontStyles.styledH2, { fontFamily: fontFamily }, style]} numberOfLines={numberOfLines} ellipsizeMode={ellipsizeMode}>
            {text}
        </Text>
    );
}

export function StyledH3({ text, style = {}, weight = "regular", numberOfLines = 0, ellipsizeMode = "tail" }: Props) {
    var [fontsLoaded] = useFonts({
        MPlusRegular: require("../../../assets/fonts/mplusRegular.ttf"),
        MPlusMedium: require("../../../assets/fonts/mplusMedium.ttf"),
    });

    if (!fontsLoaded) {
        return null;
    }

    return <Text style={[fontStyles.styledH3, style]} numberOfLines={numberOfLines} ellipsizeMode={ellipsizeMode}>{text}</Text>;
}

export function StyledH4({ text, style = {}, weight = "regular", numberOfLines = 0, ellipsizeMode = "tail" }: Props) {
    var [fontsLoaded] = useFonts({
        MPlusRegular: require("../../../assets/fonts/mplusRegular.ttf"),
        MPlusMedium: require("../../../assets/fonts/mplusMedium.ttf"),
    });

    if (!fontsLoaded) {
        return null;
    }

    return <Text style={[fontStyles.styledH4, style]} numberOfLines={numberOfLines} ellipsizeMode={ellipsizeMode}>{text}</Text>;
}

export const fontStyles = {
    styledH1: {
        fontFamily: "MPlusMedium",
        fontSize: 24,
        color: "white",
    },
    styledH2: {
        fontFamily: "MPlusMedium",
        fontSize: 20,
        color: "white",
    },
    styledH3: {
        fontFamily: "MPlusMedium",
        fontSize: 17,
        color: "white",
    },
    styledH4: {
        fontFamily: "MPlusMedium",
        fontSize: 12,
        color: "white",
    },
};
