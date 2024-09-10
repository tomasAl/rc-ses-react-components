import {
  OutlinedTextFieldProps as MuiOutlinedTextFieldProps,
  TextField,
} from '@mui/material'
import { forwardRef } from 'react'

import RcSesFormControlWrapper, {
  RcSesFormControlWrapperProps,
} from '../components/FormControlWrapper'

type Props = Omit<MuiOutlinedTextFieldProps, 'variant'> &
  Partial<RcSesFormControlWrapperProps>

const RcSesTextField = forwardRef<HTMLInputElement, Props>((props, ref) => {
  const { description, label, labelSubtitle, labelOnTop, ...inputProps } = props
  const id = props.id ?? crypto.randomUUID()

  return (
    <RcSesFormControlWrapper
      description={description}
      errors={props.errors}
      id={id}
      label={label}
      labelSubtitle={labelSubtitle}
      labelOnTop={labelOnTop}
    >
      <TextField {...inputProps} inputRef={ref} id={id} fullWidth />
    </RcSesFormControlWrapper>
  )
})

export default RcSesTextField
