import React, {useCallback, useState} from 'react';
import {Button, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View} from "react-native";
import {globalStyles} from "../styles/global-styles";
import {EventProps} from "../types/navigation-types";
import {useAppDispatcn, useAppSelector} from "../hooks";
import {addUser, User} from "../store/users-slice";
import {Ionicons} from "@expo/vector-icons";
import {useNotification} from "react-native-internal-notification";
// import 'react-native-get-random-values';
import {v4 as uuid} from 'uuid';

export const EventPage = (
    {
        route
    }: EventProps) => {
    const [value, setValue] = useState('')
    const [showInput, setShowInput] = useState(false)
    const notification = useNotification();
    const dispatch = useAppDispatcn()

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
                <View style={[styles.usersDiv]}>
                {users.map((u) => (
                        <Text key={u.id} style={[styles.userRow]}>{u.name}</Text>
                ))}
                </View>
                <View style={styles.addUser}>
                    {showInput
                        ? <>
                            <TextInput value={value} onChangeText={setValue}
                                       style={[globalStyles.border, styles.input]} autoFocus/>
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
        fontSize: 25,
        paddingTop: 20,
        paddingBottom: 20,
        // position: 'absolute',
        // top: 0,
    },
    usersDiv: {
        width: '100%',
        height: '50%',
        paddingLeft: 20,
        alignItems: 'flex-start',
        justifyContent: "flex-start",
    },
    userRow: {
        color: 'white',
        fontSize: 20,
        marginBottom: 10
    },
    input: {
        backgroundColor: 'white',
        width: 200,
        fontSize: 20,
        padding: 8,
        margin: 10,
        // marginBottom: 30
    },
    addUser: {
        paddingBottom: 50
    },
})