import { all } from 'redux-saga/effects'
import { counterWatcher } from './redux/sagas/onChangeCount'

export function* rootSaga() {
  yield all([counterWatcher()])
}
