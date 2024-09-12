import {
  FormControlLabel,
  Checkbox as MuiCheckbox,
  CheckboxProps as MuiCheckboxProps,
  styled,
} from '@mui/material'
import { forwardRef } from 'react'

import CheckBoldIcon from '@/assets/icons/CheckBoldIcon'
import CheckUncheckedBoldIcon from '@/assets/icons/CheckUncheckedBoldIcon'
import palette from '@/theme/palette'

import RcSesFormControlWrapper, {
  RcSesFormControlWrapperProps,
} from '../components/FormControlWrapper'

const StyledFormControlLabel = styled(FormControlLabel)({
  backgroundColor: palette.grey['50'],
  borderColor: palette.grey['500'],
  borderStyle: 'solid',
  borderWidth: '1px',
  borderRadius: '.25rem',
  margin: 0,
  padding: '1rem 1.25rem',

  '.MuiTypography-root': {
    fontSize: '.875rem !important',
    lineHeight: '1.25rem !important',
  },
})

type TFieldProps = MuiCheckboxProps
type ImmediateFieldProps = 'onChange' | 'onBlur' | 'disabled' | 'name' | 'ref'

type TWrapperProps = RcSesFormControlWrapperProps
type ImmediateWrapperProps = 'label' | 'errors'

type Props = Pick<TFieldProps, ImmediateFieldProps> &
  Pick<TWrapperProps, ImmediateWrapperProps> & {
    id?: string
    children: React.ReactNode
    slotProps?: {
      field?: Partial<Omit<TFieldProps, ImmediateFieldProps>>
      wrapper?: Partial<Omit<TWrapperProps, ImmediateWrapperProps>>
    }
  }

const RcSesCheckbox = forwardRef<HTMLInputElement, Props>((props, ref) => {
  const { children, errors, label, slotProps, ...fieldProps } = props

  const id = props.id ?? crypto.randomUUID()

  return (
    <RcSesFormControlWrapper
      id={id}
      label={label}
      errors={errors}
      {...slotProps?.wrapper}
    >
      <StyledFormControlLabel
        control={
          <MuiCheckbox
            icon={<CheckUncheckedBoldIcon />}
            {...fieldProps}
            checkedIcon={<CheckBoldIcon />}
            disableRipple
            inputRef={ref}
            {...slotProps?.field}
          />
        }
        label={children}
      />
    </RcSesFormControlWrapper>
  )
})

export default RcSesCheckbox
