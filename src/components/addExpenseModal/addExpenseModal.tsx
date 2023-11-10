import React, {FC, useState} from 'react';
import {MyModal} from "../myModal/myModal";
import {StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import {useSelector} from "react-redux";
import {RootState} from "../../store/store";
import {User} from "../../store/users-slice";
import {colors, largeFontSize, smallFontSize} from "../../styles/global-styles";
import {ShowUsersModal} from "../showUsersModal/showUsersModal";

type Props = {
  userId: string
  eventId: string
  modalVisible: boolean
  closeModal: (value:boolean) => void
}

export const AddExpenseModal: FC<Props> = (
  {
    userId,
    eventId,
    modalVisible,
    closeModal,
  }
) => {
  const [showUsers, setShowUsers] = useState(false)
  const {name: userName, expenses} = useSelector<RootState, User>(state => {
    const foundUser = state.users[eventId].find(u => u.id === userId)
    return foundUser ? foundUser : {} as User
  });

  const addExp = () => {

  }
  const closeModalUsers = () => {
    setShowUsers(false)
  }

  return (
    <MyModal title={'Добавить Расход'} closeModal={closeModal} modalVisible={modalVisible}>
      <View style={styleAddExpModal.userRow}>
        <Text style={styleAddExpModal.name}>{userName}</Text>
        <TextInput style={[styleAddExpModal.input]} autoFocus keyboardType="numeric"/>
      </View>
      <TouchableOpacity onPress={() => setShowUsers(true)}>
        <Text>+</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={addExp}>

      </TouchableOpacity>
      <ShowUsersModal title={'Добавить пользователя'} showUsers={showUsers} closeModalUsers={closeModalUsers} eventId={eventId}/>
    </MyModal>
  );
};


const styleAddExpModal = StyleSheet.create({
  userRow: {
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    gap: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  name: {
    color: colors.white,
    fontSize: largeFontSize,
  },
  input: {
    backgroundColor: colors.white,
    width: '50%',
    fontSize: smallFontSize,
  }
})