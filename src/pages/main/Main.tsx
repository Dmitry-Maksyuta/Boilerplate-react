import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import counterSelectors from '../../redux/counter/selectors';
import { counterActions } from '../../redux/counter/reducer';
import { Wrapper, Content } from './styled';

const Main: React.FC = () => {
    const value: number = useSelector(counterSelectors.getValue)
    const dispatch = useDispatch()
    const onClick = () => dispatch(counterActions.initCounter(value))
    return (
        <Wrapper>
            <Content onClick={onClick}>{value}</Content>
        </Wrapper>
    )
}

export default Main;