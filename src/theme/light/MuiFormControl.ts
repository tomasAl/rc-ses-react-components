import { Components, decomposeColor } from '@mui/material'

import palette from '../palette'

const MuiFormControl: Components['MuiFormControl'] = {
  defaultProps: {},
  styleOverrides: {
    root: {
      '.MuiFormControlLabel-root': {
        '.MuiCheckbox-root': {
          '& + .MuiTypography-root': {
            fontSize: '.9375rem',
            lineHeight: '1.125rem',
            marginLeft: '.4375rem',
          },
        },

        '&.Mui-error': {
          '.MuiCheckbox-root': {
            '.checkbox-stroke': {
              stroke: palette.error['600'],
            },

            '&:hover': {
              svg: {
                boxShadow: `0px 0px 0px 4px rgba(${decomposeColor(palette.error['500']).values}, .2)`,
              },
            },
          },
        },
      },
    },
  },
}

export default MuiFormControl
