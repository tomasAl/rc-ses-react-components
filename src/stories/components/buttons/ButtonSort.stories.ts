import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'

import ButtonSort from '@/components/Button/ButtonSort'

const meta = {
  title: 'components/common/buttons/ButtonSort',
  component: ButtonSort,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { onClick: fn() },
} satisfies Meta<typeof ButtonSort>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    children: 'Naujausios viršuje',
  },
}
