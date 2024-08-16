import { Components } from '@mui/material'

import Colors from '@/theme/palette'

const MuiBreadcrumbs: Components['MuiBreadcrumbs'] = {
  defaultProps: {},
  styleOverrides: {
    root: {
      fontSize: '0.6875rem',
      color: Colors.grey['600'],
      '& .MuiBreadcrumbs-li:last-child': {
        color: Colors.grey['900'],
      },
    },
  },
}

export default MuiBreadcrumbs
