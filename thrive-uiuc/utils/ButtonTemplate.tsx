import { GestureResponderEvent, StyleSheet, TouchableOpacity, View } from "react-native";
import { StyledH3 } from "../components/sharedComponents/Text/StyledText";
import sharedStyles from "../styles/SharedStyles";

type ButtonProps = {
    label: string,
    onPress: (event: GestureResponderEvent) => void;
};

const TemplateButton = (props: ButtonProps) => {
    const { label, onPress } = props;
    return (
        <View>
            <TouchableOpacity style={sharedStyles.blueButton} onPress={onPress}>
                <StyledH3 style={styles.buttonText} text={label} />
            </TouchableOpacity>
        </View>
    );
};

export default TemplateButton;

const styles = StyleSheet.create({
    buttonText: {
        color: "black",
    }
});
