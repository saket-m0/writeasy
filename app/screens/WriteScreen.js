import React from "react";
import {
    View,
    StyleSheet,
    FlatList,
    ScrollView,
    TouchableWithoutFeedback,
    KeyboardAvoidingView,
} from "react-native";

import colors from "../config/colors";
import Screen from "../components/Screen";
import AppText from "../components/AppText";
import AppScreenButton from "../components/AppScreenButton";
import SubSectionButton from "../components/SubSectionButton";
import AppIcon from "../components/AppIcon";

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
    {
        id: "11",
        name: "Subsection",
    },
    {
        id: "12",
        name: "Subsection",
    },
    {
        id: "13",
        name: "Subsection",
    },
];

function WriteScreen({ navigation }) {
    return (
        <Screen style={styles.container}>
            <AppScreenButton
                name={"pencil"}
                onPress={() => navigation.navigate("EditScreen")}
            />
            <View style={styles.writeBackground}>
                <View>
                    <AppText style={styles.title}>This is my Title</AppText>
                </View>
                <ScrollView>
                    <AppText style={styles.subtitle}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse et libero et orci imperdiet placerat. Cras
                        diam ante, dignissim eu ipsum quis, lobortis accumsan
                        augue. Interdum et malesuada fames ac ante ipsum primis
                        in faucibus. Suspendisse pellentesque tellus massa, eget
                        dignissim nulla sagittis vel. Nunc a purus pellentesque,
                        interdum ante non, dictum erat. Curabitur ut lacus id
                        nisi volutpat commodo ac at mi. Duis gravida metus vitae
                        quam efficitur auctor et at leo.
                        {"\n"}
                        {"\n"}
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse et libero et orci imperdiet placerat. Cras
                        diam ante, dignissim eu ipsum quis, lobortis accumsan
                        augue. Interdum et malesuada fames ac ante ipsum primis
                        in faucibus. Suspendisse pellentesque tellus massa, eget
                        dignissim nulla sagittis vel. Nunc a purus pellentesque,
                        interdum ante non, dictum erat. Curabitur ut lacus id
                        nisi volutpat commodo ac at mi. Duis gravida metus vitae
                        quam efficitur auctor et at leo.
                        {"\n"}
                        {"\n"}
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse et libero et orci imperdiet placerat. Cras
                        diam ante, dignissim eu ipsum quis, lobortis accumsan
                        augue. Interdum et malesuada fames ac ante ipsum primis
                        in faucibus. Suspendisse pellentesque tellus massa, eget
                        dignissim nulla sagittis vel. Nunc a purus pellentesque,
                        interdum ante non, dictum erat. Curabitur ut lacus id
                        nisi volutpat commodo ac at mi. Duis gravida metus vitae
                        quam efficitur auctor et at leo.
                    </AppText>
                </ScrollView>
            </View>
            <View style={styles.subSectionButtonsContainer}>
                <FlatList
                    numColumns={2}
                    style={styles.flatList}
                    data={data}
                    columnWrapperStyle={styles.columnWrapperStyle}
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
    columnWrapperStyle: {
        justifyContent: "space-between",
    },
    flatList: {
        marginTop: 15,
        width: "90%",
        height: 280,
    },
    subSectionButtonsContainer: {
        alignItems: "center",
    },
    subtitle: {
        textAlign: "left",
        color: colors.white,
        paddingTop: 15,
        paddingHorizontal: 10,
        overflow: "scroll",
        fontSize: 17,
    },
    title: {
        textAlign: "center",
        color: colors.white,
        fontWeight: "bold",
        fontSize: 32,
        padding: 10,
    },
    writeBackground: {
        width: "100%",
        padding: 25,
        backgroundColor: colors.primary,
        height: 475,
        borderBottomStartRadius: 40,
        borderBottomEndRadius: 40,
        overflow: "hidden",
    },
});

export default WriteScreen;
