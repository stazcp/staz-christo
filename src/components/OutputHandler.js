import {
  Box,
  Container,
  Typography,
  Link,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core'
import { useStyles } from '../styles/useStyles'
import ArrowForwardIosSharpIcon from '@material-ui/icons/ArrowForwardIosSharp'

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
    return links.map((link) => {
      return (
        <Box>
          {link.title} ( <Link href={link.url}>{link.url}</Link> )
        </Box>
      )
    })
  }

  const renderContent = () => {
    return content.map((ele) => {
      const { title, links, description } = ele
      return (
        <ListItem li>
          <ListItemIcon>
            <ArrowForwardIosSharpIcon color="primary" />
          </ListItemIcon>
          <Box>
            <br />
            <Typography variant="h6" color="primary" style={mainStyle.h6}>
              {title}
            </Typography>
            <Typography variant="body1" color="primary">
              <Box display="flex" justifyContent="flex-start" className={classes.root}>
                {renderLinks(links)}
              </Box>
            </Typography>
            <Typography variant="body1" color="primary">
              <Box display="flex" justifyContent="flex-start" className={classes.root}>
                {description}
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
