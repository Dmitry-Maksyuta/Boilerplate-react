import { takeLatest, put, call } from 'redux-saga/effects'
import { counterActions } from './reducer'
import { ActionSaga } from './types';

export function* counterSaga(action: ActionSaga): any {
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
