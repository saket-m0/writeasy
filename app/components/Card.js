import React from "react";
import { View, StyleSheet, TouchableWithoutFeedback } from "react-native";

import colors from "../config/colors";
import AppText from "../components/AppText";
import defaultStyles from "../config/defaultStyles";

function Card({ title, subTitle, date, onPress }) {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.container}>
                <View style={styles.details}>
                    <View style={styles.detailsContainer}>
                        <AppText
                            style={[
                                defaultStyles.mediumText,
                                styles.detailsTitle,
                            ]}>
                            {title}
                        </AppText>
                        <AppText
                            style={styles.detailsSubTitle}
                            numberOfLines={2}>
                            {subTitle}
                        </AppText>
                    </View>
                    <View style={styles.detailsDateContainer}>
                        <AppText style={styles.detailsDate}>{date}</AppText>
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        borderRadius: 35,
        marginBottom: 20,
        overflow: "hidden",
        width: "100%",
        height: 150,
        flex: 1,
        elevation: 4,
    },
    details: {
        padding: 25,
        flex: 1,
    },
    detailsContainer: {
        flex: 1,
        alignItems: "flex-start",
        justifyContent: "flex-start",
    },
    detailsTitle: {
        fontSize: 24,
    },
    detailsSubTitle: {
        fontSize: 16,
        opacity: 0.75,
        paddingTop: 8,
    },
    detailsDate: {
        color: colors.grey,
        fontSize: 12,
    },
    detailsDateContainer: {
        alignSelf: "flex-end",
    },
});

export default Card;
