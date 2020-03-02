import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Loader from 'react-loader-spinner'

import { coordinatesSelector, isLoadingSelector } from '../selectors/coordinatesSelector'
import { getCoordinatesSuccessAction } from '../actions/coordinatesActions'
import { navigateAction } from '../actions/navigationActions'
import coordinatesService from '../services/coordinatesService'
import { currentRouteSelector } from '../selectors/NavigationSelector'
import './Header.scss'

function Header(props) {
  const { coordinates, isLoading, setCoordinates, navigate, currentRoute } = props

  const getCoordinates = () => {
    coordinatesService.getAll().then((response) => {
      setCoordinates(response)
    })
  }

  useEffect(() => {
    getCoordinates()
  }, [])

  const setRoute = (nextRoute) => {
    navigate(nextRoute)
  }

  const selectedLinkStyle = { backgroundColor: '#FFF', color: '#000' }

  return (
    <div className="header">
      <h1>NORDIC EARTH</h1>
      <div className="top_navigation_links">
        <Link
          style={currentRoute === 'home' ? selectedLinkStyle : {}}
          to="/"
          onClick={() => setRoute('home')}
        >
          Home
        </Link>
        <Link
          style={currentRoute === 'diy' ? selectedLinkStyle : {}}
          to="/instructions"
          onClick={() => setRoute('diy')}
        >
          DIY
        </Link>
        <Link
          style={currentRoute === 'keys' ? selectedLinkStyle : {}}
          to="/keys"
          onClick={() => setRoute('keys')}
        >
          Keys
        </Link>
        {isLoading && (
          <Loader className="loader" type="TailSpin" color="#00BFFF" height={40} width={40} />
        )}
        {!isLoading &&
          coordinates.map((coordinate) => (
            <Link key={coordinate.id} to={`/maps?gps=${coordinate.gps}`}>
              {coordinate.locationName}
            </Link>
          ))}
      </div>
    </div>
  )
}

Header.propTypes = {
  coordinates: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  setCoordinates: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  navigate: PropTypes.func.isRequired,
  currentRoute: PropTypes.string.isRequired
}

const mapDispatchToProps = (dispatch) => ({
  setCoordinates: (coordinates) => dispatch(getCoordinatesSuccessAction(coordinates)),
  navigate: (nextRoute) => dispatch(navigateAction(nextRoute))
})

const mapStateToProps = (state) => ({
  coordinates: coordinatesSelector(state),
  isLoading: isLoadingSelector(state),
  currentRoute: currentRouteSelector(state)
})

const ConnectedHeader = connect(mapStateToProps, mapDispatchToProps)(Header)

export default ConnectedHeader
