import React from "react";
import { View, StyleSheet } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

import AppIcon from "../components/AppIcon";
import colors from "../config/colors";

function AppScreenButton({ name, onPress }) {
    return (
        <View style={styles.container}>
            <TouchableWithoutFeedback onPress={onPress}>
                <AppIcon
                    name={name}
                    backgroundColor={colors.primary}
                    size={60}
                />
            </TouchableWithoutFeedback>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        bottom: 20,
        right: 20,
        zIndex: 10,
    },
});

export default AppScreenButton;
