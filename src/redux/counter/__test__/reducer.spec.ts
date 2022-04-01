import store from '../../../store'
import { counterActions } from '../reducer'

test('counterActions > setCounter', () => {
  let state = store.getState().counter.value
  expect(state).toBe(0)

  store.dispatch(counterActions.setCounter(1))
  state = store.getState().counter.value
  expect(state).toEqual(1)

  store.dispatch(counterActions.setCounter(55))
  state = store.getState().counter.value
  expect(state).toEqual(55)
})
