import { Box, Typography } from '@material-ui/core'
import OutputHandler from './OutputHandler'

export default function Projects() {
  const content = [
    {
      title: 'Web/App, The Movie Database (clone)',
      location: '2020',
      links: [{ title: 'Visit ->', url: 'https://cine-plus.vercel.app/' }],
      descriptions: [
        'The Web/App was built using React.js with custom components and the use of libraries like Material-UI',
        'User Authentication, as well as database interaction to store user data, are handled with Firebase.',
      ],
    },
    {
      title: 'Artificial Intelligence: Implications for Business Strategy',
      location: '2018',
      links: [{ title: 'MIT SLOAN', url: 'https://rebrand.ly/mit-bc142' }],
      descriptions: [
        'Creating a “strategic roadmap” to determine what path a business should take using AI and Robotics for MIT assignment.',
      ],
    },
    {
      title: 'College Thesis, Secure Chat Application',
      location: 'University of Hertfordshire, Greece, UK Affiliate - 2014',
      descriptions: [
        'Java-based application with cipher public, private key encryption. The application will start a private server and a local client, each client can talk to one server. Over a network, the server has to be running for two people to communicate.',
      ],
    },
    {
      title: 'AI Simulation. Braitenberg Machines and Robots Under Control',
      location: 'University of Hertfordshire, Greece, UK Affiliate - 2012',
      descriptions: [
        'A Netlogo simulation based on Braitenberg’s vehicle simulation. Using the simplest vehicles with only the use of sensors and certain commands to produce a more complex and or even intellect behavior under a certain environment. In this experiment, there are simple tiny vehicles (agents) that will sense an energy source (like solar), when they sense the light they will move towards it and increase speed according to how bright it is or slow down as it gets darker.',
      ],
    },
    {
      title: 'Artificial Intelligence Simulation, Ant Colony Optimization (ACO)',
      location: 'University of Hertfordshire, Greece, UK Affiliate - 2013',
      descriptions: [
        'The Ant Colony Optimization (ACO) algorithm computes “ideal” paths through a certain environment. It can be used for solving computational problems to find the best paths through graphs. In this experiment, the agents “ants” will find ideal paths through their colony, food, and water. The implementation was made on C# and Java.',
      ],
    },
  ]

  return <OutputHandler header="Projects" content={content} />
}
