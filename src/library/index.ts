import type {} from '@mui/system'
import type {} from '@mui/x-date-pickers/themeAugmentation'

import RcSesAlert from '@/components/common/Alert'
import RcSesButton from '@/components/common/Button'
import RcSesTheme from '@/theme/light'
import RcSesPalette from '@/theme/palette'

declare module '@mui/x-date-pickers/models' {
  interface PickerValidDateLookup {
    'date-fns': Date
  }
}

export { RcSesAlert, RcSesButton, RcSesPalette, RcSesTheme }
