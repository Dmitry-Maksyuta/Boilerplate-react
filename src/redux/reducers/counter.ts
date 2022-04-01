import { createSlice, PayloadAction, createAction } from '@reduxjs/toolkit'

const name = 'counter'

interface Slice {
  value: number
}

const initialState: Slice = {
  value: 0,
}

export const counterSlice = createSlice({
  name,
  initialState,

  reducers: {
    setCounter(state, action: PayloadAction<number>) {
      state.value = action.payload
    },
  },
})

export const counterActions = {
  setCounter: counterSlice.actions.setCounter,
  initCounter: createAction<number>(`${name}/initCounter`),
}

export const counter = counterSlice.reducer
