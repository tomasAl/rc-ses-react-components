import { Tabs as MuiTabs, TabsProps, styled } from '@mui/material'

import Colors from '@/theme/palette'

const StyledTabs = styled(MuiTabs)(({ theme }) => ({
  paddingLeft: '30px',

  '& .MuiTab-root': {
    borderTopLeftRadius: '0.1875rem',
    borderTopRightRadius: '0.1875rem',
    background: theme.palette.grey['50'],
    marginRight: '5px',
    border: '1px solid transparent',
    borderBottom: 'none',
    textTransform: 'none',
    color: theme.palette.grey['900'],
    '&.Mui-selected': {
      background: 'white',
      borderColor: theme.palette.grey['200'],
      color: Colors.primary['900'],
      fontWeight: 600,
    },
  },
  '& .MuiTabs-indicator': {
    display: 'none',
  },
}))

function Tab(props: TabsProps): React.ReactNode {
  const { children, ...tabsProps } = props

  return <StyledTabs {...tabsProps}>{children}</StyledTabs>
}

Tab.defaultProps = {}

export default Tab
