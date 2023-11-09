import React, {FC, useState} from 'react';
import {Button, Modal, Text, TouchableOpacity, View} from "react-native";
import {User} from "../../store/users-slice";
import {stylesUserRow} from "./userRow.styles";
import {MyModal} from "../myModal/myModal";

type UserRowProps =
  User
  // & { onPress: (id: string) => void }


export const UserRow: FC<UserRowProps> = (
  {
    name,
    expenses,
    debts,
    id,
    // onPress,
  }) => {
  const [modalVisible, setModalVisible] = useState(false)
  const countExpenses = expenses.map(exp => exp.count)
  const summaExpenses = countExpenses.reduce((a, b) => a + b, 0)

  const countDebts = debts.map(el => el.debt)
  const summaDebts = countDebts.reduce((a, b) => a + b, 0)

  const onPressHandler = () => {
    setModalVisible(true)
  }

  const closeModal = () => {
    setModalVisible(false);
  }

  return (
    <View style={[stylesUserRow.row]}>
      <View style={[stylesUserRow.name]}>
        <Text style={[stylesUserRow.text]}>
          {name}
        </Text>
      </View>
      <TouchableOpacity onPress={onPressHandler} style={[stylesUserRow.segment]}>
        <View>
          <Text style={[stylesUserRow.text]}>
            {summaExpenses}
          </Text>
        </View>
      </TouchableOpacity>
      <View style={[stylesUserRow.segment]}>
        <Text style={[stylesUserRow.text]}>
          {summaDebts}
        </Text>
      </View>
      <MyModal modalVisible={modalVisible} closeModal={closeModal} >
        <View></View>
      </MyModal>
    </View>
  );
};


