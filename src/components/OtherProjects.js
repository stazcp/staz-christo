import { Box, Typography } from '@material-ui/core'
import OutputHandler from './OutputHandler'

export default function OtherProjects() {
  const content = [
    {
      title: 'Venus Project, Resourse Based Economy (RBE)',
      links: [{ title: 'Venus Project', url: 'www.thevenusproject.com/' }],
      descriptions: [
        'Volunteer at Venus Project resource-based economy (RBE). Aiming for the wellbeing of society, the use of renewable energy, and environment integration. The project is taking place in Florida with hundreds of volunteers all over the world including scientists and architects willing to take part and engage in such an establishment.',
      ],
    },
    {
      title: 'Combined Heat & Power (CHP), Capstone Microturbines',
      links: [{ title: 'Capstone', url: 'https://www.capstoneturbine.com/' }],
      descriptions: [
        'Understanding CHP installations and where they could be used. What fuel can be used and how could they be combined with other alternatives as solar and wind power.',
      ],
    },
    {
      title: 'Amazon Publishing, KDP',
      links: [{ title: 'Wordpress Website', url: 'http://alexandrabooks.info/' }],
      descriptions: [
        'Publishing alternative poetry books on Amazon',
        'Editing books in Photoshop, Acrobat, and Kindle Tools',
        'Will rebuild with React.js',
      ],
    },
  ]

  return <OutputHandler header="Other Projects" content={content} />
}
