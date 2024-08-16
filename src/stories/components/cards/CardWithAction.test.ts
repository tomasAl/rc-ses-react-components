import { composeStories } from '@storybook/react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

import * as stories from './CardWithAction.stories'

const { Savitarna } = composeStories(stories)
describe('CardWithAction Component', () => {
  it('renders correctly with default args from Storybook', () => {
    render(Savitarna())

    expect(screen.getByText(Savitarna.args.title as string)).toBeInTheDocument()
    expect(screen.getByText(Savitarna.args.description as string)).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: Savitarna.args.actionLabel }),
    ).toBeInTheDocument()
  })
})
