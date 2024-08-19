import { Box, FormControl, FormHelperText, FormLabel } from '@mui/material'
import { FieldError } from 'react-hook-form'

type Props = {
  children: React.ReactNode
  description?: React.ReactNode
  errors?: FieldError | undefined
  id: string
  label?: string
  labelSubtitle?: React.ReactNode
}

function RcSesFormControlWrapper({
  children,
  description,
  errors,
  id,
  label,
  labelSubtitle,
}: Props) {
  return (
    <FormControl
      sx={{
        alignItems: labelSubtitle ? 'center' : 'flex-start',
        display: 'flex',
        flexDirection: 'row',
        mb: 2,
        width: '100%',
      }}
    >
      <FormLabel
        sx={{
          flex: '0 0 273px',
          marginTop: labelSubtitle ? 0 : '.75rem',
          textAlign: 'right',
          pr: 3,
        }}
      >
        {label}
        {!!labelSubtitle && (
          <span className='rc-ses-label-subtitle'>{labelSubtitle}</span>
        )}
      </FormLabel>

      <Box sx={{ flex: '1 1 0%' }}>
        {children}

        {!!description && (
          <FormHelperText sx={{ mx: 0, mt: '0.2rem' }}>{description}</FormHelperText>
        )}

        {!!errors && (
          <FormHelperText id={`${id}-errors`} error>
            {errors.type === 'required' && <span>Laukas yra privalomas</span>}
          </FormHelperText>
        )}
      </Box>
    </FormControl>
  )
}

RcSesFormControlWrapper.defaultProps = {
  description: undefined,
  errors: undefined,
  label: undefined,
  labelSubtitle: undefined,
}

export default RcSesFormControlWrapper
