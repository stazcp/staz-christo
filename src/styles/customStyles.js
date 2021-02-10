import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
  root: {
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
  },
}))

export const themes = {
  dark: {
    status: 'dark',
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
  },

  light: {
    status: 'light',
    palette: {
      background: {
        default: '#ffffff',
      },
      primary: {
        main: '#000000',
      },
      secondary: {
        main: 'rgba(46, 45, 45, 0.8)',
      },
    },
  },
}
