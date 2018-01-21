import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css'
import TopMenu from './components/TopMenu'
import Channel from './components/Channel'
import Home from './Home'
import Menus from './routes/Menus'

const base = document.querySelector('base')
const baseHref = base ? base.getAttribute('href') : '/'

const App = () => (
  <BrowserRouter basename={baseHref.replace(/\/$/, '')}>
    <div>
      <TopMenu menus={Menus} />
      <div className="container">
        <Switch>
          <Route path="/" exact={true} component={Home} />
          <Route path="/:channelId" component={Channel} />
        </Switch>
      </div>
    </div>
  </BrowserRouter>
)

export default App