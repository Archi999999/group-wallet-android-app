import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Omit} from "@reduxjs/toolkit/dist/tsHelpers";

type Event = {
    title: string
    id: string
    total: number
    addedDate: string
}

type InitialState = Event[]

const initialState: InitialState = [{
    title: 'Горнолыжка',
    id: 'some id',
    total: 1500,
    addedDate: "2023-10-15",
}]

const slice = createSlice({
    name: 'events',
    initialState,
    reducers: {
        addEvent(state,action: PayloadAction<Omit<Event, 'total'>>) {
            state.push({...action.payload, total: 0})
        },
        removeEvent(state, action: PayloadAction<string>){
            return state.filter(el => el.id !== action.payload)
        },
        renameEvent(state, action: PayloadAction<Omit<Event, 'addedDate' | 'total'>>){
            const event = state.find(el=>el.id === action.payload.id)
            if (event)
            event.title = action.payload.title
        }
    }
})

export const { addEvent, removeEvent, renameEvent } = slice.actions;
export const eventsReducer = slice.reducer;