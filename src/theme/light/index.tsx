import { createTheme } from '@mui/material'

import MuiAccordion from '@/theme/light/MuiAccordion'
import MuiAccordionSummary from '@/theme/light/MuiAccordionSummary'
import MuiAlert from '@/theme/light/MuiAlert'
import MuiBreadcrumbs from '@/theme/light/MuiBreadcrumbs'
import MuiButton from '@/theme/light/MuiButton'
import MuiCard from '@/theme/light/MuiCard'
import MuiCardContent from '@/theme/light/MuiCardContent'
import MuiCardHeader from '@/theme/light/MuiCardHeader'
import MuiChip from '@/theme/light/MuiChip'
import MuiFormLabel from '@/theme/light/MuiFormLabel'
import MuiOutlinedInput from '@/theme/light/MuiOutlinedInput'
import MuiRadio from '@/theme/light/MuiRadio'
import MuiSelect from '@/theme/light/MuiSelect'
import MuiStepper from '@/theme/light/MuiStepper'
import MuiTextField from '@/theme/light/MuiTextField'
import MuiTypography from '@/theme/light/MuiTypography'
import themePalette from '@/theme/light/themePalette'

const theme = createTheme(themePalette, {
  typography: {
    body: {
      fontSize: '1rem',
    },
  },
  components: {
    MuiAccordion,
    MuiAccordionSummary,
    MuiAlert,
    MuiBreadcrumbs,
    MuiButton,
    MuiCard,
    MuiCardContent,
    MuiCardHeader,
    MuiChip,
    MuiFormLabel,
    MuiOutlinedInput,
    MuiRadio,
    MuiSelect,
    MuiStepper,
    MuiTextField,
    MuiTypography,
  },
})

theme.typography.h1 = {
  fontSize: '1.5rem',
  lineHeight: '2rem',

  [theme.breakpoints.up('md')]: {
    fontSize: '2.25rem',
    lineHeight: '3rem',
  },
}

export default theme
