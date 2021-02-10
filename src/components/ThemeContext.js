import React, { createContext, useState } from 'react'
import { themes } from '../styles/customStyles'
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles'

const defaultTheme = responsiveFontSizes(createMuiTheme(themes.dark))

export const ThemeContext = createContext()

export default function MyThemeProvider(props) {
  const [myTheme, setMyTheme] = useState(defaultTheme)

  const buildTheme = (theme) => setMyTheme(responsiveFontSizes(createMuiTheme(theme)))

  const switchTheme = () => {
    if (myTheme.status === 'dark') {
      buildTheme(themes.light)
    } else {
      buildTheme(themes.dark)
    }
  }

  return (
    <ThemeContext.Provider value={{ myTheme, switchTheme }}>{props.children}</ThemeContext.Provider>
  )
}
