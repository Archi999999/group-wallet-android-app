import React, {useCallback, useState} from 'react';
import {Button, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View} from "react-native";
import {Ionicons} from "@expo/vector-icons";
import {largeFontSize, globalStyles, smallFontSize} from "../styles/global-styles";
import {useNotification} from "react-native-internal-notification";
import {MainProps} from "../types/navigation-types";
import {useAppDispatch, useAppSelector} from "../hooks";
import {addEvent, Event} from "../store/events-slice";
import 'react-native-get-random-values';
import { v4 as uuid } from 'uuid';

export const CreateEventsPage = ({navigation}: MainProps) => {
    const dispatch = useAppDispatch()
    const [value, setValue] = useState('')
    const [showInput, setShowInput] = useState(false)
    const notification = useNotification();
    const events = useAppSelector<Event[]>(state => state.events)


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

    const onBlur = () => setShowInput(false)

    return (
            <TouchableWithoutFeedback onPress={onBlur}>
                <View style={globalStyles.container}>
                    <View>
                        {events?.map((e, index) => (
                            <View style={styles.eventRow} key={index}>
                                <Text style={styles.eventName}
                                      onPress={() => navigation.navigate('EventPage', {eventId: e.id, title: e.title })}>{e.title}</Text>
                            </View>
                        ))}
                    </View>
                    <View>
                        {showInput
                            ? <>
                                <TextInput value={value} onChangeText={setValue}
                                           style={[globalStyles.border, styles.input]} autoFocus onSubmitEditing={() => addEventHandler(value)}/>
                                <Button title={'Сохранить'} onPress={() => addEventHandler(value)}/>
                            </>
                            : <Button title={'Добавить событие'} onPress={() => setShowInput(prevState => !prevState)}/>
                        }
                    </View>
                </View>
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
    eventRow: {
        flexDirection: 'row',
        alignItems: "center",
        marginBottom: 30,
    },
    eventName: {
        fontSize: largeFontSize,
        color: 'white',
        marginRight: 10,
    },
    menuEventButton: {
        fontSize: largeFontSize,
        color: "white",
    },
});