import type { Meta, StoryObj } from '@storybook/react'

import CardWithAction from '@/components/cards/CardWithAction'

const meta = {
  title: 'components/cards/CardWithAction',
  component: CardWithAction,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof CardWithAction>

export default meta
type Story = StoryObj<typeof meta>

export const Savitarna: Story = {
  args: {
    actionLabel: 'Prisijungti',
    description:
      'Prisijunkite prie savitarnos portalo ir naudokites Registrų centro paslaugomis',
    title: 'Savitarna',
  },
}
