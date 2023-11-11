import React, {FC, useState} from 'react';
import {Text, TouchableOpacity, View} from "react-native";
import {User} from "../../store/users-slice";
import {stylesUserRow} from "./userRow.styles";
import {AddExpenseModal} from "../addExpenseModal/addExpenseModal";

type UserRowProps =
  User & {userId: string, eventId: string}

export const UserRow: FC<UserRowProps> = (
  {
    name,
    expenses,
    debts,
    userId,
    eventId,
  }) => {
  const [modalVisible, setModalVisible] = useState(false)
  const countExpenses = expenses.map(exp => exp.count)
  const summaExpenses = countExpenses.reduce((a, b) => a + b, 0)

  const countDebts = debts.map(el => el.debt)
  const summaDebts = countDebts.reduce((a, b) => a + b, 0)

  const onPressHandler = () => {
    setModalVisible(true)
  }

  return (
    <View style={[stylesUserRow.row]}>
      <View style={[stylesUserRow.cell, stylesUserRow.name]}>
        <Text style={[stylesUserRow.text]}>
          {name}
        </Text>
      </View>
      <TouchableOpacity onPress={onPressHandler} style={[stylesUserRow.cell]}>
          <Text style={[stylesUserRow.text]}>
            {summaExpenses}
          </Text>
      </TouchableOpacity>
      <View style={[stylesUserRow.cell]}>
        <Text style={[stylesUserRow.text]}>
          {summaDebts}
        </Text>
      </View>
      <AddExpenseModal modalVisible={modalVisible} closeModal={setModalVisible} eventId={eventId} user={{name, id: userId, exp: 0}}/>
    </View>
  );
};


