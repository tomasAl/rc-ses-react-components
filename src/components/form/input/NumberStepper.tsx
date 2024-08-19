/* eslint-disable react/jsx-props-no-spreading */
import { ArrowBackIosNew, ArrowForwardIos } from '@mui/icons-material'
import {
  IconButton,
  InputAdornment,
  TextField,
  TextFieldProps,
  styled,
} from '@mui/material'
import { ChangeEvent, useEffect, useState } from 'react'
import { FieldError, UseControllerProps, useController } from 'react-hook-form'

import RcSesFormControlWrapper from '../FormControlWrapper'

const NumberInput = styled(TextField)({
  '& input[type=number]': {
    MozAppearance: 'textfield',
  },
  '& input[type=number]::-webkit-outer-spin-button': {
    WebkitAppearance: 'none',
    margin: 0,
  },
  '& input[type=number]::-webkit-inner-spin-button': {
    WebkitAppearance: 'none',
    margin: 0,
  },
})

type ArrowButtonProps = {
  onClick: () => void
  disabled: boolean
  direction: 'plus' | 'minus'
}

function ArrowButton({ onClick, disabled, direction }: ArrowButtonProps) {
  return (
    <IconButton
      onClick={onClick}
      disabled={disabled}
      sx={{
        color: 'grey.900',
        borderRadius: 0,
      }}
    >
      {direction === 'plus' ? (
        <ArrowForwardIos fontSize='medium' />
      ) : (
        <ArrowBackIosNew fontSize='medium' />
      )}
    </IconButton>
  )
}

type Props = TextFieldProps &
  UseControllerProps<any, any> & {
    description?: string
    errors?: FieldError | undefined
    label?: string
    labelSubtitle?: string
    min?: string | number
    max?: string | number
    step?: string | number
  }
function RcSesNumberStepper(props: Props) {
  const [buttonState, setButtonState] = useState<[boolean, boolean]>([true, true])

  const {
    control,
    description,
    disabled,
    errors,
    label,
    labelSubtitle,
    name,
    rules,
    step,
    ...fieldProps
  } = props
  // eslint-disable-next-line react/destructuring-assignment
  const id = props.id ?? crypto.randomUUID()

  const {
    field: { onChange, value },
  } = useController({
    control,
    name,
    rules,
  })

  useEffect(() => {
    if (disabled) {
      setButtonState([true, true])
      return
    }

    setButtonState([
      Number.isInteger(rules?.min)
        ? parseInt(rules?.min as string, 10) >= parseInt((value ?? 0) as string, 10)
        : false,
      Number.isInteger(rules?.max)
        ? parseInt(rules?.max as string, 10) <= parseInt((value ?? 0) as string, 10)
        : false,
    ])
  }, [disabled, rules?.max, rules?.min, value])

  const handleInputOnChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    onChange && onChange(e.target.value)

  const handleOnAdd = () =>
    onChange(parseInt((value ?? 0) as string, 10) - (parseInt(step as string, 10) || 1))

  const handleOnSubtract = () =>
    onChange(parseInt((value ?? 0) as string, 10) + (parseInt(step as string, 10) || 1))

  return (
    <RcSesFormControlWrapper
      description={description}
      errors={errors}
      id={id}
      label={label}
      labelSubtitle={labelSubtitle}
    >
      <NumberInput
        type='number'
        InputProps={{
          step,
          value,
          endAdornment: (
            <>
              <InputAdornment position='start'>
                <ArrowButton
                  onClick={handleOnAdd}
                  disabled={buttonState[0]}
                  direction='minus'
                />
              </InputAdornment>
              <InputAdornment position='end'>
                <ArrowButton
                  onClick={handleOnSubtract}
                  disabled={buttonState[1]}
                  direction='plus'
                />
              </InputAdornment>
            </>
          ),
        }}
        onChange={handleInputOnChange}
        {...fieldProps}
      />
    </RcSesFormControlWrapper>
  )
}

RcSesNumberStepper.defaultProps = {
  description: undefined,
  errors: undefined,
  label: undefined,
  labelSubtitle: undefined,
  min: undefined,
  max: undefined,
  step: 1,
}

export default RcSesNumberStepper
