import { useState, useEffect } from 'react'
import { ThemeProvider, createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles'
import { Container } from '@material-ui/core'
import CssBaseline from '@material-ui/core/CssBaseline'
import Header from '../Header'
import Projects from '../Projects'
import Education from '../Education'
import Experience from '../Experience'
import OtherProjects from '../OtherProjects'
import './App.css'
import { darkTheme } from '../../styles/customStyles'
import { lightTheme } from '../../styles/customStyles'

function App() {
  const buildTheme = (theme) => {
    let createTheme = createMuiTheme(theme)
    return responsiveFontSizes(createTheme)
  }
  const [theme, setTheme] = useState(buildTheme(darkTheme))

  const switchTheme = () => {
    if (theme.palette.background.default === '#282c34') {
      setTheme(buildTheme(lightTheme))
    } else setTheme(buildTheme(darkTheme))
  }

  console.log(theme)
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="lg" className="App">
        <CssBaseline />
        <Header switchTheme={switchTheme} />
        <Projects />
        <Education />
        <Experience />
        <OtherProjects />
      </Container>
    </ThemeProvider>
  )
}

export default App
