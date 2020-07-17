import { Platform } from "react-native";
import colors from "./colors";

export default {
    text: {
        color: colors.black,
        fontSize: 18,
        fontFamily: Platform.OS === "android" ? "sans-serif" : "Avenir",
        width: "100%",
    },
    mediumText: {
        ...Platform.select({
            ios: {
                fontWeight: "600",
            },
            android: {
                fontFamily: "sans-serif-medium",
            },
        }),
    },
    title: {
        textAlign: "center",
        padding: 20,
        fontSize: 24,
    },
};
