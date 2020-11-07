import ReactSvg from './reactSvg'
import { Box, Typography, Link } from '@material-ui/core'
import PhoneIcon from '@material-ui/icons/Phone'
import EmailIcon from '@material-ui/icons/Email'
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import { useStyles } from '../styles/useStyles'

export default function Header({ _style }) {
  const classes = useStyles()

  return (
    <Box>
      <ReactSvg />
      <Typography variant="h3" color="primary">
        Staz Christodoulakis
      </Typography>
      <Typography variant="body1" color="primary">
        Software Engineer · Web/App
      </Typography>
      <hr className="solid" />
      <Typography variant="body1" className={classes.root} color="primary">
        <PhoneIcon /> 650 513 9578
        <EmailIcon /> staz.christo@gmail.com
        <Link href="https://github.com/stazcp" color="inherit">
          <GitHubIcon /> github.com/stazcp
        </Link>
        <Link href="https://www.linkedin.com/in/staz-christo" color="inherit">
          <LinkedInIcon /> linkedin.com/in/staz-christo
        </Link>
      </Typography>
    </Box>
  )
}
