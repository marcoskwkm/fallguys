import React, { useState } from 'react'

import { Route } from './constants'
import Navbar from './Navbar'
import Tiptoe from './Tiptoe'
import PerfectMatch from './PerfectMatch'

const App = () => {
  const [route, setRoute] = useState(Route.TIPTOE)

  const handleRouteChange = (newRoute) => {
    setRoute(newRoute)
  }

  return (
    <div className="App">
      <Navbar onRouteChange={handleRouteChange} />
      {route === Route.TIPTOE && <Tiptoe />}
      {route === Route.PERFECT_MATCH && <PerfectMatch />}
    </div>
  )
}

export default App
