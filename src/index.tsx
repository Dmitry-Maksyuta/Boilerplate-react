import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from 'store'
import GlobalStyle from 'styled'

import App from 'App'

const Main: React.FC = () => {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <App />
    </Provider>
  )
}

ReactDOM.render(<Main />, document.getElementById('root'))
