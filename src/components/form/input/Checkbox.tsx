import {
  FormControlLabel,
  Checkbox as MuiCheckbox,
  CheckboxProps as MuiCheckboxProps,
  styled,
} from '@mui/material'
import { forwardRef } from 'react'
import { FieldError } from 'react-hook-form'

import CheckBoldIcon from '@/assets/icons/CheckBoldIcon'
import CheckUncheckedBoldIcon from '@/assets/icons/CheckUncheckedBoldIcon'
import palette from '@/theme/palette'

import RcSesFormControlWrapper from '../FormControlWrapper'

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

type Props = MuiCheckboxProps & {
  children: React.ReactNode
  description?: string
  errors?: FieldError | undefined
  label?: string
  labelSubtitle?: string
}

const RcSesCheckbox = forwardRef<HTMLInputElement, Props>((props, ref) => {
  const { children, description, label, labelSubtitle, ...checkboxProps } = props
  const id = props.id ?? crypto.randomUUID()

  return (
    <RcSesFormControlWrapper
      description={description}
      errors={props.errors}
      id={id}
      label={label}
      labelSubtitle={labelSubtitle}
    >
      <StyledFormControlLabel
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
    </RcSesFormControlWrapper>
  )
})

RcSesCheckbox.defaultProps = {
  description: undefined,
  errors: undefined,
  label: undefined,
  labelSubtitle: undefined,
}

export default RcSesCheckbox
