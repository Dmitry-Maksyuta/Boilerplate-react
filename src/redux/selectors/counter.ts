import { rootReducer } from '../../root-reducer'

type RootState = ReturnType<typeof rootReducer>

const getValue = (state: RootState) => state.counter.value

const counterSelectors = { getValue }

export default counterSelectors;
