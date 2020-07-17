import React from "react";
import { StyleSheet, FlatList, View } from "react-native";

import colors from "../config/colors";
import AppText from "../components/AppText";
import Screen from "../components/Screen";
import defaultStyles from "../config/defaultStyles";
import Card from "../components/Card";
import AppScreenButton from "../components/AppScreenButton";
import WriteScreen from "./WriteScreen";

const data = [
    {
        id: "1",
        title: "Title 1",
        subTitle: "subtitle",
        date: "11th July 2020",
    },
    {
        id: "2",
        title: "Title 2",
        subTitle:
            "Praesent suscipit viverra mi, sit amet volutpat elit maximus pellentesque. Aenean laoreet non diam eget maximus. Praesent ac dapibus leo. Donec sed condimentum leo, ac pellentesque lacus. Nam varius auctor rutrum. In ornare, justo eget eleifend bibendum, dui lacus porta elit, eget interdum nisi turpis in quam. Phasellus justo tellus, accumsan nec est ac, finibus consectetur erat. Suspendisse a odio eros.",
        date: "12th July 2020",
    },
    {
        id: "3",
        title: "Title 2",
        subTitle:
            "Praesent suscipit viverra mi, sit amet volutpat elit maximus pellentesque. Aenean laoreet non diam eget maximus. Praesent ac dapibus leo. Donec sed condimentum leo, ac pellentesque lacus. Nam varius auctor rutrum. In ornare, justo eget eleifend bibendum, dui lacus porta elit, eget interdum nisi turpis in quam. Phasellus justo tellus, accumsan nec est ac, finibus consectetur erat. Suspendisse a odio eros.",
        date: "12th July 2020",
    },
    {
        id: "4",
        title: "Title 2",
        subTitle:
            "Praesent suscipit viverra mi, sit amet volutpat elit maximus pellentesque. Aenean laoreet non diam eget maximus. Praesent ac dapibus leo. Donec sed condimentum leo, ac pellentesque lacus. Nam varius auctor rutrum. In ornare, justo eget eleifend bibendum, dui lacus porta elit, eget interdum nisi turpis in quam. Phasellus justo tellus, accumsan nec est ac, finibus consectetur erat. Suspendisse a odio eros.",
        date: "12th July 2020",
    },
    {
        id: "5",
        title: "Title 2",
        subTitle:
            "Praesent suscipit viverra mi, sit amet volutpat elit maximus pellentesque. Aenean laoreet non diam eget maximus. Praesent ac dapibus leo. Donec sed condimentum leo, ac pellentesque lacus. Nam varius auctor rutrum. In ornare, justo eget eleifend bibendum, dui lacus porta elit, eget interdum nisi turpis in quam. Phasellus justo tellus, accumsan nec est ac, finibus consectetur erat. Suspendisse a odio eros.",
        date: "12th July 2020",
    },
];

function ListScreen({ navigation }) {
    return (
        <Screen style={styles.container}>
            <AppText style={[defaultStyles.mediumText, styles.title]}>
                Writeasy
            </AppText>
            <AppScreenButton
                name={"plus"}
                onPress={() => navigation.navigate("EditScreen")}
            />
            <FlatList
                style={styles.flatList}
                data={data}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <Card
                        onPress={() => navigation.navigate("WriteScreen")}
                        title={item.title}
                        subTitle={item.subTitle}
                        date={item.date}
                    />
                )}
            />
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.background,
        width: "100%",
        height: "100%",
        alignItems: "center",
        paddingHorizontal: 20,
    },
    title: {
        color: colors.primary,
        fontSize: 40,
        padding: 20,
        paddingVertical: 50,
        textAlign: "center",
    },
    flatList: { width: "100%" },
});

export default ListScreen;
