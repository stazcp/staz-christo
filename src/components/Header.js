import ReactSvg from './reactSvg'
import { Box, Typography, Link, Container, IconButton } from '@material-ui/core'
import PhoneIcon from '@material-ui/icons/Phone'
import EmailIcon from '@material-ui/icons/Email'
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import { useStyles } from '../styles/customStyles'
import Image from 'material-ui-image'

const styles = {
  image: {
    maxWidth: 200,
    minWidth: 200,
  },
}

export default function Header({ switchTheme }) {
  const classes = useStyles()

  const handleTheme = () => {
    switchTheme()
  }

  return (
    <Box>
      <IconButton onClick={() => handleTheme()}>
        <ReactSvg />
      </IconButton>
      <Typography variant="h3" color="primary">
        Staz Christodoulakis
      </Typography>
      <Typography variant="body1" color="primary">
        Software Engineer · Web/App
      </Typography>
      <hr className="solid" />
      <Typography variant="body1" color="secondary">
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          className={classes.root}
          flexWrap="wrap"
        >
          <Box display="flex">
            <PhoneIcon /> 650 409 6202
          </Box>
          <Box display="flex">
            <EmailIcon /> staz.christo@gmail.com
          </Box>
          <Link href="https://github.com/stazcp" color="inherit" display="flex">
            <Box display="flex">
              <GitHubIcon /> github.com/stazcp
            </Box>
          </Link>
          <Link href="https://www.linkedin.com/in/staz-christo" color="inherit">
            <Box display="flex">
              <LinkedInIcon /> linkedin.com/in/staz-christo
            </Box>
          </Link>
        </Box>
      </Typography>
    </Box>
  )
}
