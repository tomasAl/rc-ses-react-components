import { Box, FormControl, FormHelperText, FormLabel } from '@mui/material'
import { FieldError } from 'react-hook-form'

type Props = {
  children: React.ReactNode
  className?: string
  description?: React.ReactNode
  errors?: FieldError | undefined
  id: string
  label?: string
  labelSubtitle?: React.ReactNode
}

function RcSesFormControlWrapper({
  children,
  className = undefined,
  description = undefined,
  errors = undefined,
  id,
  label = undefined,
  labelSubtitle = undefined,
}: Props) {
  return (
    <FormControl sx={{ my: 1, width: '100%' }} className={className}>
      <Box
        className='rc-ses-form-control-wrapper'
        sx={{
          alignItems: 'center',
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          width: '100%',
        }}
      >
        <FormLabel
          sx={{
            flex: { xs: '0 0 0%', sm: '0 0 273px' },
            marginBottom: { xs: '.25rem', sm: '0' },
            textAlign: { xs: 'left', sm: 'right' },
            pr: 3,
          }}
        >
          {label}
          {!!labelSubtitle && (
            <span className='rc-ses-label-subtitle'>{labelSubtitle}</span>
          )}
        </FormLabel>

        <Box sx={{ flex: '1 1 0%' }} className='rc-ses-form-field-wrapper'>
          {children}
        </Box>
      </Box>

      <Box sx={{ flex: '1 1 0%', ml: { sm: '273px' } }}>
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

export default RcSesFormControlWrapper

export { type Props as RcSesFormControlWrapperProps }
