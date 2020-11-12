import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
  root: {
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
  },
}))

export const darkTheme = {
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
}

export const lightTheme = {
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
}
