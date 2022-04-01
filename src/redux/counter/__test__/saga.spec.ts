import { takeLatest, put, call } from 'redux-saga/effects'
import { counterWatcher, counterSaga } from '../saga'
import { counterActions } from '../reducer'

describe('counter > counterSaga', () => {
  const action = {
    type: '',
    payload: 1,
  }
  it('should call success action', () => {
    const generator = counterSaga(action)

    expect(generator.next().value).toEqual(put(counterActions.setCounter(2)))

    expect(generator.next().done).toBeTruthy()
  })

  it('should call fail action', () => {
    const generator = counterSaga(action)

    generator.next()

    expect(generator.throw({ message: 'error' }).value).toEqual(
      call(console.error, 'error')
    )
  })
})

describe('counter > counterWatcher', () => {
  it('should call success action', () => {
    const generator = counterWatcher()

    expect(generator.next().value).toEqual(takeLatest(counterActions.initCounter.type, counterSaga))
  })
})
