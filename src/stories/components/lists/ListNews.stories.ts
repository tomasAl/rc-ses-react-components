import type { Meta, StoryObj } from '@storybook/react'

import ListNews from '@/components/lists/ListNews'

const meta = {
  title: 'components/lists/ListNews',
  component: ListNews,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ListNews>

export default meta
type Story = StoryObj<typeof meta>

const news = [
  {
    title: 'Registru centras: Pavasarinė NT sandorių rinka dar vejasi praeitus metus.',
    date: 'Balandžio 27, 2004',
    imgUrl: 'https://www.lrt.lt/img/2023/01/16/1429640-577957-756x425.jpg',
  },
  {
    title:
      'Registru centras pataria: kaip išregistruoti neveikiančią įmonę ir kodėl svarbu laiku atnaujinti duomenis',
    date: '2024-04-24',
    imgUrl:
      'https://images.squarespace-cdn.com/content/v1/5c40e5604611a0abbac80cf4/1628605955419-1JTL1NU68VWBW691Q37V/Refresh.png?format=300w',
  },
]

export const Main: Story = {
  args: {
    items: news,
  },
}
