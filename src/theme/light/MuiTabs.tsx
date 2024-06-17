import { Components } from '@mui/material'

declare module '@mui/material/Tabs' {
  interface TabsPropsVariantOverrides {
    grey: true
  }
}

const MuiTabs: Components['MuiTabs'] = {
  defaultProps: {},
  styleOverrides: {},
}

export default MuiTabs
