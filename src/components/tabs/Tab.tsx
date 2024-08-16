import { Box, Tab as MuiTab, TabProps, styled } from '@mui/material'

const StyledTab = styled(MuiTab)(() => ({
  borderTopLeftRadius: '.1875rem',
  borderTopRightRadius: '.1875rem',
  background: 'red',
}))

function Tab(props: TabProps): React.ReactNode {
  const { children, ...tabProps } = props

  return (
    <Box sx={{ px: '2px' }}>
      <StyledTab {...tabProps}>{children}</StyledTab>
    </Box>
  )
}

Tab.defaultProps = {}

export default Tab
