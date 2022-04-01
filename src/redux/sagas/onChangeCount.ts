import { takeLatest, put, call } from 'redux-saga/effects'
import { counterActions } from '../reducers/counter'

interface Action {
  type: string
  payload: number
}

export function* counterSaga(action: Action): any {
  if (!action) return
  try {
    const newNumber = action.payload + 1
    yield put(counterActions.setCounter(newNumber))
  } catch (e) {
    yield call(console.error, e)
  }
}

export function* counterWatcher() {
  yield takeLatest(counterActions.initCounter.type, counterSaga)
}
