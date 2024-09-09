/* eslint-disable react/jsx-props-no-spreading */
import { FormControlLabel, Radio, RadioGroup } from '@mui/material'
import { UseControllerProps, useController } from 'react-hook-form'

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
  }

function RcSesRadioButtonGroup(props: Props) {
  const {
    control,
    description,
    disabled,
    hideNativeRadio,
    errors,
    label,
    labelSubtitle,
    name,
    options,
    rules,
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

export default RcSesRadioButtonGroup
