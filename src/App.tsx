import React from 'react'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import Main from './pages/main/Main'

const App: React.FC = () => (
  <Router>
    <Switch>
      <Route exact path="/">
        <Main />
      </Route>
    </Switch>
  </Router>
)

export default App
