import {
  FormControl,
  FormControlLabel,
  Checkbox as MuiCheckbox,
  CheckboxProps as MuiCheckboxProps,
} from '@mui/material'
import { forwardRef } from 'react'
import { FieldError } from 'react-hook-form'

import CheckBoldIcon from '@/assets/icons/CheckBoldIcon'
import CheckUncheckedBoldIcon from '@/assets/icons/CheckUncheckedBoldIcon'

type Props = MuiCheckboxProps & {
  children: React.ReactNode
  errors?: FieldError | undefined
}

const RcSesCheckbox = forwardRef<HTMLInputElement, Props>((props, ref) => {
  const { children, errors, ...checkboxProps } = props
  return (
    <FormControl error={!!errors}>
      <FormControlLabel
        control={
          <MuiCheckbox
            {...checkboxProps}
            checkedIcon={<CheckBoldIcon />}
            disableRipple
            icon={<CheckUncheckedBoldIcon />}
            inputRef={ref}
          />
        }
        label={children}
      />
    </FormControl>
  )
})

RcSesCheckbox.defaultProps = {
  errors: undefined,
}

export default RcSesCheckbox
