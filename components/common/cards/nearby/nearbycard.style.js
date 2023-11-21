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
    alignItems: "left"
  }),
  logoContainer: (selectedExhibit, item) => ({
    width: 135,
    height: 135,
    backgroundColor: selectedExhibit === item.titleParam ? "#FFF" : COLORS.white,
    borderTopLeftRadius: SIZES.medium,
    borderTopRightRadius: SIZES.medium,
    justifyContent: "center",
    alignItems: "center",
  }),
  logoImage: {
    width: "100%",
    height: "100%",
  },
  infoContainer: {
    marginTop: SIZES.xSmall,
    marginLeft: SIZES.xSmall,
    paddingBottom: SIZES.small
  },
  title: (selectedExhibit, item) => ({
    fontSize: SIZES.medium,
    fontFamily: FONT.medium,
    color: selectedExhibit === item.titleParam ? COLORS.white : COLORS.primary,
    marginBottom: SIZES.xSmall
  }),
  viewed: {
    fontSize: SIZES.medium - 3,
    fontFamily: FONT.regular,
    color: "#B3AEC6",
  },
});

export default styles;
