import React, { useContext } from 'react'
import { LevelContext } from '../contexts/LevelContext'

export default function Section({ children }) {
  const parentLevel = useContext(LevelContext)
  const nextLevel = parentLevel + 1
  return (
    <LevelContext.Provider value={nextLevel}>
      <section style={{ marginLeft: 20 * parentLevel }}>{children}</section>
    </LevelContext.Provider>
  )
}
