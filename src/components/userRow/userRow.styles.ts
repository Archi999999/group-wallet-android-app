import {StyleSheet} from "react-native";
import {smallFontSize} from "../../styles/global-styles";
import {colors} from "../../styles/colors";

export const stylesUserRow = StyleSheet.create({
  row: {
    flexDirection: "row",
  },
  cell: {
    paddingHorizontal: 5,
    alignItems: 'flex-end',
    justifyContent: "center",
    flexBasis: "25%",
    borderStyle: 'solid',
    borderColor: 'black',
    borderWidth: 1,
    paddingVertical: 5,
    backgroundColor: colors.backgroundSec
  },
  name: {
    alignItems: "baseline",
  },
  text: {
    color: colors.text,
    fontSize: smallFontSize,
  }
});

