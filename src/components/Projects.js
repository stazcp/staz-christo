import { Box, Typography } from '@material-ui/core'
import OutputHandler from './OutputHandler'

export default function Projects() {
  const content = [
    {
      title: 'Netflix / Movie Database(IMDB) clone with React',
      location: 'Remote - 2020',
      links: [
        { title: 'Github', url: 'https://github.com/stazcp/cine-plus' },
        { title: 'Deployed', url: 'https://cine-plus.vercel.app/' },
      ],
      descriptions: [
        'The Web/App was built using React.js with custom components and the use of libraries like Material-UI',
      ],
    },
    ,
    {
      title: 'Web Consultant',
      location: 'Remote - 2019',
      descriptions: [
        'Website Development in PHP, Javascript, SQL, and WordPress. Hosting and selling websites.',
      ],
    },
    {
      title: 'Artificial Intelligence: Implications for Business Strategy',
      location: 'Remote - 2018',
      links: [{ title: 'MIT SLOAN', url: 'https://rebrand.ly/mit-bc142' }],
      descriptions: [
        'Creating a “strategic roadmap” to determine what path a business should take using AI and Robotics for MIT assignment.',
      ],
    },
    {
      title: 'College Thesis, Secure Chat Application',
      location: 'University of Hertfordshire, Greece, UK Affiliate - 2014',
      descriptions: [
        'Java-based application with cipher public, private key encryption. The application will start a private server and a local client, each client is able to talk to one server. Over a network, the server has to be running in order for two people to communicate.',
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
