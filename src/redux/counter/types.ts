import {rootReducer} from "../../root-reducer";

export interface Slice {
  value: number
}

export interface ActionSaga {
  type: string
  payload: number
}

export type RootState = ReturnType<typeof rootReducer>
