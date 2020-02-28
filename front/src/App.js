import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './App.css'
import BonusMapPage from './pages/BonusMapPage'
import MapPage from './pages/MapPage'
import InstructionsPage from './pages/InstructionsPage'
import HomePage from './pages/HomePage'
import KeyCommandsPage from './pages/KeyCommandsPage'

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={HomePage} />
        <Route path="/instructions" component={InstructionsPage} />
        <Route path="/keys" component={KeyCommandsPage} />
        <Route path="/maps" component={MapPage} />
        <Route path="/bonusmap" component={BonusMapPage} />
      </Router>
    </div>
  )
}

export default App
