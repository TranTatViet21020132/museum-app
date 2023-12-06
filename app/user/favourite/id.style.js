import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../../constants";

const styles = StyleSheet.create({
    text: {
        color: COLORS.lightWhite,
    },
    container: {
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },
    title: {
        fontFamily: FONT.bold,
        fontSize: SIZES.xLarge,
        color: COLORS.primary,
        marginTop: 2,
    },
    image: {
        marginTop: SIZES.xSmall,
        width: "100%",
        height: 200,
        marginBottom: SIZES.medium,
    },
    contentContainer: {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        width: "100%",
    },
    tab: (activeJobType, item) => ({
        paddingVertical: SIZES.small / 2,
        paddingHorizontal: SIZES.small,
        borderRadius: SIZES.medium,
        borderWidth: 1,
        borderColor: activeJobType === item ? COLORS.secondary : COLORS.gray2,
    }),
    tabText: (activeJobType, item) => ({
        fontFamily: FONT.medium,
        color: activeJobType === item ? COLORS.secondary : COLORS.gray2,
    }),
});

export default styles;
