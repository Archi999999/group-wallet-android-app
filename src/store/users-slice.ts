import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {addEvent} from "./events-slice";
import {Omit} from "@reduxjs/toolkit/dist/tsHelpers";

type Debt = {
  id: string
  debt: number
}

type Expense = {
  id: string
  title: string
  count: number
}

export type User = {
  name: string
  id: string
  expenses: Expense[]
  debts: Debt[]
}

export type ShortUser = Pick<User, 'name' | 'id'> & { exp: number }

type InitialState = {
  [key: string]: User[]
}

const initialState: InitialState = {
  ['some id']: [
    {
      name: 'Вася',
      id: 'id',
      expenses: [
        {
          id: 'awd',
          title: '',
          count: 100,
        },
        {
          id: '123',
          title: '',
          count: 600,
        },
        {
          id: '321',
          title: '',
          count: 0,
        },
      ],
      debts: [
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
      expenses: [
        {
          id: 'awd',
          title: '',
          count: 0,
        },
        {
          id: '123',
          title: '',
          count: 300,
        },
        {
          id: '321',
          title: '',
          count: 0,
        },
      ],
      debts: [
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
      name: 'Александр',
      id: 'idX',
      expenses: [
        {
          id: 'awd',
          title: '',
          count: 0,
        },
        {
          id: '123',
          title: '',
          count: 0,
        },
        {
          id: '321',
          title: '',
          count: 500,
        },
      ],
      debts: [
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

const slice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUser(state, action: PayloadAction<Omit<User, 'debts' | 'expenses'> & { eventId: string }>) {
      const {eventId, name, id} = action.payload
      state[eventId].push({name, id, expenses: [], debts: []})
    },
    removeUser(state, action: PayloadAction<{ eventId: string, userId: string }>) {
      const {eventId, userId: id} = action.payload
      state[eventId].filter(u => u.id !== id)
    },
    addExpense(state, action: PayloadAction<{ eventId: string, expId: string, users: ShortUser[], title: string }>) {
      const {expId, eventId, users, title} = action.payload
      const allUsers = state[eventId]
      users.forEach(({id, exp}) => {
        const countDebt =  Math.round(exp / allUsers.length)
        allUsers.forEach(u => {
          if (u.id === id) {
            u.expenses.push({id: expId, title, count: exp})
          } else {
            const debts = u.debts.find(debt => debt.id === id)
            if (debts) {
              debts.debt += countDebt
            } else {
              u.debts.push({id, debt: countDebt})
            }
          }
        })
        })
      }
    },
    extraReducers: (builder) => {
      builder
        .addCase(addEvent, (state, action) => {
          state[action.payload.id] = []
        })
    }
  })

export const {removeUser, addUser, addExpense} = slice.actions
export const usersReducer = slice.reducer;