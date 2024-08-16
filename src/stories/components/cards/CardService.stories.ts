import type { Meta, StoryObj } from '@storybook/react'

import HouseIcon from '@/assets/icons/regular/HouseIcon'
import UsersIcon from '@/assets/icons/regular/UsersIcon'
import CardService from '@/components/cards/CardService'

const meta = {
  title: 'components/cards/CardService',
  component: CardService,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof CardService>

export default meta
type Story = StoryObj<typeof meta>

export const HouseService: Story = {
  args: {
    Icon: HouseIcon,
    title: 'Turtas',
  },
}

export const FamilyService: Story = {
  args: {
    Icon: UsersIcon,
    title: 'Šeima ir vaikai',
  },
}
