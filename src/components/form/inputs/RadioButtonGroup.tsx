/* eslint-disable react/jsx-props-no-spreading */
import { FormControlLabel, Radio, RadioGroup, styled } from '@mui/material'
import { UseControllerProps, useController } from 'react-hook-form'

import palette from '@/theme/palette'

import RcSesFormControlWrapper, {
  RcSesFormControlWrapperProps,
} from '../components/FormControlWrapper'

export type RadioOption = {
  label: string
  value: string
}

type Props = Partial<RcSesFormControlWrapperProps> &
  UseControllerProps<any, any> & {
    className?: string
    hideNativeRadio?: boolean
    options: Array<RadioOption>
    variant?: 'flat' | 'outlined' | 'filled'
  }

function RcSesRadioButtonGroup(props: Props) {
  const {
    control,
    className,
    description,
    disabled,
    hideNativeRadio,
    errors,
    label,
    labelSubtitle,
    name,
    options,
    rules,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    variant = 'flat',
  } = props

  // eslint-disable-next-line react/destructuring-assignment
  const id = props.id ?? crypto.randomUUID()

  const { field } = useController({
    control,
    name,
    rules,
  })

  return (
    <RcSesFormControlWrapper
      className={className}
      description={description}
      errors={errors}
      id={id}
      label={label}
      labelSubtitle={labelSubtitle}
    >
      <RadioGroup
        aria-labelledby={id}
        className={hideNativeRadio ? 'rc-ses-hide-native-radio' : ''}
        {...field}
      >
        {options.map((option) => (
          <FormControlLabel
            control={<Radio disabled={disabled} />}
            id={id}
            key={option.label}
            label={option.label}
            value={option.value}
            className={option.value === field.value ? 'Mui-checked' : ''}
          />
        ))}
      </RadioGroup>
    </RcSesFormControlWrapper>
  )
}

const StyledRcSesRadioButtonGroup = styled(RcSesRadioButtonGroup)((props) => ({
  '.rc-ses-form-field-wrapper': {
    backgroundColor: props.variant === 'filled' ? palette.grey['100'] : 'transparent',
    borderColor: props.variant === 'outlined' ? palette.grey['500'] : 'transparent',
    borderStyle: 'solid',
    borderWidth: props.variant === 'outlined' ? '1px' : 0,
    borderRadius: '.1875rem',
    margin: 0,
    padding: props.hideNativeRadio ? undefined : '.25rem .75rem',
  },
}))

export default StyledRcSesRadioButtonGroup
