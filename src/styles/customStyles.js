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
      default: '#282c34 !important',
    },
    primary: {
      main: '#ffffff !important',
    },
    secondary: {
      main: 'rgba(218, 223, 224, 0.65) !important',
    },
  },
}

export const lightTheme = {
  palette: {
    background: {
      default: '#ffffff !important',
    },
    primary: {
      main: '#000000 !important',
    },
    secondary: {
      main: 'rgba(46, 45, 45, 0.8) !important',
    },
  },
}
