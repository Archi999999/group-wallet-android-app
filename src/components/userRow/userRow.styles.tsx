import {StyleSheet} from "react-native";

export const stylesUserRow = StyleSheet.create({
  row: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  },
  name: {
    flexBasis: "25%",
    borderStyle: 'solid',
    borderColor: 'black',
    borderWidth: 1,
    paddingHorizontal: 5,
  },
  segment: {
    paddingHorizontal: 5,
    display: 'flex',
    alignItems: 'flex-end',
    flexBasis: "25%",
    borderStyle: 'solid',
    borderColor: 'black',
    borderWidth: 1,
  },
  text: {
    color: 'white',
    fontSize: 20,
  }
});