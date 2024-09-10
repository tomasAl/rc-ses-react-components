import { Box, Button, Typography, styled } from '@mui/material'
import { InputHTMLAttributes } from 'react'
import { UseControllerProps, useController } from 'react-hook-form'

import UploadSimpleIcon from '@/assets/icons/UploadSimpleIcon'
import palette from '@/theme/palette'

import RcSesFormControlWrapper, {
  RcSesFormControlWrapperProps,
} from '../components/FormControlWrapper'

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
})

type Props = Partial<RcSesFormControlWrapperProps> &
  InputHTMLAttributes<HTMLInputElement> &
  UseControllerProps<any, any>

function RcSesFileUpload(props: Props) {
  const { control, description, errors, label, labelSubtitle, labelOnTop, name, rules } =
    props

  // eslint-disable-next-line react/destructuring-assignment
  const id = props.id ?? crypto.randomUUID()

  const {
    field: { value, onChange, ...fieldProps },
  } = useController({
    control,
    name,
    rules,
  })

  const handleChange = (e: { target: { files: any } }) => onChange(e.target.files)

  return (
    <RcSesFormControlWrapper
      description={description}
      errors={errors}
      id={id}
      label={label}
      labelSubtitle={labelSubtitle}
      labelOnTop={labelOnTop}
    >
      <Button
        color='grey'
        component='label'
        fullWidth
        role={undefined}
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          overflow: 'hidden',
          pl: 1.25,
          pr: 0,
          ':hover': {
            backgroundColor: 'white !important',
          },
        }}
        tabIndex={-1}
        variant='outlined'
      >
        <VisuallyHiddenInput
          id={id}
          type='file'
          {...fieldProps}
          onChange={handleChange}
        />

        <Box sx={{ fontWeight: 400 }}>
          {!!value && (value as FileList)?.item(0)?.name}
        </Box>

        <Box
          sx={{
            alignItems: 'center',
            backgroundColor: palette.grey['100'],
            borderColor: palette.grey['500'],
            borderLeftStyle: 'solid',
            borderLeftWidth: '1px',
            display: 'flex',
            height: '42px',
            px: 2,
            ':hover': {
              backgroundColor: palette.grey['200'],
            },
          }}
        >
          <UploadSimpleIcon />
          <Typography variant='body1' sx={{ fontWeight: 600, ml: 1 }}>
            Įkelti failą
          </Typography>
        </Box>
      </Button>
    </RcSesFormControlWrapper>
  )
}

export default RcSesFileUpload
