import * as React from 'react'
import { shallow } from 'enzyme'
import Main from '../Main'

jest.mock('react-redux', () => ({
  useSelector: jest.fn().mockReturnValue(0),
  useDispatch: () => jest.fn(),
}))

describe('Counter', () => {
  test('starts counter on 0', () => {
    const wrapper = shallow(<Main />).dive()
    expect(wrapper.text()).toEqual('0')
  })

  it('renders without crashing', () => {
    expect(shallow(<Main />))
  })

  // it('increments counter', () => {
  //   const wrapper = shallow(<Main />).dive()
  //   wrapper.find('div').simulate('click')
  //   expect(wrapper.find('div').text()).toEqual('1')
  // })
})
