import { Box, Typography } from '@material-ui/core'
import OutputHandler from './OutputHandler'

export default function Education() {
  const content = [
    {
      title: 'Web/App Front End Development Bootcamp - 2020',
      links: [],
      description:
        'From Learning to make simple websites with basic Vanilla.js to building whole web/apps with React.js',
    },
    {
      title: 'Bachelors in Computer Science by University of Hertfordshire, UK - 2014',
      links: [],
      description: 'Programming: Java, C, Assembly, Visual Basic, Python',
    },
  ]

  return <OutputHandler header="Education" content={content} />
}
