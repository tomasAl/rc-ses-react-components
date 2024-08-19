import { Components } from '@mui/material'

import CaretDownIcon from '@/assets/icons/CaretDownIcon'

const MuiAccordionSummary: Components['MuiAccordionSummary'] = {
  defaultProps: {
    expandIcon: <CaretDownIcon />,
  },
  styleOverrides: {},
}

export default MuiAccordionSummary
