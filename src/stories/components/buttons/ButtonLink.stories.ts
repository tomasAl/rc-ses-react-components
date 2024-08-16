import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'

import ButtonLink from '@/components/Button/ButtonLink'

const meta = {
  title: 'components/common/buttons/ButtonLink',
  component: ButtonLink,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { onClick: fn() },
} satisfies Meta<typeof ButtonLink>

export default meta
type Story = StoryObj<typeof meta>

export const Forward: Story = {
  args: {
    children: 'Toliau',
  },
}

export const Backward: Story = {
  args: {
    children: 'Back',
    back: true,
  },
}
