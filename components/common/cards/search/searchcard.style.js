import { StyleSheet } from "react-native";

import { COLORS, FONT, SHADOWS, SIZES } from "../../../../constants";

const styles = StyleSheet.create({
  container: (selectedExhibit, item) => ({
    width: 135,
    margin: 10,
    backgroundColor: selectedExhibit === item.titleParam ? COLORS.gray : "#333333",
    borderRadius: SIZES.medium,
    justifyContent: "space-between",
    ...SHADOWS.medium,
    shadowColor: COLORS.white,
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  }),
  logoContainer: (selectedExhibit, item) => ({
    width: 135,
    height: 135,
    backgroundColor: selectedExhibit === item.titleParam ? "#FFF" : COLORS.white,
    borderTopRightRadius: SIZES.medium,
    borderTopLeftRadius: SIZES.medium,
    justifyContent: "center",
    alignItems: "center",
  }),
  logoImage: {
    width: "100%",
    height: "100%",
  },
  infoContainer: {
    marginTop: SIZES.small,
    paddingBottom: SIZES.medium
  },
  jobName: (selectedExhibit, item) => ({
    fontSize: SIZES.small,
    fontFamily: FONT.medium,
    color: selectedExhibit === item.titleParam ? COLORS.white : COLORS.primary,
  }),
});

export default styles;
