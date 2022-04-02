import { createSelector } from 'reselect'
import { RootState, Slice } from './types'

const select = (state: RootState) => state.counter

const getValue = () => createSelector(select, (s: Slice) => s.value)

const counterSelectors = { getValue }

export default counterSelectors
