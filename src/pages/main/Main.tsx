import React from 'react'
import counterSelectors from '../../redux/counter/selectors'
import { counterActions } from '../../redux/counter/reducer'
import { Wrapper } from './styled'
import { useAppDispatch, useAppSelector } from '../../hooks'

const Main: React.FC = () => {
  const value: number = useAppSelector(counterSelectors.getValue)
  const dispatch = useAppDispatch()
  const onClick = () => dispatch(counterActions.initCounter(value))
  return <Wrapper onClick={onClick}>{value}</Wrapper>
}

export default Main
