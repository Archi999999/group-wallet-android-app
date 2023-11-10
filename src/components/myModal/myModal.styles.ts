import {StyleSheet} from "react-native";
import {colors, smallFontSize} from "../../styles/global-styles";

export const stylesModal = StyleSheet.create({
  modal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  },
  titleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 20,
    borderBottomColor: colors.lightGrey,
    borderBottomWidth: 1,
    borderStyle: "solid",
  },
  titleText:{
    fontSize: smallFontSize,
  },
  buttonClose: {
    backgroundColor: colors.lightGrey,
    justifyContent: 'center',
    alignItems: 'center',
    height: 30,
    width: 30,
    borderRadius: 5,
    borderTopRightRadius: 10,
  },
  view: {
    width: '70%',
    backgroundColor: colors.white,
    borderRadius: 10,
  },
  children: {
    backgroundColor: colors.lightGrey,
    width: '80%',
    margin: 30,
  },
})