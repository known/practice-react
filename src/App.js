import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import TopNavbar from './components/TopNavbar'

const base = document.querySelector('base')
const baseHref = base ? base.getAttribute('href') : '/'
const channels = [
  {
    path: '/basic',
    title: 'Basic'
  }
]

const App = () => (
  <BrowserRouter basename={baseHref.replace(/\/$/, '')}>
    <div>
      <TopNavbar channels={channels} />
    </div>
  </BrowserRouter>
)

export default App