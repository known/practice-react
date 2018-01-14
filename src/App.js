import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css'
import TopNavbar from './components/TopNavbar'
import Channel from './components/Channel'
import Home from './Home'
import Channels from './routes/Channels'

const base = document.querySelector('base')
const baseHref = base ? base.getAttribute('href') : '/'

const App = () => (
  <BrowserRouter basename={baseHref.replace(/\/$/, '')}>
    <div>
      <TopNavbar channels={Channels} />
      <div className="container">
        <Switch>
          <Route path="/" exact={true} component={Home} />
          <Route path="/:channel" component={Channel} />
        </Switch>
      </div>
    </div>
  </BrowserRouter>
)

export default App