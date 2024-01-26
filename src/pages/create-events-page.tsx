import React, {useCallback, useEffect, useState} from 'react';
import {
  FlatList,
  Keyboard,
  ListRenderItem,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import {Ionicons} from "@expo/vector-icons";
import {globalStyles, largeFontSize} from "../styles/global-styles";
import {useNotification} from "react-native-internal-notification";
import {MainProps} from "../types/navigation-types";
import {useAppDispatch, useAppSelector} from "../hooks";
import {addEvent, Event} from "../store/events-slice";
import 'react-native-get-random-values';
import {v4 as uuid} from 'uuid';
import {AddItemForm} from "../shared/addItemForm";
import {colors} from "../styles/colors";
import {addKeyboardHeight} from "../store/viewport-slice";

export const CreateEventsPage = ({navigation}: MainProps) => {
  const dispatch = useAppDispatch()
  const [showInput, setShowInput] = useState(false)
  const notification = useNotification();
  const events = useAppSelector<Event[]>(state => state.events)
  const keyboardHeight = useAppSelector<number>(state => state.viewport.keyboardHeight)

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      (event) => {
        dispatch(addKeyboardHeight({keyboardHeight: event.endCoordinates.height}))
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
    // setValue('')
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
    <TouchableOpacity onPress={() => navigation.navigate('EventPage', {eventId: item.id, title: item.title})}
                      // style={{borderTopColor: colors.lightGrey, borderTopWidth:1}}
    >
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
              inverted={true}
            />
          </TouchableWithoutFeedback>
        }
        <AddItemForm showInput={showInput} saveNameButton={'Сохранить'} addNameButton={'Добавить событие'}
                     setShowInput={setShowInput} addItemHandler={addEventHandler} marginBottom={keyboardHeight}/>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  eventName: {
    fontSize: largeFontSize,
    color: colors.text,
    marginBottom: 25,
    // borderColor: colors.lightGrey,
    // borderWidth:1,
    borderRadius: 8,
    paddingHorizontal: 10,
    backgroundColor: colors.backgroundSec,
  },
  // menuEventButton: {
  //   fontSize: largeFontSize,
  //   color: "white",
  // },
  listContainer: {
    alignItems: "center",
  },
});