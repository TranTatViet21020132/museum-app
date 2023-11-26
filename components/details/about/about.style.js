import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    marginTop: SIZES.large,
    backgroundColor: COLORS.gray3,
    borderRadius: SIZES.medium,
    padding: SIZES.medium,
  },
  headText: {
    fontSize: SIZES.large,
    color: COLORS.primary,
    fontFamily: FONT.bold,
  },
  tabsContainer: {
    flex: 1,
    width: "100%",
    marginTop: SIZES.xSmall,
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  image: {
    marginTop: SIZES.xSmall,
    width: "100%",
    height: 200,
    marginBottom: SIZES.medium,
  },
  text: {
    color: COLORS.lightWhite,
  },
  contentBox: {
    marginVertical: SIZES.small,
  },
  contextText: {
    fontSize: SIZES.medium - 2,
    color: COLORS.gray,
    fontFamily: FONT.regular,
    marginVertical: SIZES.small / 1.25,
  },
});

export default styles;
