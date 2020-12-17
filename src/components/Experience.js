import { Box, Typography } from '@material-ui/core'
import OutputHandler from './OutputHandler'
import GetIcon from './GetIcon'
import teslaLogo from '../logos/teslaLogo.svg'
import uniscrapLogo from '../logos/uniscrapLogo.svg'
import stratos from '../logos/stratos.svg'
import ecorp from '../logos/ecorp.svg'

export default function Experience() {
  const content = [
    {
      title: 'Ecorp, Web Consultant/Software Engineer/Co-Owner',
      location: 'Remote (2018 - present)',
      descriptions: [
        'Website Development with WordPress, Javascript, CSS, and React.js. Hosting and selling websites.',
      ],
      logo: <GetIcon icon={ecorp} width={52} />,
    },
    {
      title: 'Uniscrap PBC, Tech Consultant/Software Engineer/Business Development',
      location: 'Remote (2016 - present)',
      link: 'https://www.uniscrap.co/',
      descriptions: [
        'Environmental Public Benefit Corporation The Turn-key Environmental solution is characterized by High Innovation with American Technologies and creates Social and Environmental Impact',
        'My position requires understanding different technologies and consult/assist the CEO in making key decisions',
        'Areas of expertise: Web Development, Renewable Energy Technologies, Zero Waste, and Efficiency',
        'Created an MIT project on Business Implications if the company was to use Artificial Intelligence.',
      ],
      logo: <GetIcon icon={uniscrapLogo} />,
    },
    {
      title: 'Tesla, Energy Specialist',
      location: 'USA, CA (2016 - 2017)',
      descriptions: ['Sales & Marketing.', 'Specialization in Solar Energy and panels.'],
      logo: <GetIcon icon={teslaLogo} />,
    },
    {
      title: 'Military, Special Forces - Paratrooper',
      location: 'Greece (2014 - 2015)',
      descriptions: [
        'Military and sub-contractor collaboration on classified projects, radio communications expertise, and business management skills acquired through Paratrooper service in the Greek Special Forces.',
        'First of class Award on Radio Communications',
      ],
      logo: <GetIcon icon={stratos} />,
    },
  ]

  return <OutputHandler header="Experience" content={content} />
}
