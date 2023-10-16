// import {createAction, createReducer} from "@reduxjs/toolkit";

type Expense = {
    id: string
    debt: number
}

type User = {
    name: string
    id: string
    expenses: number[]
    debt: Expense[]
}

type Event = {
    title: string
    id: string
    total: number
    addedDate: string
    users: User[]
}

export type InitialState = Event[]

const initialState: InitialState = [
    {
        title: 'Горнолыжка',
        id: 'some id',
        total: 1500,
        addedDate: "2023-10-15",
        users: [
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
]

// const addEvent = createAction('ADD_EVENT')
// const addUser = createAction('ADD_USER')

// export default createReducer(initialState, builder => {
    // builder.addCase('ADD_EVENT', (state, action: PayloadAction<Omit<Event, 'users' | 'total'>>) => {
    //     const { title, id, addedDate } = action.payload;
    //     const newEvent: Event = {
    //         title,
    //         id,
    //         total: 0,
    //         date,
    //         users: []
    //     };
    //     state.push(newEvent)
    // })
// })