import {StyleSheet} from "react-native";
import {mediumFontSize} from "../../styles/global-styles";

export const stylesUserRow = StyleSheet.create({
  row: {
    flexDirection: "row",
    // alignItems: "center",
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
  },
  name: {
    alignItems: "baseline",
    // flexBasis: "25%",
    //   borderStyle: 'solid',
    //   borderColor: 'black',
    //   borderWidth: 1,
    //   paddingHorizontal: 5,
  },
  text: {
    color: 'white',
    fontSize: mediumFontSize,
  }
});

