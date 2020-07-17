import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ListScreen from "../screens/ListScreen";
import WriteScreen from "../screens/WriteScreen";
import EditScreen from "../screens/EditScreen";

const Stack = createStackNavigator();

const AppNavigator = () => (
    <Stack.Navigator mode='modal' screenOptions={{ headerShown: false }}>
        <Stack.Screen name='ListScreen' component={ListScreen} />
        <Stack.Screen name='WriteScreen' component={WriteScreen} />
        <Stack.Screen name='EditScreen' component={EditScreen} />
    </Stack.Navigator>
);

export default AppNavigator;
