import React from 'react';
import {StyleSheet, Text, View, ViewStyle} from "react-native";
import {stylesUserRow} from "../userRow/userRow.styles";
import {smallFontSize} from "../../styles/global-styles";
import {colors} from "../../styles/colors";

export const HeaderRow = (props: {style: ViewStyle}) => {
  return (
    <View style={[stylesUserRow.row, stylesHeader.row, props.style]}>
      <View style={[stylesUserRow.cell, stylesHeader.emptyCell]}>
        <Text style={[stylesUserRow.text]}>
        </Text>
      </View>
      <View style={[stylesUserRow.cell, stylesHeader.view]}>
        <Text style={[stylesUserRow.text, stylesHeader.text]}>
          расходы
        </Text>
      </View>
      <View style={[stylesUserRow.cell, stylesHeader.view]}>
        <Text style={[stylesUserRow.text, stylesHeader.text]}>
          долг
        </Text>
      </View>
    </View>
  );
};

const stylesHeader = StyleSheet.create({
  row: {
    paddingBottom: 10
  },
  view: {
    backgroundColor: colors.primary,
    paddingTop: 0,
    alignItems: 'center',
  },
  text: {
    fontSize: smallFontSize,
    color: colors.text,
    // alignSelf: "center",
    // justifyContent: 'center'
  },
  emptyCell: {
    borderColor: 'rgba(0, 0, 0, 0)',
    backgroundColor: colors.background
  }
})
