import { Container, Grid } from '@mui/material'
import React from 'react'

import CollapseChevronsIcon from '@/assets/icons/CollapseChevronsIcon'
import ExpandChevronsIcon from '@/assets/icons/ExpandChevronsIcon'
import useAccordionController from '@/components/common/Accordion/hooks/useAccordionController'
import Button from '@/components/common/Button/Button'

import ServiceWizardStepper from '../ServiceWizardStepper'

type Props = {
  accordionController: ReturnType<typeof useAccordionController>
  children: React.ReactNode
}
function ServiceFormContainer({ accordionController, children }: Props) {
  const { collapseAll, expandAll, state } = accordionController

  return (
    <Container>
      <Grid
        container
        columns={2}
        sx={{ flexWrap: 'nowrap', mb: { md: 8 }, mt: { xs: 1, md: 6 } }}
      >
        <Grid item sx={{ display: { xs: 'none', md: 'block' }, flexGrow: 1 }}>
          <ServiceWizardStepper steps={state} />
        </Grid>

        <Grid item sx={{ width: { xs: '100%', md: '840px' } }}>
          <Grid
            container
            sx={{ display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end' }}
          >
            <Grid item>
              <Button
                variant='text'
                size='small'
                startIcon={<ExpandChevronsIcon />}
                onClick={expandAll}
              >
                Praskleisti visus
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant='text'
                size='small'
                startIcon={<CollapseChevronsIcon />}
                onClick={collapseAll}
              >
                Suskleisti visus
              </Button>
            </Grid>
          </Grid>
          {children}
        </Grid>
      </Grid>
    </Container>
  )
}

export default ServiceFormContainer
