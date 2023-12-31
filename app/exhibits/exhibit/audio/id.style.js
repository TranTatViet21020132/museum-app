import { StyleSheet } from "react-native";

import { COLORS, SIZES } from "../../../../constants";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    backgroundColor: COLORS.background,
  },
  audioContainer: {
    flex: 1,
    alignItems: "center"
  },
  audioTitle: {
    marginTop: SIZES.xSmall,
    color: COLORS.lightWhite,
    fontSize: SIZES.large,
    fontWeight: "bold"
  },
  thumbnailContainer: {
    width: 340,
    height: 340,
    backgroundColor: COLORS.lightWhite,
    borderRadius: SIZES.small,
    justifyContent: "center",
    alignItems: "center",
    marginTop: SIZES.xLarge,
    marginBottom: 45
  },
  thumbnail: {
    width: "100%",
    height: "100%",
  },
  seekBar: {
    width: '80%',
    marginBottom: 30
  },
  btnContainer: {
    width: 90,
    height: 90,
    borderRadius: 10000,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 20,
    marginRight: 20,
  },
  btnImg:{
    width: "80%",
    height: "80%",
    borderRadius: SIZES.small / 1.25,
  },
  playbacks: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  timerControl: {
    width: 40,
    height: 40,
    borderRadius: 10000,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 20,
    marginRight: 20,
  }
});

export default styles;
