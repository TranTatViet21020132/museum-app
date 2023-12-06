import { StyleSheet } from "react-native";

import { COLORS, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  btnContainer: {
    width: 40,
    height: 40,
    backgroundColor: COLORS.background,
    borderRadius: SIZES.small / 1.25,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 5,
  },
  btnImg: (dimension) => ({
    width: dimension,
    height: dimension,
    borderRadius: SIZES.small / 1.25,
  }),
  dropdownContainer: {
    marginLeft: 16,
    width: 160,
  },
  categoryText: {
    fontSize: SIZES.medium,
    marginVertical: 10,
    color: COLORS.lightWhite,
  },
});

export default styles;
