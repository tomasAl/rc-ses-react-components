import type { Meta, StoryObj } from '@storybook/react'

import Breadcrumbs from '@/components/Breadcrumbs'

const meta = {
  title: 'layouts/Breadcrumbs',
  component: Breadcrumbs,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Breadcrumbs>

export default meta
type Story = StoryObj<typeof meta>

export const Main: Story = {
  args: {
    /*    items: [
      {},
      {},
      {},
      {},
    ], */
  },
}
