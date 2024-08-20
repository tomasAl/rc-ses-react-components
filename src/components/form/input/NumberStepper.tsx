/* eslint-disable react/jsx-props-no-spreading */
import { Button, OutlinedInput, OutlinedInputProps, styled } from '@mui/material'
import { ChangeEvent, useEffect, useState } from 'react'
import { FieldError, UseControllerProps, useController } from 'react-hook-form'

import MinusBoldIcon from '@/assets/icons/MinusBoldIcon'
import PlusBoldIcon from '@/assets/icons/PlusBoldIcon'
import palette from '@/theme/palette'

import RcSesFormControlWrapper from '../FormControlWrapper'

const NumberInput = styled(OutlinedInput)({
  paddingRight: 0,

  'input[type=number]': {
    MozAppearance: 'textfield',
  },
  'input[type=number]::-webkit-outer-spin-button': {
    WebkitAppearance: 'none',
    margin: 0,
  },
  'input[type=number]::-webkit-inner-spin-button': {
    WebkitAppearance: 'none',
    margin: 0,
  },

  '.MuiButtonBase-root': {
    backgroundColor: palette.grey['100'],
    borderRightStyle: 'none !important',

    '&:last-of-type': {
      borderTopRightRadius: '.25rem',
      borderBottomRightRadius: '.25rem',
    },

    '&:hover:not(:disabled)': {
      backgroundColor: palette.grey['200'],
    },

    '&.Mui-disabled': {
      backgroundColor: `${palette.grey['100']} !important`,
      borderLeftColor: `${palette.grey['600']} !important`,

      'svg path': {
        fill: palette.grey['600'],
      },
    },
  },
})

type ArrowButtonProps = {
  onClick: () => void
  disabled: boolean
  direction: 'plus' | 'minus'
}

function ArrowButton({ onClick, disabled, direction }: ArrowButtonProps) {
  return (
    <Button
      onClick={onClick}
      disabled={disabled}
      variant='outlined'
      sx={{
        color: 'grey.900',
        borderRadius: 0,
        minWidth: '2.75rem',
        padding: '.8125rem !important',
      }}
    >
      {direction === 'plus' ? <PlusBoldIcon /> : <MinusBoldIcon />}
    </Button>
  )
}

type Props = OutlinedInputProps &
  UseControllerProps<any, any> & {
    description?: string
    displayStepperControls?: boolean
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
    displayStepperControls,
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
        inputProps={{
          disabled,
          step,
          value,
        }}
        type='number'
        disabled={disabled}
        endAdornment={
          displayStepperControls && (
            <>
              <ArrowButton
                onClick={handleOnAdd}
                disabled={buttonState[0]}
                direction='minus'
              />
              <ArrowButton
                onClick={handleOnSubtract}
                disabled={buttonState[1]}
                direction='plus'
              />
            </>
          )
        }
        onChange={handleInputOnChange}
        {...fieldProps}
      />
    </RcSesFormControlWrapper>
  )
}

RcSesNumberStepper.defaultProps = {
  description: undefined,
  displayStepperControls: false,
  errors: undefined,
  label: undefined,
  labelSubtitle: undefined,
  min: undefined,
  max: undefined,
  step: 1,
}

export default RcSesNumberStepper
