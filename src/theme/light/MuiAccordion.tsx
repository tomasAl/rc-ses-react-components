import { Components } from '@mui/material'

import palette from '../palette'

const MuiAccordion: Components['MuiAccordion'] = {
  defaultProps: {
    elevation: 0,
    disableGutters: true,
    sx: {
      margin: {
        xs: '.5rem 0',
        md: '1rem 0',
      },
    },
  },
  styleOverrides: {
    root: {
      borderColor: palette.grey['400'],
      borderRadius: '.375rem',
      borderStyle: 'solid',
      borderWidth: '1px',
      padding: 0,

      ':before': {
        content: 'unset',
      },

      '.MuiAccordionSummary-root': {
        backgroundColor: palette.grey['50'],
        borderRadius: '.375rem',
        paddingLeft: '1.5rem',
      },

      '.MuiAccordionSummary-content': {
        fontSize: '1.25rem',
        fontWeight: 500,
        lineHeight: '1.5rem',
        margin: '1rem 0 1rem 0',
        padding: '.5rem 0',
      },

      '.MuiAccordionDetails-root': {
        padding: '3rem 2rem 4rem 2rem',
      },

      '&.Mui-expanded': {
        '.MuiAccordionSummary-content': {
          margin: '1rem 0',
        },

        '.MuiAccordionSummary-root': {
          borderBottomLeftRadius: 0,
          borderBottomRightRadius: 0,
        },
      },
    },
  },
}

export default MuiAccordion
