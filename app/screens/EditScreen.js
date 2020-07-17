import React from "react";
import { View, StyleSheet, TextInput, FlatList } from "react-native";

import colors from "../config/colors";
import Screen from "../components/Screen";
import AppScreenButton from "../components/AppScreenButton";
import SubSectionButton from "../components/SubSectionButton";
import AppText from "../components/AppText";

const data = [
    {
        id: "1",
        name: "Subsection",
    },
    {
        id: "2",
        name: "Subsection",
    },
    {
        id: "3",
        name: "Subsection",
    },
    {
        id: "4",
        name: "Subsection",
    },
    {
        id: "5",
        name: "Subsection",
    },
    {
        id: "6",
        name: "Subsection",
    },
    {
        id: "7",
        name: "Subsection",
    },
    {
        id: "8",
        name: "Subsection",
    },
    {
        id: "9",
        name: "Subsection",
    },
    {
        id: "10",
        name: "Subsection",
    },
];

function EditScreen() {
    return (
        <Screen style={styles.container}>
            <AppScreenButton name='check' />
            <View style={styles.writeBackground}>
                <TextInput style={styles.titleInput} placeholder='Title' />
                <TextInput
                    style={styles.subtitleInput}
                    multiline
                    placeholder='Content'
                />
            </View>
            <View style={styles.subSectionButtonsContainer}>
                <FlatList
                    horizontal={true}
                    style={styles.flatList}
                    data={data}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => <SubSectionButton />}
                />
            </View>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.background,
        width: "100%",
        height: "100%",
    },
    flatList: {
        marginTop: 15,
    },
    subSectionButtonsContainer: {
        alignItems: "center",
    },
    subtitleInput: {
        padding: 15,
        alignItems: "flex-start",
        width: "95%",
        height: 350,
        backgroundColor: colors.white,
        textAlignVertical: "top",
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
    titleInput: {
        paddingHorizontal: 20,
        width: "95%",
        height: 60,
        fontSize: 24,
        backgroundColor: colors.white,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderBottomWidth: 2,
        borderColor: colors.light,
    },

    writeBackground: {
        width: "100%",
        paddingTop: 30,
        paddingHorizontal: 20,
        backgroundColor: colors.primary,
        height: 480,
        borderBottomStartRadius: 40,
        borderBottomEndRadius: 40,
        overflow: "hidden",
        alignItems: "center",
    },
});

export default EditScreen;
