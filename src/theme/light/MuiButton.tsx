import { Components } from '@mui/material'

import { error, grey, primary, secondary, warning } from '../palette'

declare module '@mui/material' {
  interface ButtonPropsColorOverrides {
    grey: any
  }
}

const MuiButton: Components['MuiButton'] = {
  defaultProps: {
    disableElevation: true,
    disableRipple: true,
    variant: 'contained',
  },
  styleOverrides: {
    root: {
      borderRadius: '0.1875rem',
      fontSize: '0.9375rem',
      height: '2.75rem',
      letterSpacing: '.06rem',
      lineHeight: '1.125rem',
      padding: '0.8125rem 1.25rem',
      position: 'relative',
      textTransform: 'none',

      '&.MuiButton-contained:focus:not(:active)::before, &.MuiButton-outlined:focus:not(:active)::before':
        {
          content: '""',
          position: 'absolute',
          background: 'transparent',
          width: 'calc(100% + 6px)',
          height: 'calc(100% + 6px)',
          borderRadius: '0.375rem',
          border: '2px solid',
          borderColor: grey['950'],
          zIndex: 1,
        },

      '&.MuiButton-outlined:focus:not(:active)::before': {
        width: 'calc(100% + 8px)',
        height: 'calc(100% + 8px)',
      },
    },

    sizeSmall: {
      height: '2.25rem',
      padding: '0.5rem 0.75rem',
    },

    contained: {
      '&.Mui-disabled': {
        backgroundColor: `${grey['50']} !important`,
      },

      '&.MuiButton-colorPrimary': {
        color: primary['950'],
        backgroundColor: primary['200'],

        '&:hover': {
          backgroundColor: primary['300'],
        },
        '&:active': {
          backgroundColor: primary['400'],
        },
      },

      '&.MuiButton-colorGrey': {
        color: grey['950'],
        backgroundColor: grey['200'],

        '&:hover': {
          backgroundColor: grey['300'],
        },
        '&:active': {
          backgroundColor: grey['400'],
        },
      },

      '&.MuiButton-colorSecondary': {
        color: secondary['950'],
        backgroundColor: secondary['200'],

        '&:hover': {
          backgroundColor: secondary['300'],
        },
        '&:active': {
          backgroundColor: secondary['400'],
        },
      },

      '&.MuiButton-colorWarning': {
        color: warning['950'],
        backgroundColor: warning['200'],

        '&:hover': {
          backgroundColor: warning['300'],
        },
        '&:active': {
          backgroundColor: warning['400'],
        },
      },

      '&.MuiButton-colorError': {
        color: error['950'],
        backgroundColor: error['200'],

        '&:hover': {
          backgroundColor: error['300'],
        },
        '&:active': {
          backgroundColor: error['400'],
        },
      },
    },

    outlined: {
      '&.Mui-disabled': {
        backgroundColor: `transparent !important`,
        borderColor: `${grey['50']} !important`,
        color: `${grey['300']} !important`,
      },

      '&.MuiButton-colorPrimary': {
        borderColor: primary['600'],
        color: primary['600'],
        backgroundColor: 'transparent',

        '&:hover': {
          backgroundColor: primary['50'],
        },
        '&:active': {
          backgroundColor: primary['100'],
        },
      },

      '&.MuiButton-colorGrey': {
        borderColor: grey['600'],
        color: grey['900'],
        backgroundColor: 'transparent',

        '&:hover': {
          backgroundColor: grey['50'],
        },
        '&:active': {
          backgroundColor: grey['100'],
        },
      },

      '&.MuiButton-colorSecondary': {
        borderColor: secondary['600'],
        color: secondary['600'],
        backgroundColor: 'transparent',

        '&:hover': {
          backgroundColor: secondary['50'],
        },
        '&:active': {
          backgroundColor: secondary['100'],
        },
      },

      '&.MuiButton-colorWarning': {
        borderColor: warning['600'],
        color: warning['600'],
        backgroundColor: 'transparent',

        '&:hover': {
          backgroundColor: warning['50'],
        },
        '&:active': {
          backgroundColor: warning['100'],
        },
      },

      '&.MuiButton-colorError': {
        borderColor: error['600'],
        color: error['600'],
        backgroundColor: 'transparent',

        '&:hover': {
          backgroundColor: error['50'],
        },
        '&:active': {
          backgroundColor: error['100'],
        },
      },
    },
    text: {},
  },
}

export default MuiButton
