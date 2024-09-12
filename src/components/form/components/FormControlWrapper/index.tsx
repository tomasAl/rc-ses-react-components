import { Box, FormControl, FormHelperText, FormLabel } from '@mui/material'
import { FieldError } from 'react-hook-form'

import FieldSuffix from './components/FieldSuffix'

type Props = {
  children: React.ReactNode
  className?: string
  description?: React.ReactNode
  errors?: FieldError | undefined
  id: string
  label?: React.ReactNode
  labelSubtitle?: React.ReactNode
  labelOnTop?: boolean
  fieldSuffix?: React.ReactNode
}

function RcSesFormControlWrapper({
  children,
  className = undefined,
  description = undefined,
  errors = undefined,
  id,
  label = undefined,
  labelSubtitle = undefined,
  labelOnTop = false,
  fieldSuffix = undefined,
}: Props) {
  return (
    <FormControl sx={{ my: 1, width: '100%' }} className={className}>
      <Box
        className='rc-ses-form-control-wrapper'
        sx={{
          alignItems: { xs: 'stretch', sm: labelOnTop ? 'stretch' : 'center' },
          display: 'flex',
          flexDirection: { xs: 'column', sm: labelOnTop ? 'column' : 'row' },
          width: '100%',
        }}
      >
        <FormLabel
          sx={{
            flex: { xs: '0 0 0%', sm: labelOnTop ? '0 0 0%' : '0 0 273px' },
            marginBottom: { xs: '.25rem', sm: labelOnTop ? '.25rem' : '0' },
            textAlign: { xs: 'left', sm: labelOnTop ? 'left' : 'right' },
            pr: 3,
          }}
        >
          {label}
          {!!labelSubtitle && (
            <span className='rc-ses-label-subtitle'>{labelSubtitle}</span>
          )}
        </FormLabel>

        <Box
          sx={{ flex: '1 1 0%', position: 'relative' }}
          className='rc-ses-form-field-wrapper'
        >
          {children}
          <FieldSuffix>{fieldSuffix}</FieldSuffix>
        </Box>
      </Box>

      <Box sx={{ flex: '1 1 0%', ml: { sm: labelOnTop ? 0 : '273px' } }}>
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
