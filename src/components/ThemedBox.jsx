import React, { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'

export default function ThemedBox({ children }) {
  const theme = useContext(ThemeContext)
  const isDark = theme === 'dark'
  const style = {
    background: isDark ? '#333' : '#f4f4f4',
    color: isDark ? '#fff' : '#000'
  }
  return (
    <div className="themedbox" style={style}>
      {children}
    </div>
  )
}
