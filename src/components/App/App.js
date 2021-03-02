import React, { useState, useEffect, useContext } from 'react'
import { ThemeProvider } from '@material-ui/core/styles'
import { Container } from '@material-ui/core'
import CssBaseline from '@material-ui/core/CssBaseline'
import ScopedCssBaseline from '@material-ui/core/ScopedCssBaseline'
import Header from '../Header'
import Projects from '../Projects'
import Education from '../Education'
import Experience from '../Experience'
import './App.css'
import { ThemeContext } from '../ThemeContext'
import Footer from '../Footer'
import MyThemeProvider from '../ThemeContext'

export default function App() {
  const { myTheme, switchTheme } = useContext(ThemeContext)

  return (
    <MyThemeProvider>
      <ThemeProvider theme={myTheme}>
        <ScopedCssBaseline>
          <Container maxWidth="lg" className="App">
            <Header switchTheme={switchTheme} />
            <Projects />
            <Education />
            <Experience />
          </Container>
          <Footer />
        </ScopedCssBaseline>
      </ThemeProvider>
    </MyThemeProvider>
  )
}
