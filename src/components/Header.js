import React, { useState } from 'react'
import { Box, Typography, Link, Container, IconButton } from '@material-ui/core'
import PhoneIcon from '@material-ui/icons/Phone'
import EmailIcon from '@material-ui/icons/Email'
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import { useStyles } from '../styles/customStyles'
import Image from 'material-ui-image'
import PopOver from './PopOver'
import GetIcon from './GetIcon'
import reactLogo from '../logos/reactLogo.svg'

const styles = {
  image: {
    maxWidth: 200,
    minWidth: 200,
  },
}

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
        <IconButton
          onClick={() => handleTheme()}
          // onMouseOver={(e) => handleHover(e)}
        >
          <GetIcon icon={reactLogo} className="reactLogo" />
        </IconButton>
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
        >
          <Link color="secondary" variant="body1" href="tel: 650-409-6202">
            <Box display="flex">
              <PhoneIcon /> 650 409 6202
            </Box>
          </Link>
          <Link color="secondary" variant="body1" href="mailto: staz.christo@gmail.com">
            <Box display="flex">
              <EmailIcon /> staz.christo@gmail.com
            </Box>
          </Link>
          <Link href="https://github.com/stazcp" color="secondary" variant="body1">
            <Box display="flex">
              <GitHubIcon /> github.com/stazcp
            </Box>
          </Link>
          <Link href="https://www.linkedin.com/in/staz-christo" color="secondary" variant="body1">
            <Box display="flex">
              <LinkedInIcon /> linkedin.com/in/staz-christo
            </Box>
          </Link>
        </Box>
      </Box>
      <PopOver anchorEl={anchorEl} setAnchorEl={setAnchorEl} />
    </>
  )
}
