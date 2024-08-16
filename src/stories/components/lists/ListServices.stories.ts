import type { Meta, StoryObj } from '@storybook/react'

import ListServices from '@/components/lists/ListService'
import { ListServicesItemType } from '@/types/lists/ListServicesItemType'

const meta = {
  title: 'components/lists/ListServices',
  component: ListServices,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ListServices>

export default meta
type Story = StoryObj<typeof meta>

const services: ListServicesItemType[] = [
  {
    title: 'Turtas',
    limit: 2,
    items: ['Statybos', 'Nuosavybė', 'Nuoma / panauda', 'Persikraustymas'],
  },
  {
    title: 'Šeima ir vaikai',
    items: ['Santuoka', 'Bendras turtas', 'Skyrybos', 'Vaikai ir tėvai'],
  },
]

export const Main: Story = {
  args: {
    items: services,
  },
}

export const MainCompact: Story = {
  args: {
    items: services,
    compact: true,
  },
}
