import React, {useState} from 'react';
import {Button, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View} from "react-native";

export const EventsPage = () => {
    const [value, setValue] = useState('')
    const [showInput, setShowInput] = useState(false)
    const [events, setEvents] = useState<string[]>()


    const addEvent = (event: string) => {
        const updateEvents = [...(events ?? []), event]
        setEvents(updateEvents)
        setShowInput(false)
    }

    return (
        <TouchableWithoutFeedback onPress={() => addEvent(value)}>
            <View style={styles.container}>
                <View>
                    {events?.map((e, index) => (
                        <Text key={index}>{e}</Text>
                    ))}
                </View>
                <View>
                    {showInput ?
                        <TextInput value={value} onChangeText={setValue} style={[globalStyles.border, styles.input]}/> :
                        <Button title={'Добавить событие'} onPress={() => setShowInput(prevState => !prevState)}/>
                    }
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#457945',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        backgroundColor: 'white',
        width: 200,
        fontSize: 20,
        padding: 8,
    },
});

const globalStyles = StyleSheet.create({
    border: {
        borderStyle: "solid",
        borderWidth: 2,
        borderColor: 'blue'
    }
})