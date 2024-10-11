import type {} from '@emotion/styled'
import type {} from '@mui/system'
import type {} from '@mui/x-date-pickers/themeAugmentation'

import RcSesLogo from '@/assets/Logo'
import ArrowRightIcon from '@/assets/icons/ArrowRightIcon'
import CaretDoubleLeftBoldIcon from '@/assets/icons/CaretDoubleLeftBoldIcon'
import CaretDoubleRightBoldIcon from '@/assets/icons/CaretDoubleRightBoldIcon'
import CaretDownBoldIcon from '@/assets/icons/CaretDownBoldIcon'
import CaretDownIcon from '@/assets/icons/CaretDownIcon'
import CaretLeftBoldIcon from '@/assets/icons/CaretLeftBoldIcon'
import CaretLeftIcon from '@/assets/icons/CaretLeftIcon'
import CaretRightBoldIcon from '@/assets/icons/CaretRightBoldIcon'
import RcSesAccordion from '@/components/common/Accordion'
import useAccordionController from '@/components/common/Accordion/hooks/useAccordionController'
import RcSesAlert from '@/components/common/Alert'
import RcSesBreadcrumbs from '@/components/common/Breadcrumbs'
import RcSesButton from '@/components/common/Button'
import RcSesTab from '@/components/common/Tabs/Tab'
import RcSesTabPanel from '@/components/common/Tabs/TabPanel'
import RcSesTabs from '@/components/common/Tabs/Tabs'
import RcSesTabsWrapper from '@/components/common/Tabs/TabsWrapper'
import RcSesCheckbox from '@/components/form/inputs/Checkbox'
import RcSesDatepicker from '@/components/form/inputs/Datepicker'
import RcSesFileUpload from '@/components/form/inputs/FileUpload'
import RcSesNumberStepper from '@/components/form/inputs/NumberStepper'
import RcSesRadioButtonGroup from '@/components/form/inputs/RadioButtonGroup'
import RcSesSearchableField from '@/components/form/inputs/SearchableField'
import RcSesSelect from '@/components/form/inputs/Select'
import RcSesTextField from '@/components/form/inputs/TextField'
import RcSesServiceFormActions from '@/components/layout/ServiceFormActions'
import RcSesServiceFormContainer from '@/components/layout/ServiceFormContainer'
import RcSesServiceHeader from '@/components/layout/ServiceHeader'
import RcSesServicePage from '@/components/layout/ServicePage'
import RcSesTheme from '@/theme/light'
import RcSesPalette from '@/theme/palette'

declare module '@mui/x-date-pickers/models' {
  interface PickerValidDateLookup {
    'date-fns': Date
  }
}

export { RcSesPalette, RcSesTheme }
export { RcSesAccordion, useAccordionController }
export { RcSesAlert, RcSesBreadcrumbs, RcSesButton }
export { RcSesCheckbox }
export { RcSesDatepicker }
export { RcSesFileUpload }
export { RcSesNumberStepper }
export { RcSesRadioButtonGroup }
export { RcSesSearchableField }
export { RcSesSelect }
export { RcSesTab, RcSesTabPanel, RcSesTabs, RcSesTabsWrapper }
export { RcSesTextField }

export {
  RcSesServiceFormActions,
  RcSesServiceFormContainer,
  RcSesServiceHeader,
  RcSesServicePage,
}

export { RcSesLogo }
export { ArrowRightIcon }
export {
  CaretDoubleLeftBoldIcon,
  CaretDoubleRightBoldIcon,
  CaretDownBoldIcon,
  CaretDownIcon,
  CaretLeftBoldIcon,
  CaretLeftIcon,
  CaretRightBoldIcon,
}
