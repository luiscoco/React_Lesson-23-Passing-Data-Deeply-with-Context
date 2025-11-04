import React, { useState } from 'react'
import { ThemeContext } from './contexts/ThemeContext'
import { LevelContext } from './contexts/LevelContext'
import Section from './components/Section'
import Post from './components/Post'

export default function App() {
  const [theme, setTheme] = useState('light')

  return (
    <ThemeContext.Provider value={theme}>
      <LevelContext.Provider value={1}>
        <div className="container">
          <div className="card">
            <h1>React Context: Deeply Nested Demo</h1>
            <p className="muted">
              Toggle the theme and navigate nested sections to see how context flows
              without prop drilling.
            </p>
            <div style={{ display: 'flex', gap: 10, marginBottom: 16 }}>
              <button onClick={() => setTheme(t => t === 'light' ? 'dark' : 'light')}>
                Toggle Theme ({theme})
              </button>
            </div>

            <Section>
              <Post
                title="React Context Made Simple"
                content="Learn how to avoid prop drilling using the Context API."
              />
              <Post
                title="Understanding Lifting State Up"
                content="Centralize shared state for better control and updates."
              />
            </Section>
          </div>

          <div className="card" style={{ marginTop: 20 }}>
            <h2>Playground</h2>
            <p className="muted">
              Add more nested <code>&lt;Section&gt;</code> wrappers, or create a new context to
              experiment further.
            </p>

            <Section>
              <Section>
                <Post
                  title="Deep Heading"
                  content="This post sits two sections deeper. Heading level increases automatically."
                />
              </Section>
            </Section>
          </div>
        </div>
      </LevelContext.Provider>
    </ThemeContext.Provider>
  )
}
