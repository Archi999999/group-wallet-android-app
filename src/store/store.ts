import {configureStore} from "@reduxjs/toolkit";
import {eventsReducer} from "./events-slice";
import {usersReducer} from "./users-slice";
import {viewportReducer} from "./viewport-slice";


const store = configureStore({
  reducer: {
    events: eventsReducer,
    users: usersReducer,
    viewport: viewportReducer,
  }
})

export default store

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;