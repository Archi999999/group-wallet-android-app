
import {NativeStackScreenProps} from "@react-navigation/native-stack";

export type RootStackParamList = {
    Main: undefined
    EventPage: {eventId: string, title: string}
};

export type MainProps = NativeStackScreenProps<RootStackParamList, 'Main'>
export type EventProps = NativeStackScreenProps<RootStackParamList, 'EventPage'>