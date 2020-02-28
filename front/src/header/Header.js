import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import coordinatesService from '../services/coordinatesService'

function Header() {
  const [coordinates, setCoordinates] = useState([])
  useEffect(() => {
    coordinatesService.getAll().then((response) => {
      setCoordinates(response)
    })
  }, [])

  return (
    <div className="top_navigation">
      <h1>NORDIC EARTH</h1>
      <div className="top_navigation_links">
        <Link to="/">Home</Link>
        <Link to="/instructions">DIY</Link>
        <Link to="/keys">Keys</Link>
        {coordinates.map((coordinate) => (
          <Link key={coordinate.id} to={`/maps?gps=${coordinate.gps}`}>
            {coordinate.locationName}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Header
