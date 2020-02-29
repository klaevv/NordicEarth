import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { coordinatesSelector } from '../selectors/coordinatesSelector'
import { getCoordinatesSuccessAction } from '../actions/coordinatesActions'
import coordinatesService from '../services/coordinatesService'

function Header(props) {
  const { coordinates, setCoordinates } = props

  useEffect(() => {
    coordinatesService.getAll().then((coordinates) => {
      setCoordinates(coordinates)
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

const mapDispatchToProps = (dispatch) => {
  return {
    setCoordinates: (coordinates) => {
      dispatch(getCoordinatesSuccessAction(coordinates))
    }
  }
}

const mapStateToProps = (state) => {
  return {
    coordinates: coordinatesSelector(state)
  }
}

const ConnectedHeader = connect(mapStateToProps, mapDispatchToProps)(Header)

export default ConnectedHeader
