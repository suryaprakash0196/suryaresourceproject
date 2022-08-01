import {Switch, Route} from 'react-router-dom'

import Home from './components/Home'
import AddResource from './components/AddResource'

import './App.css'

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/:id/addResource" component={AddResource} />
  </Switch>
)

export default App
