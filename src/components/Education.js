import { Box, Typography } from '@material-ui/core'
import OutputHandler from './OutputHandler'

export default function Education() {
  const content = [
    {
      title: 'Web/App Front End Development Bootcamp',
      location: 'Remote - 2020',
      descriptions: [
        'From Learning to make simple websites with basic Vanilla.js to building whole web/apps with React.js',
      ],
    },
    {
      title: 'Philosophy, Skyline College',
      location: 'USA, CA - 2019',
      descriptions: ['Philosophy classes at Skyline Community College'],
    },
    {
      title: 'Bachelors in Computer Science by University of Hertfordshire',
      location: 'Greece, UK Affiliate - 2014',
      descriptions: [
        'Programming: Java, C, Assembly, Visual Basic, Python',
        'Web Application Development: SQL, PHP, HTML, JavaScript',
        'Web Service Applications: WSDL, SOAP, RSS, RDF',
        'Database Management: Microsoft Office Access, SQL, NoSQL',
        'Artificial Intelligence: Artificial Life & Embodied Cognition, Net Logo',
        'Graphic Design: Adobe Flash',
      ],
    },
    {
      title: 'Aegean Omiros College, CS & Network Engineering',
      location: 'GR Athens - 2010 / 2011',
      descriptions: [
        'Computer Science paired with Network Engineering Technical School',
        'Programming: Pascal, C++',
        'Graphic Design: Photoshop',
      ],
    },
  ]

  return <OutputHandler header="Education" content={content} />
}
