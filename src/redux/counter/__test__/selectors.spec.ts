import counterSelectors from '../selectors'

describe('counterSelectors', () => {
  const selector = counterSelectors.getValue()
  it('should select the loading', () => {
    const mockState = {
      counter: {
        value: 0,
      },
    }
    expect(selector(mockState)).toEqual(0)
  })
})
