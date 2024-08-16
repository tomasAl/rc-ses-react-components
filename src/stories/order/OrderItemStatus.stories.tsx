import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'

import ButtonNav from '@/components/Button/ButtonNav'
import OrderItemStatus from '@/components/order/OrderItemStatus'

const meta = {
  title: 'order/OrderItemStatus',
  component: OrderItemStatus,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof OrderItemStatus>

export default meta
type Story = StoryObj<typeof meta>

export const Completed: Story = {
  args: {
    type: 'completed',
  },
}

export const InProgress: Story = {
  args: {
    type: 'in_progress',
  },
}

export const ActionNeeded: Story = {
  args: {
    type: 'action_needed',
  },
}

export const Cancelled: Story = {
  args: {
    type: 'cancelled',
  },
}
