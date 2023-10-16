import React, {useCallback, useState} from 'react';
import {Button, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View} from "react-native";
import {Ionicons} from "@expo/vector-icons";
import {globalFontSize, globalStyles} from "../styles/global-styles";
import {useNotification} from "react-native-internal-notification";
import {MainProps} from "../types/navigation-types";
import {useAppDispatcn} from "../hooks";

export const CreateEventsPage = ({navigation}: MainProps) => {
    const dispatch = useAppDispatcn()
    const [value, setValue] = useState('')
    const [showInput, setShowInput] = useState(false)
    const [events, setEvents] = useState<string[]>()
    const notification = useNotification();

    const addEvent = (event: string) => {
        if (event.length < 3) {
            shortNameEventNotification()
            return
        }
        const updateEvents = [...(events ?? []), event]
        setEvents(updateEvents)
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
                                      onPress={() => navigation.navigate('EventPage')}>{e}</Text>
                            </View>
                        ))}
                    </View>
                    <View>
                        {showInput
                            ? <>
                                <TextInput value={value} onChangeText={setValue}
                                           style={[globalStyles.border, styles.input]} autoFocus/>
                                <Button title={'Сохранить'} onPress={() => addEvent(value)}/>
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
        fontSize: 20,
        padding: 8,
        margin: 10,
    },
    eventRow: {
        flexDirection: 'row',
        alignItems: "center",
        marginBottom: 30,
    },
    eventName: {
        fontSize: 22,
        color: 'white',
        marginRight: 10,
    },
    menuEventButton: {
        fontSize: globalFontSize,
        color: "white",
    },
});