import type { Meta, StoryObj } from '@storybook/react'

import Radio from '@/components/form/input/Radio'

const meta = {
  title: 'components/common/inputs/Radio',
  component: Radio,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Radio>

export default meta
type Story = StoryObj<typeof meta>

export const Off: Story = {
  args: {
    readOnly: true,
  },
}

export const On: Story = {
  args: {
    readOnly: true,
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
    readOnly: true,
    color: 'primary',
  },
}

export const PrimaryOn: Story = {
  args: {
    readOnly: true,
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
    readOnly: true,
    color: 'secondary',
  },
}

export const SecondaryOn: Story = {
  args: {
    readOnly: true,
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
