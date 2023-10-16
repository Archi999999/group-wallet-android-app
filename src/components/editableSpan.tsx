import {Text, View, StyleSheet, TextInput, TouchableOpacity} from "react-native";
import React, {FC, ReactNode, useState} from "react";
import {AntDesign} from "@expo/vector-icons";

type Props = {
    titleEvent: string
}

export const EditableSpan: FC<Props> = (
    {
        titleEvent,
    }
) => {
    const [editMode, setEditMode] = useState(false)

    return (
        <View>
            {
                editMode
                    ? <>
                    <TextInput value={titleEvent}/>
                    <TouchableOpacity onPress={()=>setEditMode(false)}>
                        <AntDesign name="check" size={20} color="white" />
                    </TouchableOpacity>
                    </>
                    : <Text style={s.eventName} onLongPress={()=>setEditMode(true)}>{titleEvent}</Text>
            }
        </View>
    );
};


const s = StyleSheet.create({
    eventName: {
        fontSize: 22,
        color: 'white',
        marginRight: 10,
    },
})