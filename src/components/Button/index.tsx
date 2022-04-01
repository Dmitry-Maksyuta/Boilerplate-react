import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import counterSelectors from '../../redux/selectors/counter'
import { counterActions } from '../../redux/reducers/counter'

const Button: React.FC = () => {
  const value: number = useSelector(counterSelectors.getValue)
  const dispatch = useDispatch()
  const onClick = () => dispatch(counterActions.initCounter(value))
  return (
    <div>
      <div onClick={onClick}>{value}</div>
    </div>
  )
}

export default Button
