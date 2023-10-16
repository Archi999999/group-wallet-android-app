
import {NativeStackScreenProps} from "@react-navigation/native-stack";

export type RootStackParamList = {
    Main: undefined
    EventPage: undefined
};

export type MainProps = NativeStackScreenProps<RootStackParamList, 'Main'>
export type EventProps = NativeStackScreenProps<RootStackParamList, 'EventPage'>