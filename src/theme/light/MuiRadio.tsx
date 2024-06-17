import { Components } from '@mui/material'

declare module '@mui/material' {
  interface RadioPropsColorOverrides {
    grey: true
  }
}

const MuiRadio: Components['MuiRadio'] = {
  defaultProps: {},
  styleOverrides: {},
}

export default MuiRadio
