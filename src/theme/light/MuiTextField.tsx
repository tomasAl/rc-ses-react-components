import { Components } from '@mui/material'

import themePalette from './themePalette'

const MuiTextField: Components['MuiTextField'] = {
  defaultProps: {
    variant: 'outlined',
  },
  styleOverrides: {
    root: {
      '& .MuiOutlinedInput-root': {
        borderRadius: '0.1875rem',
        '& .MuiInputBase-input': {
          padding: '0.625rem',
          fontSize: '1.125rem',
          color: themePalette.palette.grey['900'],
          '&::placeholder': {
            color: themePalette.palette.grey['300']
          }
        },
        '& .MuiOutlinedInput-notchedOutline': {
          borderColor: themePalette.palette.grey['300'],
        },
        '&.Mui-focused': {
          '.MuiOutlinedInput-notchedOutline': {
            borderWidth: '0.125rem',
            borderColor: themePalette.palette.grey['900'],
            boxShadow: `0px 0px 0px 3px ${themePalette.palette.grey['200']}`,
          },
        },
        '&.Mui-disabled': {
          backgroundColor: themePalette.palette.grey['50'],
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: themePalette.palette.grey['100'],
          },
        },
        '&:hover:not(.Mui-disabled)': {
          '& .MuiOutlinedInput-notchedOutline': {
            // backgroundColor: 'red',
            borderColor: themePalette.palette.grey['600'],
          },
        },
      },
    },
  },
}

export default MuiTextField
