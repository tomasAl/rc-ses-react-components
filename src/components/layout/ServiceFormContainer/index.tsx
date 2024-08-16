import { Box, Container, Grid } from '@mui/material'

import ServiceWizardStepper from '../ServiceWizardStepper'

type Props = {
  children: React.ReactNode
}
function ServiceFormContainer({ children }: Props) {
  return (
    <Container>
      <Grid container columns={2} sx={{ flexWrap: 'nowrap' }}>
        <Grid item sx={{ display: { xs: 'none', md: 'block' }, flexGrow: 1 }}>
          <ServiceWizardStepper
            steps={[
              { state: 'completed', label: 'Bazinė informacija' },
              { state: 'active', label: 'Paslaugos užsakymas' },
              { state: 'pending', label: 'Išdavimas' },
              { state: 'pending', label: 'Reikalingos papildomos paslaugos' },
              { state: 'pending', label: 'Terminai ir sąlygos' },
            ]}
          />
        </Grid>

        <Grid item sx={{ width: { xs: '100%', md: '840px' } }}>
          <Box>accordion controls</Box>
          {children}
        </Grid>
      </Grid>
    </Container>
  )
}

export default ServiceFormContainer
