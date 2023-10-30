import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {addEvent} from "./events-slice";
import {Omit} from "@reduxjs/toolkit/dist/tsHelpers";

type Expense = {
    id: string
    debt: number
}

export type User = {
    name: string
    id: string
    expenses: number[]
    debt: Expense[]
}

type InitialState = {
    [key: string]: User[]
}

const initialState: InitialState = {
    ['some id']: [
        {
            name: 'Вася',
            id: 'id',
            expenses: [100, 600, 0],
            debt: [
                {
                    id: 'id12',
                    debt: 0,
                },
                {
                    id: 'idX',
                    debt: 0,
                }
            ]
        },
        {
            name: 'Ivan',
            id: 'id12',
            expenses: [0, 300, 0],
            debt: [
                {
                    id: 'id',
                    debt: 200,
                },
                {
                    id: 'idX',
                    debt: 0,
                },
            ]
        },
        {
            name: 'X',
            id: 'idX',
            expenses: [0, 0, 500],
            debt: [
                {
                    id: 'id',
                    debt: 0,
                },
                {
                    id: 'id12',
                    debt: 0,
                },
            ]
        }
    ]
}

const slice= createSlice({
    name: 'users',
    initialState,
    reducers: {
        addUser(state, action: PayloadAction<Omit<User, 'debt' | 'expenses'> & { eventId: string }>){
            const {eventId, name, id} = action.payload
            state[eventId].push({name, id, expenses: [], debt: []})
        },
        removeUser(state, action: PayloadAction<{eventId: string, userId: string}>){
            const {eventId, userId: id} = action.payload
            state[eventId].filter(u=> u.id !== id)
        },
    },
    extraReducers: (builder)=>{
        builder
            .addCase(addEvent, (state, action)=>{
                state[action.payload.id] = []
            })
    }
})

export const {removeUser, addUser} = slice.actions
export const usersReducer = slice.reducer;