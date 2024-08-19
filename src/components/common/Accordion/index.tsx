import { Accordion, AccordionSummary } from '@mui/material'
import { SyntheticEvent } from 'react'

import useAccordionController from './hooks/useAccordionController'

type Props = React.ComponentProps<typeof Accordion> & {
  id: string
  controller: ReturnType<typeof useAccordionController>
}

function RcSesAccordion(props: Props) {
  const { children, controller, id, onChange, ...accordionProps } = props
  const { toggleAccordion, state } = controller

  const { defaultExpanded, disabled, expanded, title } =
    id in state
      ? state[id]
      : { defaultExpanded: undefined, disabled: false, expanded: false, title: '' }

  const handleOnChange = (event: SyntheticEvent<Element, Event>, isExpanded: boolean) => {
    toggleAccordion(id, isExpanded)
    if (onChange) onChange(event, isExpanded)
  }

  return (
    <Accordion
      defaultExpanded={defaultExpanded}
      disabled={disabled}
      expanded={expanded}
      {...accordionProps}
      onChange={handleOnChange}
    >
      <AccordionSummary aria-controls={`${id}-content`} id={`${id}-header`}>
        {title}
      </AccordionSummary>
      {children}
    </Accordion>
  )
}

export default RcSesAccordion
