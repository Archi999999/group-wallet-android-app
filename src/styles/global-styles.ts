import {KeyboardAvoidingView, StatusBar, StyleSheet} from "react-native";

export const largeFontSize = 30
export const mediumFontSize = 25
export const smallFontSize = 20

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#457945',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: StatusBar.currentHeight || 0,
    // paddingBottom: 250,
  },
  border: {
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 7,
  },
})

export const colors = {
  white: '#f5f0f0',
  grey: '#373f3d',
  lightGrey: '#7ca491'
}

export const textInButton = {

}

export const buttonsStyles = StyleSheet.create({
  background: {
    backgroundColor: colors.white
  },
  text: {
    fontSize: smallFontSize
  }
})