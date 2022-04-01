import { combineReducers } from 'redux'
import { counter } from './redux/counter/reducer'

const reducers = {
  counter,
}

export const rootReducer = combineReducers(reducers)
