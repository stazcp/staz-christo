import { ThemeProvider, createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles'
import { Container } from '@material-ui/core'
import CssBaseline from '@material-ui/core/CssBaseline'
import Header from '../Header'
import Projects from '../Projects'
import Education from '../Education'
import './App.css'

let theme = createMuiTheme({
  palette: {
    background: {
      default: '#282c34',
    },
    primary: {
      main: '#ffffff',
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
      </Container>
    </ThemeProvider>
  )
}

export default App
