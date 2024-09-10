import { Components, decomposeColor } from '@mui/material'

import palette from '../palette'

const MuiInputBase: Components['MuiInputBase'] = {
  defaultProps: {},
  styleOverrides: {
    root: {
      borderRadius: '.1875rem',

      '.MuiInputBase-input': {
        color: palette.grey['900'],
        fontSize: '.9375rem',
        height: '1.125rem',
        lineHeight: '1.125rem',
        padding: '.8125rem .75rem',

        '&::placeholder': {
          color: palette.grey['600'],
        },
      },

      '.MuiOutlinedInput-notchedOutline': {
        borderColor: palette.grey['600'],
      },

      '&.Mui-focused': {
        '.MuiOutlinedInput-notchedOutline': {
          borderColor: `${palette.grey['900']} !important`,
          boxShadow: `0px 0px 0px 3px rgba(${decomposeColor(palette.grey['900']).values}, .2)`,
        },
      },

      '&.Mui-disabled': {
        backgroundColor: `${palette.grey['100']} !important`,

        '.MuiOutlinedInput-notchedOutline': {
          borderColor: `${palette.grey['600']} !important`,
        },

        '.MuiInputBase-input': {
          color: `${palette.grey['600']} !important`,
        },
      },

      '&:hover:not(.Mui-disabled)': {
        '.MuiOutlinedInput-notchedOutline': {
          borderColor: palette.grey['900'],
        },
      },
    },
    adornedStart: {
      paddingLeft: '.625rem !important',

      '.MuiInputBase-input': {
        paddingLeft: 0,
      },
    },
    adornedEnd: {
      paddingRight: '.625rem !important',

      '.MuiInputBase-input': {
        paddingRight: 0,
      },
    },
  },
}

export default MuiInputBase
