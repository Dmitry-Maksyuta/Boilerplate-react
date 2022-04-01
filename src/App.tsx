import React from 'react'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import Button from './components/Button'

const App: React.FC = () => (
  <Router>
    <Switch>
      <Route exact path="/">
        <Button />
      </Route>
    </Switch>
  </Router>
)

export default App
