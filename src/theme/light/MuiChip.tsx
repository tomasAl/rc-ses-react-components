import { Components } from '@mui/material'

/* declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides extends MuiButtonPropsColorOverrides {
    grey: true
  }
} */

const MuiChip: Components['MuiChip'] = {
  defaultProps: {},
  styleOverrides: {
    root: {
      fontSize: '0.875rem',
      fontWeight: 600,
    },
  },
}

export default MuiChip
