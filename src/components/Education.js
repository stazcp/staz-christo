import React, { useState, useEffect, useContext } from 'react'
import { Box, Typography } from '@material-ui/core'
import OutputHandler from './OutputHandler'
import GetIcon from './GetIcon'
import uhLogoLight from '../logos/uhLogoLight.svg'
import uhLogoDark from '../logos/uhLogoDark.svg'
import aegeanOmiros from '../logos/aegeanOmiros.png'
import { ThemeContext } from './ThemeContext'

export default function Education() {
  const [logo, setLogo] = useState(uhLogoLight)
  const { myTheme } = useContext(ThemeContext)

  useEffect(() => {
    switchLogo()
  }, [myTheme])

  const switchLogo = () => (myTheme.status === 'dark' ? setLogo(uhLogoLight) : setLogo(uhLogoDark))

  const content = [
    // {
    //   title: 'Philosophy, Skyline College',
    //   location: 'USA, CA - 2019',
    //   descriptions: ['Philosophy classes at Skyline Community College'],
    // },
    {
      title: 'Bachelors in Computer Science, University of Hertfordshire',
      location: 'Greece, UK Affiliate (2011 - 2014)',
      link: 'https://www.herts.ac.uk/',
      descriptions: [
        'Programming: Java, C, Assembly, Visual Basic, Python',
        'Web Application Development: SQL, PHP, HTML, JavaScript',
        'Web Service Applications: WSDL, SOAP, RSS, RDF',
        'Database Management: Microsoft Office Access, SQL, NoSQL',
        'Artificial Intelligence: Artificial Life & Embodied Cognition, Net Logo',
        'Graphic Design: Adobe Flash',
      ],
      logo: <GetIcon icon={logo} />,
    },
    {
      title: 'Aegean Omiros College, CS & Network Engineering',
      location: 'GR Athens (2010 - 2011)',
      link: 'https://aegeancollege.gr/en/',
      descriptions: [
        'Computer Science paired with Network Engineering Technical School',
        'Programming: Pascal, C++. Graphic Design: Photoshop',
      ],
      logo: <GetIcon icon={aegeanOmiros} width={52} />,
    },
  ]

  return <OutputHandler header="Education" content={content} />
}
