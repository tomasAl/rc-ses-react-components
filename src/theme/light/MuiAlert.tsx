import { Components } from '@mui/material'

import CheckCircleFillIcon from '@/assets/icons/CheckCircleFillIcon'
import CloseIcon from '@/assets/icons/CloseIcon'
import InfoFillIcon from '@/assets/icons/InfoFillIcon'
import ScrollIcon from '@/assets/icons/ScrollIcon'
import WarningDiamondFillIcon from '@/assets/icons/WarningDiamondFillIcon'
import WarningFillIcon from '@/assets/icons/WarningFillIcon'

import palette from '../palette'

const MuiAlert: Components['MuiAlert'] = {
  defaultProps: {
    elevation: 0,
    iconMapping: {
      grey: <InfoFillIcon />,
      error: <WarningDiamondFillIcon />,
      info: <ScrollIcon />,
      success: <CheckCircleFillIcon />,
      warning: <WarningFillIcon />,
    },
    slots: {
      closeIcon: CloseIcon,
    },
    variant: 'outlined',
  },
  styleOverrides: {
    root: {
      marginBottom: '1.5rem',
      paddingTop: '.75rem',
      paddingBottom: '.75rem',
    },

    icon: {
      alignSelf: 'center',
      paddingBottom: 0,
      paddingTop: 0,
    },

    message: {
      lineHeight: '1.125rem',
      padding: '.1875rem 0',
    },

    standard: {
      borderRadius: 0,
      borderLeftStyle: 'solid',
      borderLeftWidth: 3,
      fontWeight: 300,
      fontSize: '1.0625rem',
      padding: '1rem 1.875rem 1rem 1.5rem',

      '.MuiAlert-icon': {
        display: 'none',
      },
    },
    standardGrey: {
      backgroundColor: palette.grey['50'],
      borderLeftColor: palette.grey['500'],
      color: palette.grey['900'],
    },
    standardError: {
      backgroundColor: palette.error['50'],
      borderLeftColor: palette.error['500'],
      color: palette.error['900'],
    },
    standardInfo: {
      backgroundColor: palette.primary['50'],
      borderLeftColor: palette.primary['300'],
      color: palette.primary['900'],
    },
    standardSuccess: {
      backgroundColor: palette.secondary['50'],
      borderLeftColor: palette.secondary['500'],
      color: palette.secondary['900'],
    },
    standardWarning: {
      backgroundColor: palette.warning['50'],
      borderLeftColor: palette.warning['300'],
    },

    filled: {
      fontWeight: 600,
    },
    filledGrey: {
      backgroundColor: palette.grey['600'],
      borderColor: palette.grey['600'],
    },
    filledError: {
      backgroundColor: palette.error['600'],
      borderColor: palette.error['600'],
    },
    filledInfo: {
      backgroundColor: palette.primary['500'],
      borderColor: palette.primary['500'],
    },
    filledSuccess: {
      backgroundColor: palette.secondary['700'],
      borderColor: palette.secondary['700'],
    },
    filledWarning: {
      backgroundColor: palette.warning['300'],
      borderColor: palette.warning['300'],
    },

    outlined: {
      fontWeight: 400,
    },
    outlinedGrey: {
      backgroundColor: palette.grey['50'],
      borderColor: palette.grey['200'],

      '.MuiAlert-icon path': {
        fill: palette.grey['600'],
      },
    },
    outlinedError: {
      backgroundColor: palette.error['50'],
      borderColor: palette.error['200'],

      '.MuiAlert-icon path': {
        fill: palette.error['600'],
      },
    },
    outlinedInfo: {
      backgroundColor: palette.primary['50'],
      borderColor: palette.primary['300'],

      '.MuiAlert-icon path': {
        fill: palette.primary['500'],
      },
    },
    outlinedSuccess: {
      backgroundColor: palette.secondary['100'],
      borderColor: palette.secondary['300'],

      '.MuiAlert-icon path': {
        fill: palette.secondary['600'],
      },
    },
    outlinedWarning: {
      backgroundColor: palette.warning['100'],
      borderColor: palette.warning['300'],

      '.MuiAlert-icon path': {
        fill: palette.warning['600'],
      },
    },
  },
}

export default MuiAlert
