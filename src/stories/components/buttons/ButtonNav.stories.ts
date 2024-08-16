import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'

import ButtonNav from '@/components/Button/ButtonNav'

const meta = {
  title: 'components/common/buttons/ButtonNav',
  component: ButtonNav,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { onClick: fn() },
} satisfies Meta<typeof ButtonNav>

export default meta
type Story = StoryObj<typeof meta>

export const Contained: Story = {
  args: {
    variant: 'contained',
    children: 'Paslaugos',
    color: 'grey',
  },
}

export const Outlined: Story = {
  args: {
    variant: 'outlined',
    children: 'Paslaugos',
  },
}

export const Text: Story = {
  args: {
    variant: 'text',
    children: 'Paslaugos',
  },
}
