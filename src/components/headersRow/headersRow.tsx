import React from 'react';
import {StyleSheet, Text, View, ViewStyle} from "react-native";
import {stylesUserRow} from "../userRow/userRow.styles";
import {colors, smallFontSize} from "../../styles/global-styles";

export const HeadersRow = (props: {style: ViewStyle}) => {
  return (
    <View style={[stylesUserRow.row, stylesHeader.row, props.style]}>
      <View style={[stylesUserRow.cell, stylesHeader.opacityBorder]}>
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
    backgroundColor: colors.grey,
    paddingTop: 0,
    alignItems: 'center',
  },
  text: {
    fontSize: smallFontSize,
    color: colors.lightGrey,
    // alignSelf: "center",
    // justifyContent: 'center'
  },
  opacityBorder: {
    borderColor: 'rgba(0, 0, 0, 0)'
  }
})
