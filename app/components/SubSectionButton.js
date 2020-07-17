import React from "react";
import { View, StyleSheet } from "react-native";
import AppText from "./AppText";
import colors from "../config/colors";

function SubSectionButton() {
    return (
        <View style={styles.container}>
            <AppText style={styles.buttonText}>Sub Section</AppText>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.light,
        width: 150,
        height: 40,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        margin: 10,
    },
    buttonText: {
        textAlign: "center",
        color: colors.white,
        fontWeight: "bold",
    },
});

export default SubSectionButton;
