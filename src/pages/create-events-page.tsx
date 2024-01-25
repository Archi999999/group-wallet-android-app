import React, {useCallback, useEffect, useState} from 'react';
import {
  Button,
  FlatList, Keyboard, KeyboardAvoidingView,
  ListRenderItem, Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback, View,
} from "react-native";
import {Ionicons} from "@expo/vector-icons";
import {buttonsStyles, colors, globalStyles, largeFontSize, smallFontSize} from "../styles/global-styles";
import {useNotification} from "react-native-internal-notification";
import {MainProps} from "../types/navigation-types";
import {useAppDispatch, useAppSelector} from "../hooks";
import {addEvent, Event} from "../store/events-slice";
import 'react-native-get-random-values';
import {v4 as uuid} from 'uuid';
import {MyButton} from "../components/myButton/myButton";

export const CreateEventsPage = ({navigation}: MainProps) => {
  const dispatch = useAppDispatch()
  const [value, setValue] = useState('')
  const [showInput, setShowInput] = useState(false)
  const notification = useNotification();
  const events = useAppSelector<Event[]>(state => state.events)
  const [keyboardHeight, setKeyboardHeight] = useState(280);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      (event) => {
        setKeyboardHeight(event.endCoordinates.height);
      }
    );

    return () => {
      keyboardDidShowListener.remove();
    };
  }, []);

  const addEventHandler = (title: string) => {
    if (title.length < 3) {
      shortNameEventNotification()
      return
    }
    const id = uuid()
    dispatch(addEvent({title, id, addedDate: new Date().toString()}))
    setShowInput(false)
    setValue('')
  }

  const shortNameEventNotification = useCallback(() => {
    notification.showNotification({
      title: 'Введите минимум 3 символа',
      icon: <Ionicons name="md-alert-circle-outline" size={24} color="black"/>,
    });
  }, [notification]);

  const onBlur = () => {
    setShowInput(false)
  }

  const renderItem: ListRenderItem<Event> = ({item}) => (
    <TouchableOpacity onPress={() => navigation.navigate('EventPage', {eventId: item.id, title: item.title})}>
      <Text style={styles.eventName}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <TouchableWithoutFeedback onPress={onBlur}>
      <SafeAreaView style={[globalStyles.container]}>
        {events &&
          <TouchableWithoutFeedback onPress={onBlur}>
            <FlatList
              data={events}
              renderItem={renderItem}
              keyExtractor={event => event.id}
              contentContainerStyle={styles.listContainer}
              style={{width: '100%'}}
            />
          </TouchableWithoutFeedback>
        }
        {showInput
          ? <>
            <TextInput value={value} onChangeText={setValue}
                       style={[globalStyles.border, styles.input]} autoFocus
                       onSubmitEditing={() => addEventHandler(value)}/>
            <MyButton onPress={() => addEventHandler(value)}>Сохранить</MyButton>
          </>
          : <MyButton onPress={() => setShowInput(prevState => !prevState)}
                      style={[buttonsStyles.background, {marginBottom: keyboardHeight }]}>
            Добавить событие
          </MyButton>
        }
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: 'white',
    width: 200,
    fontSize: smallFontSize,
    padding: 8,
    margin: 10,
  },
  eventName: {
    fontSize: largeFontSize,
    color: 'white',
    marginBottom: 30,
  },
  menuEventButton: {
    fontSize: largeFontSize,
    color: "white",
  },
  listContainer: {
    alignItems: "center",
  },
});