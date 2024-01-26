import {StatusBar, StyleSheet} from "react-native";
import {colors} from "./colors";

export const largeFontSize = 30
export const mediumFontSize = 25
export const smallFontSize = 20

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: 'center',
    // justifyContent: 'center',
    // paddingTop: StatusBar.currentHeight || 0,
    // paddingBottom: 250,
  },
  border: {
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 7,
  },
})
