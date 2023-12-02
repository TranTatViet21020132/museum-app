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
  content: {
    fontSize: SIZES.medium,
    color: COLORS.lightWhite
  },
  criteriaTitle: {
    fontSize: SIZES.medium,
    color: COLORS.lightWhite,
    fontWeight: "bold"
  }
});

export default styles;
