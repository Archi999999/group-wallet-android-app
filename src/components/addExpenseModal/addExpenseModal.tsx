import React, {FC, useState} from 'react';
import {MyModal} from "../myModal/myModal";
import {StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import {addExpense, ShortUser} from "../../store/users-slice";
import {colors, largeFontSize, smallFontSize} from "../../styles/global-styles";
import {ShowUsersModal} from "../showUsersModal/showUsersModal";
import {useAppDispatch} from "../../hooks";
import { v4 as uuid } from 'uuid';

type Props = {
  user: ShortUser
  eventId: string
  modalVisible: boolean
  closeModal: (value: boolean) => void
}

export const AddExpenseModal: FC<Props> = (
  {
    user,
    eventId,
    modalVisible,
    closeModal,
  }
) => {
  const dispatch = useAppDispatch()
  const [showUsers, setShowUsers] = useState(false)
  const [users, setUsers] = useState<ShortUser[]>([user])
  const [title, setTitle] = useState('')

  // function foundUser(state: RootState, userId: string) {
  //   const foundUser = state.users[eventId].find(u => u.id === userId)
  //   return foundUser ? foundUser : {} as User
  // }

  const addExp = () => {
    const expId = uuid()
    dispatch(addExpense({expId, users, eventId, title}))
    closeModal(false)
  }

  const addUserInModal = ({name, id}: ShortUser) => {
    setUsers([...users, {name, id, exp: 0}])
  }

  const onChangeExp = (id: string, count: string) => {
    users.map(u=> u.id === id
      ? u.exp = +count : u
    )
  }

  const closeModalUsers = () => {
    setShowUsers(false)
  }

  const closeModalHandler = () => {
    setUsers([user])
    closeModal(false)
  }

  return (
    <MyModal title={'Добавить Расход'} closeModal={closeModalHandler} modalVisible={modalVisible}>
      {users.map(u => (
        <View key={u.id} style={styleAddExpModal.userRow}>
          <Text style={styleAddExpModal.name}>{u.name}</Text>
          <TextInput style={[styleAddExpModal.input]} keyboardType="numeric" onChangeText={(text)=>onChangeExp(u.id, text)}/>
        </View>
      ))}
      <TouchableOpacity onPress={() => setShowUsers(true)}>
        <Text>+</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={addExp}>
        <Text>ADD</Text>
      </TouchableOpacity>
      <ShowUsersModal title={'Добавить пользователя'} showUsers={showUsers} closeModalUsers={closeModalUsers}
                      eventId={eventId} addUserInModal={addUserInModal} addedUsers={users}/>
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
    flexShrink: 1,
  },
  input: {
    backgroundColor: colors.white,
    width: '50%',
    fontSize: smallFontSize,
    textAlign: "right",

  }
})