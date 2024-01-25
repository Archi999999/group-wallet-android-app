import React, {useCallback, useState} from 'react';
import {Button, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View} from "react-native";
import {globalStyles, mediumFontSize, smallFontSize} from "../styles/global-styles";
import {EventProps} from "../types/navigation-types";
import {useAppDispatch, useAppSelector} from "../hooks";
import {addUser, User} from "../store/users-slice";
import {Ionicons} from "@expo/vector-icons";
import {useNotification} from "react-native-internal-notification";
import 'react-native-get-random-values';
import {v4 as uuid} from 'uuid';
import {UserRow} from "../components/userRow/userRow";
import {HeaderRow} from "../components/headersRow/headerRow";

export const EventPage = (
  {
    route
  }: EventProps) => {
  const [value, setValue] = useState('')
  const [showInput, setShowInput] = useState(false)
  const notification = useNotification();
  const dispatch = useAppDispatch()

  const eventId = route.params.eventId

  const users = useAppSelector<User[]>(state => state.users[eventId])

  const addUserHandler = (name: string) => {
    if (name.length < 3) {
      shortNameEventNotification()
      return
    }
    const id = uuid()
    dispatch(addUser({name, id, eventId}))
    setShowInput(false)
    setValue('')
  }

  const shortNameEventNotification = useCallback(() => {
    notification.showNotification({
      title: 'Введите минимум 3 символа',
      icon: <Ionicons name="md-alert-circle-outline" size={24} color="black"/>,
    });
  }, [notification]);

  const onBlur = () => setShowInput(false)


  return (
    <TouchableWithoutFeedback onPress={onBlur}>
      <View style={[globalStyles.container, styles.container]}>
        <Text style={[styles.h1]}> {route.params.title} </Text>
        <View style={[styles.table]}>
          <HeaderRow style={users.length===0?{display:'none'}:{}}/>
          {users.map(u => (
            <UserRow name={u.name} key={u.id} expenses={u.expenses} debts={u.debts} id={u.id} eventId={eventId} userId={u.id}/>
          ))}
        </View>
        <View style={styles.addUser}>
          {showInput
            ? <>
              <TextInput value={value} onChangeText={setValue}
                         style={[globalStyles.border, styles.input]} autoFocus onSubmitEditing={()=>addUserHandler(value)}/>
              <Button title={'Сохранить'} onPress={() => addUserHandler(value)}/>
            </>
            : <Button title={'Добавить участника'} onPress={() => setShowInput(prevState => !prevState)}/>
          }
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
  },
  h1: {
    color: 'white',
    fontSize: mediumFontSize,
    paddingTop: 20,
    paddingBottom: 20,
  },
  table: {
    height: '50%',
    justifyContent: "flex-start",
  },
  input: {
    backgroundColor: 'white',
    width: 200,
    fontSize: smallFontSize,
    padding: 8,
    margin: 10,
  },
  addUser: {
    // paddingBottom: 50
  },
})