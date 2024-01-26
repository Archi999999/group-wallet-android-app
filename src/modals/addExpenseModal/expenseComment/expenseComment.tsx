import React from 'react';
import {Text, TextInput, View, ViewProps, StyleSheet} from "react-native";
import {mediumFontSize, smallFontSize} from "../../../styles/global-styles";
import {colors} from "../../../styles/colors";

type Props = ViewProps & {
  setTitle: (text:string)=> void
}
export const ExpenseComment = (props: Props) => {
  return (
    <View style={props.style}>
      <Text style={s.title}>Введите ваш комментарий</Text>
      <TextInput autoFocus style={s.input} onChangeText={props.setTitle}/>
    </View>
  );
};

const s = StyleSheet.create({
  title: {
    color: colors.white,
    fontSize: smallFontSize,
  },
  input: {
    backgroundColor: colors.white,
    fontSize: mediumFontSize,
    margin: 10,
  }
})
