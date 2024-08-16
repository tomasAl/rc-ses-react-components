import { composeStories } from '@storybook/react'
import { within } from '@storybook/test'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

import * as stories from './CardQuickLinks.stories'

// Use Storybook default export to get the stories
const { Main } = composeStories(stories)

describe('CardQuickLinks Component', () => {
  it('renders correctly with default args from Storybook', () => {
    render(Main())

    if (!Main.args.items) {
      return
    }

    // Check that there are equal amount of items rendered as there are in the args
    const renderedItems = screen.getAllByRole('button')
    expect(renderedItems).toHaveLength(Main.args.items.length)

    // Check for each ListItem if it renders correctly: has desired icon, has title
    Main.args.items.forEach((item, index) => {
      const listItem = renderedItems[index]
      expect(listItem).toHaveTextContent(item.title)

      // Check for named icon
      const icon = within(listItem).queryByTestId(`${item.name}_icon`)
      expect(icon).toBeInTheDocument()
    })
  })
})
