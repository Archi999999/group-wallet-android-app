import {createSlice, PayloadAction} from "@reduxjs/toolkit";

type InitialState = {
  keyboardHeight: number
}

const initialState = {
  keyboardHeight: 280
}

const slice = createSlice({
  name: 'viewport',
  initialState,
  reducers: {
    addKeyboardHeight(state, action: PayloadAction<Pick<InitialState, 'keyboardHeight'>>) {
      state = {keyboardHeight: action.payload.keyboardHeight}
    }
  }})

export const viewportReducer = slice.reducer
export const {addKeyboardHeight} = slice.actions