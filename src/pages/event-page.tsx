import React from 'react';
import {Text, View} from "react-native";
import {globalStyles} from "../styles/global-styles";
import {EventProps} from "../types/navigation-types";

export const EventPage = ({navigation}: EventProps) => {


    return (
        <View style={globalStyles.container}>
            <Text> HELLO! </Text>
                {/*<TextInput value={value} onChangeText={setValue} style={[globalStyles.border, styles.input]} />*/}
                {/*<Button title={'Сохранить'} onPress={() => addEvent(value)}/>*/}
        </View>
    );
};