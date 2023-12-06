import { StyleSheet } from "react-native";

import { COLORS, SIZES } from "../../../../constants";

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    width: "100%",
  },
  titleContainer: {
    width: "100%",
    marginBottom: SIZES.medium
  },
  title: {
    fontSize: SIZES.xxLarge,
    color: COLORS.lightWhite,
    fontWeight: "bold"
  },
  contentContainer: {
    width: "100%"
  },
  headerContainer: {
    width: "100%",
    marginBottom: SIZES.medium
  },
  contentTitle: {
    fontSize: SIZES.large,
    color: "#008000",
    marginBottom: SIZES.medium
  },
  contentTitle: {
    fontSize: SIZES.large,
    fontWeight: "bold",
    color: "#B5A8D1",
    marginBottom: SIZES.medium
  },
  content: {
    fontSize: SIZES.medium,
    color: COLORS.lightWhite,
    lineHeight: SIZES.xLarge
  }
});

export default styles;
