import {configureStore} from "@reduxjs/toolkit";
import {eventsReducer} from "./events-slice";


const store = configureStore({
    reducer: {
        events: eventsReducer
    }
})

export default store

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;