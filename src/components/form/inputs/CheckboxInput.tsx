import {
  FormControl,
  FormControlLabel,
  Checkbox as MuiCheckbox,
  CheckboxProps as MuiCheckboxProps,
} from '@mui/material'
import { forwardRef } from 'react'

import CheckBoldIcon from '@/assets/icons/CheckBoldIcon'
import CheckUncheckedBoldIcon from '@/assets/icons/CheckUncheckedBoldIcon'

import { RcSesFormControlWrapperProps } from '../components/FormControlWrapper'

type ImmediateFieldProps = 'onChange' | 'onBlur' | 'disabled' | 'name' | 'ref'

type ImmediateWrapperProps = 'label' | 'errors'

type Props = Pick<MuiCheckboxProps, ImmediateFieldProps> &
  Pick<RcSesFormControlWrapperProps, ImmediateWrapperProps> & {
    id?: string
    children: React.ReactNode
    slotProps?: {
      field?: Partial<Omit<MuiCheckboxProps, ImmediateFieldProps>>
    }
  }

const RcSesCheckboxInput = forwardRef<HTMLInputElement, Props>((props, ref) => {
  const { children, errors, label, slotProps, ...fieldProps } = props

  const id = props.id ?? crypto.randomUUID()

  return (
    <FormControl error={!!errors}>
      <FormControlLabel
        control={
          <MuiCheckbox
            id={id}
            disableRipple
            inputRef={ref}
            {...fieldProps}
            checkedIcon={<CheckBoldIcon />}
            icon={<CheckUncheckedBoldIcon />}
          />
        }
        label={children}
      />
    </FormControl>
  )
})

export default RcSesCheckboxInput
