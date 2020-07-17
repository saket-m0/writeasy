import React from "react";
import WriteScreen from "./app/screens/WriteScreen";
import EditScreen from "./app/screens/EditScreen";
import ListScreen from "./app/screens/ListScreen";
import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from "./app/navigation/AppNavigator";

export default function App() {
    return (
        <NavigationContainer>
            <AppNavigator />
        </NavigationContainer>
    );
}
