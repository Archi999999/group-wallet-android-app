import React, {FC, useState} from 'react';
import {Text, TouchableOpacity, View} from "react-native";
import {User} from "../../store/users-slice";
import {stylesUserRow} from "./userRow.styles";
import {AddExpenseModal} from "../../modals/addExpenseModal/addExpenseModal";
import {DebtsUser} from "../../modals/debtsUser/debtsUser";

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
  const [modalExpVisible, setModalExpVisible] = useState(false)
  const [modalDebsVisible, setModalDebsVisible] = useState(false)
  const countExpenses = expenses.map(exp => exp.count)
  const summaExpenses = countExpenses.reduce((a, b) => a + b, 0)

  const countDebts = debts.map(el => el.debt)
  const summaDebts = countDebts.reduce((a, b) => a + b, 0)

  return (
    <View style={[stylesUserRow.row]}>
      <View style={[stylesUserRow.cell, stylesUserRow.name]}>
        <Text style={[stylesUserRow.text]}>
          {name}
        </Text>
      </View>
      <TouchableOpacity onPress={()=>setModalExpVisible(true)} style={[stylesUserRow.cell]}>
          <Text style={[stylesUserRow.text]}>
            {summaExpenses}
          </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>setModalDebsVisible(true)} style={[stylesUserRow.cell]}>
        <Text style={[stylesUserRow.text]}>
          {summaDebts}
        </Text>
      </TouchableOpacity>
      <AddExpenseModal modalVisible={modalExpVisible} closeModal={setModalExpVisible} eventId={eventId} user={{name, id: userId, exp: 0}}/>
      <DebtsUser closeModal={setModalDebsVisible} modalVisible={modalDebsVisible} debts={debts}/>
    </View>
  );
};


