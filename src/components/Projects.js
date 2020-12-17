import { Box, Typography } from '@material-ui/core'
import OutputHandler from './OutputHandler'
import cineLogo from '../logos/cineLogo.svg'
import GetIcon from './GetIcon'

export default function Projects() {
  const content = [
    {
      title: 'Netflix/IMDB clone',
      link: 'https://cine-plus.vercel.app',
      descriptions: [
        'The Web/App was built using React.js with custom components and the use of libraries like Material-UI',
        'User Authentication, as well as database interaction to store user data, are handled with Firebase.',
      ],
      logo: <GetIcon icon={cineLogo} />,
    },
    {
      title: 'College Thesis, Secure Chat Application',
      location: 'University of Hertfordshire, Greece, UK Affiliate (2014)',
      descriptions: [
        'Java-based application with cipher public, private key encryption. The application will start a private server and a local client, each client can talk to one server. Over a network, the server has to be running for two people to communicate.',
      ],
    },
    {
      title: 'AI Simulation. Braitenberg Machines/Robots, Ant Colony Optimization Algorithm',
      location: 'University of Hertfordshire, Greece, UK Affiliate (2013)',
      descriptions: [
        'NetLogo simulation with vehicles (agents) that accelarate towards light and avoid obstacles, followed up with the ACO algorithm implementation for finding shortest paths.',
      ],
    },
  ]

  return <OutputHandler header="Projects" content={content} />
}
