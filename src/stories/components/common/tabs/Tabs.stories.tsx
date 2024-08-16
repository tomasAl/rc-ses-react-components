import type { Meta, StoryObj } from '@storybook/react'

import Tab from '@/components/tabs/Tab'
import Tabs from '@/components/tabs/Tabs'

const meta = {
  title: 'components/common/tabs/Tabs',
  component: Tabs,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Tabs>

export default meta
type Story = StoryObj<typeof meta>

const tabItems = (
  <>
    <Tab label='Test 1' />
    <Tab label='Test 2' />
    <Tab label='Test 3' />
  </>
)

export const TabsExample: Story = {
  args: {
    children: tabItems,
  },
}
