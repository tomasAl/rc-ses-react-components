import type { Meta, StoryObj } from '@storybook/react'

import Checkbox from '@/components/form/input/Checkbox'

const meta = {
  title: 'components/common/inputs/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Checkbox>

export default meta
type Story = StoryObj<typeof meta>

export const Off: Story = {}

export const On: Story = {
  args: {
    checked: true,
  },
}

export const OffDisabled: Story = {
  args: {
    disabled: true,
  },
}

export const OnDisabled: Story = {
  args: {
    checked: true,
    disabled: true,
  },
}

// Primary

export const PrimaryOff: Story = {
  args: {
    color: 'primary',
  },
}

export const PrimaryOn: Story = {
  args: {
    checked: true,
    color: 'primary',
  },
}

export const PrimaryOffDisabled: Story = {
  args: {
    disabled: true,
    color: 'primary',
  },
}

export const PrimaryOnDisabled: Story = {
  args: {
    checked: true,
    disabled: true,
    color: 'primary',
  },
}

// Secondary

export const SecondaryOff: Story = {
  args: {
    color: 'secondary',
  },
}

export const SecondaryOn: Story = {
  args: {
    checked: true,
    color: 'secondary',
  },
}

export const SecondaryOffDisabled: Story = {
  args: {
    disabled: true,
    color: 'secondary',
  },
}

export const SecondaryOnDisabled: Story = {
  args: {
    checked: true,
    disabled: true,
    color: 'secondary',
  },
}
