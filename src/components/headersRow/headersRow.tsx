import React from 'react';
import {StyleSheet, Text, View} from "react-native";
import {stylesUserRow} from "../userRow/userRow.styles";
import {colors} from "../../styles/global-styles";

export const HeadersRow = () => {
  return (
    <View style={[stylesUserRow.row, stylesHeader.row]}>
      <View style={[stylesUserRow.segment]}>
        <Text style={[stylesUserRow.text]}>

        </Text>
      </View>
      <View style={[stylesUserRow.segment, stylesHeader.view]}>
        <Text style={[stylesUserRow.text, stylesHeader.text]}>
          расходы
        </Text>
      </View>
      <View style={[stylesUserRow.segment, stylesHeader.view]}>
        <Text style={[stylesUserRow.text, stylesHeader.text]}>
          долг
        </Text>
      </View>
    </View>
  );
};

export const stylesHeader = StyleSheet.create({
  row: {
    paddingBottom: 10
  },
  view: {
    backgroundColor: colors.grey
  },
  text: {
    color: colors.lightGrey
  }
})
