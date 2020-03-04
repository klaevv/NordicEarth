import React, { useEffect } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Loader from 'react-loader-spinner'

import { HOME, DIY, KEYS, MAPS } from '../constants/routeNames'
import { coordinatesSelector, isLoadingSelector } from '../selectors/coordinatesSelector'
import { getCoordinatesSuccessAction } from '../actions/coordinatesActions'
import { navigateAction } from '../actions/navigationActions'
import coordinatesService from '../services/coordinatesService'
import { currentRouteSelector, previousRouteSelector } from '../selectors/NavigationSelector'
import './Header.scss'

function Header(props) {
  const {
    coordinates,
    isLoading,
    setCoordinates,
    navigate,
    currentRoute,
    history,
    previousRoute
  } = props

  const getCoordinates = () => {
    coordinatesService.getAll().then((response) => {
      setCoordinates(response)
    })
  }

  useEffect(() => {
    getCoordinates()
  }, [])

  const setRoute = (nextRoute) => {
    navigate(nextRoute, currentRoute)
  }

  const exitMap = () => {
    setRoute(previousRoute)
    history.goBack()
  }

  const selectedLinkStyle = { backgroundColor: '#FFF', color: '#000' }
  const isMapsRoute = ![HOME, DIY, KEYS].includes(currentRoute)

  return (
    <div className="header">
      <h1>NORDIC EARTH</h1>
      {isMapsRoute && (
        <div className="top_navigation_links">
          <button type="button" onClick={exitMap}>
            Exit map
          </button>
        </div>
      )}
      {!isMapsRoute && (
        <div className="top_navigation_links">
          <Link
            style={currentRoute === HOME ? selectedLinkStyle : {}}
            to={HOME}
            onClick={() => setRoute(HOME)}
          >
            Home
          </Link>
          <Link
            style={currentRoute === DIY ? selectedLinkStyle : {}}
            to={DIY}
            onClick={() => setRoute(DIY)}
          >
            DIY
          </Link>
          <Link
            style={currentRoute === KEYS ? selectedLinkStyle : {}}
            to={KEYS}
            onClick={() => setRoute(KEYS)}
          >
            Keys
          </Link>
          {isLoading && (
            <Loader className="loader" type="TailSpin" color="#00BFFF" height={40} width={40} />
          )}
          {!isLoading &&
            coordinates.map((coordinate) => (
              <Link
                style={currentRoute === coordinate.locationName ? selectedLinkStyle : {}}
                key={coordinate.id}
                to={`${MAPS}?gps=${coordinate.gps}`}
                onClick={() => setRoute(MAPS)}
              >
                {coordinate.locationName}
              </Link>
            ))}
        </div>
      )}
    </div>
  )
}

Header.propTypes = {
  coordinates: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  setCoordinates: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  navigate: PropTypes.func.isRequired,
  currentRoute: PropTypes.string.isRequired,
  history: PropTypes.shape({ goBack: PropTypes.func.isRequired }).isRequired,
  previousRoute: PropTypes.string
}

Header.defaultProps = {
  previousRoute: null
}

const mapDispatchToProps = (dispatch) => ({
  setCoordinates: (coordinates) => dispatch(getCoordinatesSuccessAction(coordinates)),
  navigate: (nextRoute, previousRoute) => dispatch(navigateAction(nextRoute, previousRoute))
})

const mapStateToProps = (state) => ({
  coordinates: coordinatesSelector(state),
  isLoading: isLoadingSelector(state),
  currentRoute: currentRouteSelector(state),
  previousRoute: previousRouteSelector(state)
})

const ConnectedHeader = connect(mapStateToProps, mapDispatchToProps)(Header)

export default withRouter(ConnectedHeader)
