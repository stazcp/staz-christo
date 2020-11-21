import { Box, Typography } from '@material-ui/core'
import OutputHandler from './OutputHandler'

export default function Experience() {
  const content = [
    {
      title: 'Web Consultant, Co-Owner',
      location: 'Since 2018',
      descriptions: [
        'Website Development in PHP, Javascript, SQL, and WordPress. Hosting and selling websites.',
      ],
    },
    {
      title: 'Uniscrap PBC, Tech Consultant/Business Development',
      location: 'Since 2016',
      links: [{ title: '', url: 'https://www.uniscrap.co/' }],
      descriptions: [
        'A Public Benefit Corporation (PBC) whose main purpose is the improvement of the general quality of life among our society with the use of Technology, and Alternative and Sustainable Energy Solutions. Being able to work closely with the CEOs and founders we have achieved and continue to pursue partnerships with companies and people that share common goals with us.',
        'My position requires to understand different technologies and consult/assist the CEO in making key decisions',
        'Areas of expertise: Web Development, Renewable Energy Technologies, Zero Waste and Efficiency',
      ],
    },
    {
      title: 'Amway',
      location: 'USA - 2017',
      descriptions: ['Network Marketing Business.'],
    },
    {
      title: 'Tesla',
      location: 'USA, CA - 2016 / 2017',
      descriptions: [
        'Energy Specialist, Sales & Marketing.',
        'Specialization in Solar Energy and panels.',
      ],
    },
    {
      title: 'Military, Special Forces - Paratrooper',
      location: 'Greece - 2014 / 2015',
      descriptions: [
        'Military and sub-contractor collaboration on classified projects, radio communications expertise, and business management skills acquired through Paratrooper service in the Greek Special Forces.',
        'First of class Award on Radio Communications',
      ],
    },
    {
      title: 'Athenian - Macedonian News Agency, Internship',
      location: 'Greece, Athens - 2011',
      links: [{ title: '', url: 'https://www.amna.gr/en' }],
      descriptions: [
        'Computer and Network trainee / assistant',
        'Responsible for maintenance of computers, installation of software & hardware',
        'Learning about how servers work inside a large web-based company',
      ],
    },
  ]

  return <OutputHandler header="Experience" content={content} />
}
