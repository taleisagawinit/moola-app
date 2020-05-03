import { StyleSheet } from "react-native";

import { appColor } from "./colors";

export const styles = StyleSheet.create({
  h1: {
    fontSize: 35,
  },
  h2: {
    fontSize: 25,
  },
  h3: {
    fontSize: 20,
  },
  p: {
    fontSize: 16,
  },
  bold: {
    fontWeight: "700",
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  capitalize: {
    textTransform: "capitalize",
  },
  roundedContainer: {
    borderRadius: 40,
    backgroundColor: "#ffffff",
    borderWidth: 3,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  light: {
    color: appColor.lightTheme,
  },
  dark: {
    color: appColor.darkTheme,
  },
  centerContent: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  centerContentRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  screenContainer: {
    // flex: 1,
    flexDirection: "column",
    alignItems: "flex-start",
    // justifyContent: "center",
    paddingHorizontal: 25,
    paddingVertical: 50,
    backgroundColor: appColor.lightTheme,
    // alignSelf: "center",
  },
  smallMarginV: {
    marginVertical: 10,
  },
  largeMarginV: {
    marginVertical: 25,
  },
  smallMarginH: {
    marginHorizontal: 10,
  },
  extraPadding: {
    padding: 20,
  },
  centerText: {
    textAlign: "center",
  },
});
