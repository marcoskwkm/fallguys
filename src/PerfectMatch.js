import React, { useEffect, useState } from 'react'

import { Fruit } from './constants'
import appleImage from './media/pm-apple.png'
import bananaImage from './media/pm-banana.png'
import cherryImage from './media/pm-cherry.png'
import grapeImage from './media/pm-grape.png'
import orangeImage from './media/pm-orange.png'
import watermelonImage from './media/pm-watermelon.png'

const Values = {
  UNKNOWN: 'UNKNOWN',
  ...Fruit,
}

const Tile = ({ value, selected, onClick }) => {
  const styles = {
    height: '120px',
    width: '120px',
    borderRadius: '8px',
    borderColor: selected ? '#ffd700' : 'black',
    borderStyle: 'solid',
    margin: '2px',
    overflow: 'hidden',
  }

  const srcs = {
    [Fruit.APPLE]: appleImage,
    [Fruit.BANANA]: bananaImage,
    [Fruit.CHERRY]: cherryImage,
    [Fruit.GRAPE]: grapeImage,
    [Fruit.ORANGE]: orangeImage,
    [Fruit.WATERMELON]: watermelonImage,
  }

  return (
    <div style={styles} onClick={onClick}>
      {value === Values.UNKNOWN ? (
        <div
          style={{
            height: '100%',
            width: '100%',
            backgroundColor: '#6475CD',
          }}
        />
      ) : (
        <img
          src={srcs[value]}
          alt="tile"
          style={{
            width: '100%',
            height: '100%',
          }}
        />
      )}
    </div>
  )
}

const PerfectMatch = () => {
  const [selected, setSelected] = useState(null)
  const [values, setValues] = useState(
    [...new Array(16)].map(() => Values.UNKNOWN)
  )

  useEffect(function preloadImages() {
    ;[
      appleImage,
      bananaImage,
      cherryImage,
      grapeImage,
      orangeImage,
      watermelonImage,
    ].forEach((img) => {
      const image = new Image()
      image.src = img
    })
  }, [])

  useEffect(
    function setKeyDownEventHandler() {
      const handler = (event) => {
        if (selected === null) {
          return
        }

        const keys = {
          a: Values.APPLE,
          b: Values.BANANA,
          c: Values.CHERRY,
          g: Values.GRAPE,
          m: Values.WATERMELON,
          o: Values.ORANGE,
          w: Values.WATERMELON,
        }

        const fruit = keys[event.key]
        if (!fruit) {
          return
        }

        setValues((arr) =>
          arr.map((val, idx) => (idx === selected ? fruit : val))
        )
      }

      document.addEventListener('keydown', handler)
      return () => document.removeEventListener('keydown', handler)
    },
    [selected]
  )

  const handleReset = () => {
    setValues([...new Array(16)].map(() => Values.UNKNOWN))
    setSelected(null)
  }

  return (
    <div className="flex flex-column items-center mt4">
      {[...new Array(4)].map((_, row) => (
        <div key={row} className="flex justify-center">
          {[...new Array(4)].map((_, col) => {
            const id = 4 * row + col
            return (
              <Tile
                key={id}
                selected={selected === id}
                onClick={() => setSelected(4 * row + col)}
                value={values[id]}
              />
            )
          })}
        </div>
      ))}
      <button className="mt4" onClick={handleReset}>
        Reset
      </button>
    </div>
  )
}

export default PerfectMatch
