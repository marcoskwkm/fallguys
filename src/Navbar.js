import React from 'react'

import { Route } from './constants'

const Navbar = ({ onRouteChange }) => {
  return (
    <nav className="dt w-100 border-box ph3 bb h3">
      <div className="dtc v-mid w-50 tl">
        <span
          className="link dim f6 f5-ns dib pointer"
          onClick={() => onRouteChange(Route.TIPTOE)}
        >
          Tip Toe
        </span>
        <span
          className="link dim f6 f5-ns dib ml3 ml4-ns pointer"
          onClick={() => onRouteChange(Route.PERFECT_MATCH)}
        >
          Perfect Match
        </span>
      </div>
    </nav>
  )
}

export default Navbar
