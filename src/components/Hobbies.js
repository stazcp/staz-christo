import { Box, Typography } from '@material-ui/core'
import OutputHandler from './OutputHandler'

export default function Education() {
  const content = [
    {
      title: 'MMA',
      location: 'Greece, California',
      descriptions: [
        'I have been practicing Martial Arts since 11 years old.',
        'Some of them are BJJ, Tae Kwon Do, Boxing, and Shaolin Kung Fu',
        'I am actively competing in NAGA and UFC gym',
      ],
    },
    {
      title: 'Philosophy & Science',
      descriptions: [
        'I have always had curiosity about understanding philosophical concepts',
        'I enjoy to research scientific enigmas that have not been solved yet, who knows maybe I find something useful. 🤷',
      ],
    },
  ]

  return <OutputHandler header="Hobbies" content={content} />
}
