import { createTheme } from '@mui/material'

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
    MuiBreadcrumbs,
    MuiButton,
    MuiChip,
    MuiTextField,
    MuiFormLabel,
    MuiRadio,
    MuiTypography,
    MuiSelect,
    MuiCard,
    MuiCardContent,
    MuiCardHeader,
    MuiOutlinedInput,
  },
})

export default theme
