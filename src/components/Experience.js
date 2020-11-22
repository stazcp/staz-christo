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
      title: 'Web Consultant, Co-Owner',
      location: 'Remote (2018 - present)',
      descriptions: [
        'Website Development in PHP, Javascript, SQL, and WordPress. Hosting and selling websites.',
      ],
      logo: <GetIcon icon={ecorp} width={52} />,
    },
    {
      title: 'Uniscrap PBC, Tech Consultant/Business Development',
      location: 'Remote (2016 - present)',
      link: 'https://www.uniscrap.co/',
      descriptions: [
        'A Public Benefit Corporation (PBC) whose main purpose is the improvement of the general quality of life among our society with the use of Technology, and Alternative and Sustainable Energy Solutions. Being able to work closely with the CEOs and founders we have achieved and continue to pursue partnerships with companies and people that share common goals with us.',
        'My position requires to understand different technologies and consult/assist the CEO in making key decisions',
        'Areas of expertise: Web Development, Renewable Energy Technologies, Zero Waste and Efficiency',
      ],
      logo: <GetIcon icon={uniscrapLogo} />,
    },
    {
      title: 'Tesla',
      location: 'USA, CA (2016 - 2017)',
      descriptions: [
        'Energy Specialist, Sales & Marketing.',
        'Specialization in Solar Energy and panels.',
      ],
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
