import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    marginTop: SIZES.large,
    backgroundColor: COLORS.gray3,
    borderRadius: SIZES.medium,
    padding: SIZES.medium,
    paddingBottom: 0,
  },
  title: {
    fontSize: SIZES.large,
    color: COLORS.primary,
    fontFamily: FONT.bold,
  },
  pointsContainer: {
    marginVertical: SIZES.small,
  },
  paragraph: {
    width: "100%",
    display: "flex",
  },
  text: {
    color: COLORS.lightWhite,
  },
});

export default styles;
