import {
  OutlinedTextFieldProps as MuiOutlinedTextFieldProps,
  TextField,
} from '@mui/material'
import { forwardRef } from 'react'
import { FieldError } from 'react-hook-form'

import RcSesFormControlWrapper from '../FormControlWrapper'

interface Props extends Omit<MuiOutlinedTextFieldProps, 'variant'> {
  description?: string
  errors?: FieldError | undefined
  label?: string
  labelSubtitle?: string
}

const RcSesTextField = forwardRef<HTMLInputElement, Props>((props, ref) => {
  const { description, label, labelSubtitle, ...inputProps } = props
  const id = props.id ?? crypto.randomUUID()

  return (
    <RcSesFormControlWrapper
      description={description}
      errors={props.errors}
      id={id}
      label={label}
      labelSubtitle={labelSubtitle}
    >
      <TextField {...inputProps} inputRef={ref} id={id} fullWidth />
    </RcSesFormControlWrapper>
  )
})

RcSesTextField.defaultProps = {
  description: undefined,
  errors: undefined,
  label: undefined,
  labelSubtitle: undefined,
}

export default RcSesTextField
