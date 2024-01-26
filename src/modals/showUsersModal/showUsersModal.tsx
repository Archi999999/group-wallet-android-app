import React, {FC} from 'react';
import {MyModal} from "../../components/myModal/myModal";
import {StyleSheet, Text, TouchableOpacity} from "react-native";
import {useSelector} from "react-redux";
import {RootState} from "../../store/store";
import {ShortUser, User} from "../../store/users-slice";
import {mediumFontSize, smallFontSize} from "../../styles/global-styles";
import {colors} from "../../styles/colors";

type Props = {
  title: string
  eventId: string
  showUsers: boolean
  addedUsers: ShortUser[]
  closeModalUsers: (value: boolean)=>void
  addUserInModal: ({name, id}: ShortUser)=>void
}

export const ShowUsersModal:FC<Props> = (
  {
    title,
    eventId,
    showUsers,
    addedUsers,
    closeModalUsers,
    addUserInModal,
  }
) => {
  const allUsers = useSelector<RootState, User[]>(state => state.users[eventId])
  const users = allUsers.filter(u=> (
    !addedUsers.some(addedUsers => addedUsers.id === u.id)
  ))

  const addUserHandler = ({name, id, exp}: ShortUser) => {
    addUserInModal({name, id, exp})
    if (users.length === 1) {
      closeModalUsers(false)
    }
  }


  return (
    <MyModal title={title} modalVisible={showUsers} closeModal={closeModalUsers} >
      {(users.length > 0)
        ? users.map(u=> (
        <TouchableOpacity key={u.id} style={styleUsersModal.row} onPress={()=>addUserHandler({name: u.name, id: u.id, exp: 0})}>
          <Text style={styleUsersModal.name}>{u.name}</Text>
        </TouchableOpacity>
      ))
      : <Text style={styleUsersModal.text}>Все пользователи добавлены</Text>}
    </MyModal>
  );
};

const styleUsersModal = StyleSheet.create({
  row: {
    padding: 5,
    borderStyle: "solid",
    borderColor: colors.grey,
    borderWidth: 1,
  },
  name: {
    color: colors.white,
    fontSize: mediumFontSize,
  },
  text: {
    color: colors.white,
    fontSize: smallFontSize,
  }
})