import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'


import ButtonMenu from '@/components/Button/ButtonMenu'
import PenNibIcon from "@/assets/icons/regular/PenNibIcon";

const meta = {
  title: 'components/common/buttons/ButtonMenu',
  component: ButtonMenu,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { onClick: fn() },
} satisfies Meta<typeof ButtonMenu>

export default meta
type Story = StoryObj<typeof meta>

export const Contained: Story = {
  args: {
    variant: 'contained',
    Icon: PenNibIcon,
    label: 'Profilis',
    color: 'grey',
  },
}

export const Outlined: Story = {
  args: {
    variant: 'outlined',
    Icon: PenNibIcon,
    label: 'Profilis',
  },
}

export const Text: Story = {
  args: {
    variant: 'text',
    Icon: PenNibIcon,
    label: 'Profilis',
  },
}
