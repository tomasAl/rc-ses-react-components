import type { Meta, StoryObj } from '@storybook/react'

import CalendarBlankIcon from '@/assets/icons/regular/CalendarBlankIcon'
import DatabaseIcon from '@/assets/icons/regular/DatabaseIcon'
import MagnifyingGlassIcon from '@/assets/icons/regular/MagnifyingGlassIcon'
import QuestionIcon from '@/assets/icons/regular/QuestionIcon'
import CardQuickLinks from '@/components/cards/CardQuickLinks'

const meta = {
  title: 'components/cards/CardWithAction',
  component: CardQuickLinks,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof CardQuickLinks>

export default meta
type Story = StoryObj<typeof meta>

export const Main: Story = {
  args: {
    items: [
      {
        name: 'register',
        title: 'Registruotis vizitui',
        Icon: CalendarBlankIcon,
      },
      {
        name: 'check_order',
        title: 'Tikrinti užsakymo būseną',
        Icon: MagnifyingGlassIcon,
      },
      {
        name: 'stats',
        title: 'Atviri duomenys ir statistika',
        Icon: DatabaseIcon,
      },
      {
        name: 'help',
        title: 'Pagalba',
        Icon: QuestionIcon,
      },
    ],
  },
}
