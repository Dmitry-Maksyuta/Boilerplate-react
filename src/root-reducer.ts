import { combineReducers } from 'redux'
import { counter } from './redux/reducers/counter'

const reducers = {
  counter,
}

export const rootReducer = combineReducers(reducers)
