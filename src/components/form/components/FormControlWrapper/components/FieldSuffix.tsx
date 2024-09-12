import { Box } from '@mui/material'

type Props = {
  children: React.ReactNode
}

function FieldSuffix({ children }: Props) {
  if (!children) return null

  return (
    <Box sx={{ position: 'absolute', left: '100%', ml: 1, top: '.5rem' }}>{children}</Box>
  )
}

export default FieldSuffix
