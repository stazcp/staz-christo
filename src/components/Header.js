import React, { useState } from 'react'
import { Box, Typography, Link, Container, IconButton, Tooltip } from '@material-ui/core'
import PhoneIcon from '@material-ui/icons/Phone'
import EmailIcon from '@material-ui/icons/Email'
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import { makeStyles } from '@material-ui/core/styles'
import PopOver from './PopOver'
import GetIcon from './GetIcon'
import reactLogo from '../logos/reactLogo.svg'
import clsx from 'clsx'

export const useStyles = makeStyles((theme) => ({
  header: {
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
    flexDirection: 'row',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
      '& > * + *': {
        marginLeft: theme.spacing(0),
      },
      alignItems: 'flex-start',
      paddingLeft: '8%',
    },
  },
}))

export default function Header({ switchTheme }) {
  const classes = useStyles()
  const [anchorEl, setAnchorEl] = useState(null)

  const handleTheme = () => {
    switchTheme()
  }

  const handleHover = (e) => {
    setAnchorEl(e.currentTarget)
  }

  return (
    <>
      <Box>
        <Tooltip title="Click Me!" placement="right" arrow>
          <IconButton
            onClick={() => handleTheme()}
            // onMouseOver={(e) => handleHover(e)}
          >
            <GetIcon icon={reactLogo} className="reactLogo" />
          </IconButton>
        </Tooltip>
        <Typography variant="h3" color="primary">
          Staz Christodoulakis
        </Typography>
        <Typography variant="body1" color="primary">
          Software Engineer · Web/App
        </Typography>
        <hr className="solid" />

        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          className={classes.root}
          flexWrap="wrap"
          className={classes.header}
        >
          <Box display="flex" flexDirection="row" className={classes.header} flexWrap="wrap">
            <Link color="secondary" variant="body1" href="tel: 650-409-6202">
              <Box display="flex" flexWrap="nowrap">
                <PhoneIcon /> 650 409 6202
              </Box>
            </Link>
            <Link color="secondary" variant="body1" href="mailto: staz.christo@gmail.com">
              <Box display="flex" flexWrap="nowrap">
                <EmailIcon /> staz.christo@gmail.com
              </Box>
            </Link>
          </Box>
          <Box display="flex" flexDirection="row" className={classes.header} flexWrap="wrap">
            <Link href="https://github.com/stazcp" color="secondary" variant="body1">
              <Box display="flex" flexWrap="nowrap">
                <GitHubIcon /> github.com/stazcp
              </Box>
            </Link>
            <Link href="https://www.linkedin.com/in/staz-christo" color="secondary" variant="body1">
              <Box display="flex" flexWrap="nowrap">
                <LinkedInIcon /> linkedin.com/in/staz-christo
              </Box>
            </Link>
          </Box>
        </Box>
      </Box>
      <PopOver anchorEl={anchorEl} setAnchorEl={setAnchorEl} />
    </>
  )
}
