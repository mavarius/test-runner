import { generateTest } from './util'

const testSetData = [
  { run: generateTest(), description: 'This sentence is true' },
  { run: generateTest(), description: 'The preceding sentence is false' },
  { run: generateTest(), description: 'Achilles never catches the tortoise' },
  { run: generateTest(), description: 'A penny saved is a penny not spent' },
  { run: generateTest(), description: 'Woodchucks chuck wood' },
  { run: generateTest(), description: 'Believe it' },
  { run: generateTest(), description: 'I\'m Batman' },
  { run: generateTest(), description: 'A stitch in time is a paradox' }
]

export default testSetData