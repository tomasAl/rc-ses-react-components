import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'

import TextField from '@/components/form/inputs/TextField'

const meta = {
  title: 'components/common/inputs/TextField',
  component: TextField,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { onClick: fn() },
} satisfies Meta<typeof TextField>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    placeholder: 'Tekstas',
    label: 'Paslaugų kategorijos',
    variant: 'outlined',
    description: 'Paslaugų kategorijos informacinis komentaras',
  },
}
