import React, {FC} from 'react';
import {Text, View} from "react-native";
import {User} from "../../store/users-slice";
import {stylesUserRow} from "./userRow.styles";

export const UserRow: FC<Omit<User, 'id'>> = (
  {
    name,
    expenses,
    debts
  }) => {
  const countExpenses = expenses.map(exp=> exp.count)
  const summaExpenses = countExpenses.reduce((a, b) => a+b,0)

  const countDebts = debts.map(el=> el.debt)
  const summaDebts = countDebts.reduce((a, b) => a+b,0)
  return (
    <View style={[stylesUserRow.row]}>
      <View style={[stylesUserRow.name]}>
        <Text style={[stylesUserRow.text]}>
          {name}
        </Text>
      </View>
      <View style={[stylesUserRow.segment]}>
        <Text style={[stylesUserRow.text]}>
          {summaExpenses}
        </Text>
      </View>
      <View style={[stylesUserRow.segment]}>
        <Text style={[stylesUserRow.text]}>
          {summaDebts}
        </Text>
      </View>
    </View>
  );
};


