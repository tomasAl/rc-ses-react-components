import { createTheme } from '@mui/material'
import type {} from '@mui/x-date-pickers/themeAugmentation'

import { ltLT } from '@/i18n/@mui/x-date-pickers/ltLT'
import MuiAccordion from '@/theme/light/MuiAccordion'
import MuiAccordionDetails from '@/theme/light/MuiAccordionDetails'
import MuiAccordionSummary from '@/theme/light/MuiAccordionSummary'
import MuiAlert from '@/theme/light/MuiAlert'
import MuiAutocomplete from '@/theme/light/MuiAutocomplete'
import MuiBreadcrumbs from '@/theme/light/MuiBreadcrumbs'
import MuiButton from '@/theme/light/MuiButton'
import MuiButtonBase from '@/theme/light/MuiButtonBase'
import MuiCard from '@/theme/light/MuiCard'
import MuiCardContent from '@/theme/light/MuiCardContent'
import MuiCardHeader from '@/theme/light/MuiCardHeader'
import MuiCheckbox from '@/theme/light/MuiCheckbox'
import MuiChip from '@/theme/light/MuiChip'
import MuiDialog from '@/theme/light/MuiDialog'
import MuiDivider from '@/theme/light/MuiDivider'
import MuiFormControl from '@/theme/light/MuiFormControl'
import MuiFormControlLabel from '@/theme/light/MuiFormControlLabel'
import MuiFormGroup from '@/theme/light/MuiFormGroup'
import MuiFormHelperText from '@/theme/light/MuiFormHelperText'
import MuiFormLabel from '@/theme/light/MuiFormLabel'
import MuiInputBase from '@/theme/light/MuiInputBase'
import MuiPickersLayout from '@/theme/light/MuiPickersLayout'
import MuiRadio from '@/theme/light/MuiRadio'
import MuiSelect from '@/theme/light/MuiSelect'
import MuiStepper from '@/theme/light/MuiStepper'
import MuiTable from '@/theme/light/MuiTable'
import MuiTableCell from '@/theme/light/MuiTableCell'
import MuiTextField from '@/theme/light/MuiTextField'
import MuiTypography from '@/theme/light/MuiTypography'
import themePalette from '@/theme/light/themePalette'

const theme = createTheme(themePalette, ltLT, {
  components: {
    MuiAccordion,
    MuiAccordionDetails,
    MuiAccordionSummary,
    MuiAlert,
    MuiAutocomplete,
    MuiBreadcrumbs,
    MuiButton,
    MuiButtonBase,
    MuiCard,
    MuiCardContent,
    MuiCardHeader,
    MuiCheckbox,
    MuiChip,
    MuiDialog,
    MuiDivider,
    MuiFormControl,
    MuiFormControlLabel,
    MuiFormGroup,
    MuiFormHelperText,
    MuiFormLabel,
    MuiInputBase,
    MuiPickersLayout,
    MuiRadio,
    MuiSelect,
    MuiStepper,
    MuiTable,
    MuiTableCell,
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
