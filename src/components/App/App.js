import { ThemeProvider, createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles'
import { Container } from '@material-ui/core'
import CssBaseline from '@material-ui/core/CssBaseline'
import Header from '../Header'
import Projects from '../Projects'
import Education from '../Education'
import Experience from '../Experience'
import OtherProjects from '../OtherProjects'
import './App.css'

let theme = createMuiTheme({
  palette: {
    background: {
      default: '#282c34',
    },
    primary: {
      main: '#ffffff',
    },
    secondary: {
      main: 'rgba(218, 223, 224, 0.65)',
    },
  },
})
theme = responsiveFontSizes(theme)

function App() {
  console.log(theme)
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="lg" className="App">
        <CssBaseline />
        <Header />
        <Projects />
        <Education />
        <Experience />
        <OtherProjects />
      </Container>
    </ThemeProvider>
  )
}

export default App
