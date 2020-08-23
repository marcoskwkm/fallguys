import React, { useEffect, useState } from 'react'
import tileImage from './media/tiles.png'

const initialTiles = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

const Tile = ({ value, active, onClick }) => {
  const commonStyles = {
    height: '80px',
    width: '80px',
    marginLeft: '2px',
    marginRight: '2px',
    borderRadius: '4px',
    fontSize: '60px',
    color: 'red',
    outline: 'none',
    cursor: 'pointer',
  }  
  const activeStyles = {
    backgroundColor: '#f19838',
    border: '1px',
  }
  const inactiveStyles = {
    backgroundColor: 'white',
    borderStyle: 'none',
  }

  return (
    <button
      className="flex justify-center items-center"
      style={{
        ...commonStyles,
        ...(active ? activeStyles : inactiveStyles),
      }}
      onClick={onClick}
    >
    {active && value}
    </button>
  )
}    

function App() {
  const [tiles, setTiles] = useState(initialTiles)

  const handleReset = () => setTiles(initialTiles)
  
  useEffect(() => {
    document.addEventListener('keydown', (event) => {
      if (event.key === 'r') {
        handleReset()
        return
      }
      
      const key = parseInt(event.key)

      if (isNaN(key)) {
        return
      }

      if (event.shiftKey) {
        setTiles((t) => t.includes(key) ? t : t.concat(key).sort())
      } else {
        setTiles((t) => t.filter(tile => tile !== key))
      }      
    })
  }, [])

  return (
    <div className="App flex flex-column items-center">
      <img src={tileImage} alt="tiles" />
      <p style={{ fontSize: '36px' }}>Possible tiles:</p>
      <div className="flex">
        {initialTiles.map((tile) => (
          <Tile
            value={tile}
            active={tiles.includes(tile)}
            onClick={() => setTiles((t) => t.includes(tile) ? t.filter((x) => x !== tile) : t.concat(tile).sort())}
          />
        ))}
      </div>
      <button className="mt5"onClick={handleReset}>Reset</button>
    </div>
  )
}

export default App;
