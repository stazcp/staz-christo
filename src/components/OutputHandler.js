import {
  Box,
  Container,
  Typography,
  Link,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  SvgIcon,
} from '@material-ui/core'
import { useStyles } from '../styles/customStyles'
import LocationOnIcon from '@material-ui/icons/LocationOn'
import LinkIcon from '@material-ui/icons/Link'
import useMediaQuery from '@material-ui/core/useMediaQuery'

const mainStyle = {
  h5: {
    textAlign: 'left',
    fontWeight: '700',
  },
  h6: {
    textAlign: 'left',
  },
}

export default function OutputHandler({ header, content }) {
  const classes = useStyles()
  const mobile = useMediaQuery('(max-width:520px)')

  const renderDescriptions = (descriptions) => {
    return descriptions.map((descr, i) => {
      return <li key={i}> {descr}</li>
    })
  }

  const renderContent = () => {
    return content.map((ele, i) => {
      const { title, link, descriptions, location, logo } = ele
      return (
        <ListItem li="true" key={i}>
          <Box>
            <Box display="flex" alignItems="center">
              {logo && <Link href={link}>{logo}</Link>}
              <Typography variant="h5" color="primary" style={mainStyle.h6} component="div">
                {title}
              </Typography>
            </Box>
            <Box
              display="flex"
              justifyContent="flex-start"
              flexDirection={mobile ? 'column' : 'row'}
              className={classes.root}
            >
              {location && (
                <Box display="flex" justifyContent="flex-start">
                  <Typography color="secondary" variant="body1" component="div">
                    <SvgIcon fontSize="inherit">
                      <LocationOnIcon />
                    </SvgIcon>
                    {location}
                  </Typography>
                </Box>
              )}
              {link && (
                <Box display="flex" justifyContent="flex-start">
                  <Typography variant="body1" color="secondary" component="div">
                    <Link href={link} color="secondary">
                      <SvgIcon fontSize="inherit" style={{ paddingTop: '5px' }}>
                        <LinkIcon />
                      </SvgIcon>
                      {link.slice(8, link.length)}
                    </Link>
                  </Typography>
                </Box>
              )}
            </Box>
            <Typography variant="body1" color="primary" component="div">
              <Box display="flex" justifyContent="flex-start" className={classes.root}>
                <ul>{renderDescriptions(descriptions)}</ul>
              </Box>
            </Typography>
          </Box>
        </ListItem>
      )
    })
  }

  return (
    <Container maxWidth="md">
      <br />
      <Typography variant="h5" color="primary" style={mainStyle.h5}>
        {header}
      </Typography>
      <hr style={mainStyle.hr} />
      <List component="ul">{renderContent()}</List>
    </Container>
  )
}
