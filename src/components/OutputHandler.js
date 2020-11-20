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

  const renderLinks = (links) => {
    return links.map((link, i) => {
      return (
        <Box key={i}>
          {link.title} ({' '}
          <Link href={link.url} color="secondary">
            {link.url}
          </Link>{' '}
          )
        </Box>
      )
    })
  }

  const renderDescriptions = (descriptions) => {
    return descriptions.map((descr, i) => {
      return <li key={i}> {descr}</li>
    })
  }

  const renderContent = () => {
    return content.map((ele, i) => {
      const { title, links, descriptions, location } = ele
      return (
        <ListItem li="true" key={i}>
          <Box>
            <Typography variant="h6" color="primary" style={mainStyle.h6} component="div">
              {title}
            </Typography>
            {location && (
              <Typography color="secondary" variant="body1" component="div">
                <SvgIcon fontSize="inherit">
                  <LocationOnIcon />
                </SvgIcon>{' '}
                {location}
              </Typography>
            )}
            <Typography variant="body1" color="secondary" component="div">
              <Box display="flex" justifyContent="flex-start" className={classes.root}>
                {links && renderLinks(links)}
              </Box>
            </Typography>
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
