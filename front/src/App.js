import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './App.css'
import BonusMapPage from './pages/BonusMapPage/BonusMapPage'
import MapPage from './pages/MapPage/MapPage'
import InstructionsPage from './pages/InstructionsPage/InstructionsPage'
import HomePage from './pages/HomePage/HomePage'
import KeyCommandsPage from './pages/KeyCommandsPage/KeyCommandsPage'
import Header from './header/Header'
import { HOME, DIY, KEYS, MAPS, BONUS_MAP } from './constants/routeNames'

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Route exact path={HOME} component={HomePage} />
        <Route path={DIY} component={InstructionsPage} />
        <Route path={KEYS} component={KeyCommandsPage} />
        <Route path={MAPS} component={MapPage} />
        <Route path={BONUS_MAP} component={BonusMapPage} />
      </Router>
    </div>
  )
}

export default App
