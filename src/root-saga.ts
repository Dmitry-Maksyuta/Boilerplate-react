import { all } from 'redux-saga/effects'
import { counterWatcher } from './redux/counter/saga'

export function* rootSaga() {
  yield all([counterWatcher()])
}
