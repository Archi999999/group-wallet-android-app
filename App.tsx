import {CreateEventsPage} from "./src/pages/create-events-page";
import {NotificationProvider} from "react-native-internal-notification";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {EventPage} from "./src/pages/event-page";
import {RootStackParamList} from "./src/types/navigation-types";
import {Provider} from "react-redux";
import store from "./src/store/store";

export default function App() {
    const Stack = createNativeStackNavigator<RootStackParamList>()

    return (
        <Provider store={store}>
            <NavigationContainer>
                <NotificationProvider>
                    <Stack.Navigator>

                            <Stack.Screen name={'Main'} component={CreateEventsPage} options={{title:"События", animation: 'flip', headerTitleAlign: 'center'}}/>
                            <Stack.Screen name={'EventPage'} component={EventPage} options={{ title: 'Events' }}/>

                    </Stack.Navigator>
                </NotificationProvider>
            </NavigationContainer>
        </Provider>
    );
}



