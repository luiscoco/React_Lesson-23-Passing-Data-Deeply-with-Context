import React, { useContext } from 'react'
import { LevelContext } from '../contexts/LevelContext'

export default function Heading({ children }) {
  const level = useContext(LevelContext)
  const Tag = `h${Math.min(level, 6)}`
  return <Tag>{children}</Tag>
}
