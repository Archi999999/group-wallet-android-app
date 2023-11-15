import React, {FC, useState} from 'react';
import {MyModal} from "../../components/myModal/myModal";
import {StyleSheet, Text, TextInput, View} from "react-native";
import {addExpense, ShortUser} from "../../store/users-slice";
import {colors, largeFontSize, smallFontSize} from "../../styles/global-styles";
import {ShowUsersModal} from "../showUsersModal/showUsersModal";
import {useAppDispatch} from "../../hooks";
import {v4 as uuid} from 'uuid';
import {MyButton} from "../../components/myButton/myButton";
import {Feather, MaterialCommunityIcons} from "@expo/vector-icons";
import {ExpenseComment} from "./expenseComment/expenseComment";

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
  const [displayTitle, setDisplayTitle] = useState<'none' | 'flex'>('none')

  const addExp = () => {
    const expId = uuid()
    dispatch(addExpense({expId, users, eventId, title}))
    closeModal(false)
    setDisplayTitle('none')
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
    setDisplayTitle('none')
    closeModal(false)
  }

  return (
    <MyModal title={'Добавить Расход'} closeModal={closeModalHandler} modalVisible={modalVisible}>
      {users.map(u => (
        <View key={u.id} style={styleAddExpModal.userRow}>
          <Text style={styleAddExpModal.name}>{u.name}</Text>
          <TextInput style={[styleAddExpModal.inputExp]} keyboardType="numeric" onChangeText={(text)=>onChangeExp(u.id, text)}/>
        </View>
      ))}
      <ExpenseComment style={{display: displayTitle}} setTitle={setTitle}/>
      <View style={styleAddExpModal.buttons}>
        <MyButton onPress={() => setShowUsers(true)} style={styleAddExpModal.buttonAddUser}>
          <Feather name="user-plus" size={24} color={colors.white} />
        </MyButton>
        <MyButton onPress={()=>{setDisplayTitle(displayTitle==='flex'? 'none': 'flex')}} style={styleAddExpModal.buttonAddComment}>
          <MaterialCommunityIcons name="comment-plus-outline" size={24} color={colors.white} />
        </MyButton>
        <MyButton onPress={addExp} style={styleAddExpModal.buttonSave}>
          <Text style={styleAddExpModal.textSave} >Сохранить</Text>
        </MyButton>
      </View>
      <ShowUsersModal title={'Добавить пользователя'} showUsers={showUsers} closeModalUsers={closeModalUsers}
                      eventId={eventId} addUserInModal={addUserInModal} addedUsers={users}/>
    </MyModal>
  );
};


const styleAddExpModal= StyleSheet.create({
  userRow: {
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    gap: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginBottom: 12,
  },
  name: {
    color: colors.white,
    fontSize: largeFontSize,
    flexShrink: 1,
  },
  inputExp: {
    backgroundColor: colors.white,
    width: '50%',
    fontSize: smallFontSize,
    textAlign: "right",

  },
  buttons: {
    flexDirection: 'row',
    justifyContent: "space-between"
  },
  buttonAddUser: {
    width: 50,
  },
  buttonAddComment: {
    width: 50,
  },
  buttonSave: {

  },
  textSave: {
    color: colors.white,
    fontSize: smallFontSize,
  },

})