import React from 'react';
import {Text, TextInput, View, ViewProps, StyleSheet} from "react-native";
import {colors, mediumFontSize, smallFontSize} from "../../styles/global-styles";

type Props = ViewProps
export const ExpenseComment = (props: Props) => {
  return (
    <View style={props.style}>
      <Text style={s.title}>Введите ваш комментарий</Text>
      <TextInput autoFocus style={s.input}/>
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
