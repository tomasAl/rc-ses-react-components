import Step from '@mui/material/Step'
import StepLabel from '@mui/material/StepLabel'
import Stepper from '@mui/material/Stepper'
import { useCallback } from 'react'

import ActiveStepIcon from './components/ActiveStepIcon'
import CompletedStepIcon from './components/CompletedStepIcon'
import PendingStepIcon from './components/PendingStepIcon'

type ServiceWizardStep = {
  label: string
  state: 'active' | 'completed' | 'pending'
}

type Props = {
  steps: ServiceWizardStep[]
}
function ServiceWizardStepper({ steps }: Props) {
  const getStepIcon = useCallback((state: ServiceWizardStep['state']) => {
    switch (state) {
      case 'active':
        return ActiveStepIcon
      case 'completed':
        return CompletedStepIcon
      default:
        return PendingStepIcon
    }
  }, [])

  return (
    <Stepper
      activeStep={steps.findIndex((step) => step.state === 'active') ?? 0}
      orientation='vertical'
    >
      {steps.map((step) => (
        <Step key={step.label}>
          <StepLabel StepIconComponent={getStepIcon(step.state)}>{step.label}</StepLabel>
        </Step>
      ))}
    </Stepper>
  )
}

export default ServiceWizardStepper
