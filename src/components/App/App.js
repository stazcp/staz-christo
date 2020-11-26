import React, { useState, useEffect } from 'react'
import { ThemeProvider, createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles'
import { Container } from '@material-ui/core'
import CssBaseline from '@material-ui/core/CssBaseline'
import Header from '../Header'
import Projects from '../Projects'
import Education from '../Education'
import Experience from '../Experience'
import './App.css'
import { darkTheme } from '../../styles/customStyles'
import { lightTheme } from '../../styles/customStyles'
import Footer from '../Footer'

function App() {
  const buildTheme = (theme) => {
    let createTheme = createMuiTheme(theme)
    return responsiveFontSizes(createTheme)
  }
  const [theme, setTheme] = useState(buildTheme(darkTheme))
  const [dark, setDark] = useState(true)

  const switchTheme = () => {
    if (theme.palette.background.default === '#282c34 !important') {
      setTheme(buildTheme(lightTheme))
      setDark(false)
    } else {
      setTheme(buildTheme(darkTheme))
      setDark(true)
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="lg" className="App">
        <CssBaseline />
        <Header switchTheme={switchTheme} />
        <Projects />
        <Education dark={dark} />
        <Experience />
      </Container>
      <Footer />
    </ThemeProvider>
  )
}

export default App
