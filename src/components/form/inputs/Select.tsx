import {
  Autocomplete,
  AutocompleteProps,
  Box,
  CircularProgress,
  TextField,
} from '@mui/material'
import { useMemo, useState } from 'react'
import { UseControllerProps, useController } from 'react-hook-form'

import RcSesFormControlWrapper, {
  RcSesFormControlWrapperProps,
} from '../components/FormControlWrapper'

type Option = {
  description?: string
  label: string
  value: string
}

type Props = Partial<RcSesFormControlWrapperProps> &
  Pick<AutocompleteProps<Option | '', false, true, false>, 'onInputChange'> &
  UseControllerProps<any, any> & {
    options: (Option | '')[]
    loading?: boolean
  }

function RcSesSelect(props: Props) {
  const [inputValue, setInputValue] = useState<string>('')

  const {
    control,
    description,
    disabled,
    errors,
    label,
    labelSubtitle,
    loading,
    name,
    onInputChange,
    options,
    rules,
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
    shouldUnregister: true,
  })

  const hasError = !!errors

  const resolvedValue = useMemo(
    () =>
      value
        ? {
            value,
            label: (options.find((o) => (o && o.value) === value) as Option)?.label ?? '',
          }
        : '',
    [options, value],
  )

  return (
    <RcSesFormControlWrapper
      description={description}
      errors={errors}
      id={id}
      label={label}
      labelSubtitle={labelSubtitle}
    >
      <Autocomplete
        id={fieldProps.id}
        disableClearable
        disabled={disabled}
        value={resolvedValue}
        getOptionLabel={(option) => (typeof option === 'object' ? option.label : '')}
        getOptionKey={(option) => (typeof option === 'object' ? option?.value : '')}
        isOptionEqualToValue={(option, selection) =>
          option === '' ||
          (typeof option === 'object' &&
            typeof selection === 'object' &&
            option?.value === selection?.value)
        }
        onChange={(_event, item) => onChange(typeof item === 'object' && item?.value)}
        onInputChange={(event, val, reason) => {
          setInputValue(val ?? '')
          if (onInputChange) onInputChange(event, val, reason)
        }}
        options={options}
        loading={loading}
        inputValue={inputValue}
        renderInput={(params) => (
          <TextField
            {...params}
            disabled={disabled}
            error={hasError}
            InputProps={{
              ...params.InputProps,
              endAdornment: (
                <>
                  {loading ? <CircularProgress color='inherit' size={16} /> : null}
                  {params.InputProps.endAdornment}
                </>
              ),
            }}
          />
        )}
        renderOption={(optionProps, option, _state, ownerState) => {
          const { key, ...rest } = optionProps as any
          return (
            <Box key={key} component='li' {...rest}>
              <span className='rc-ses-select-option-label'>
                {ownerState.getOptionLabel(option)}
              </span>
              {!!option && (
                <span className='rc-ses-select-option-description'>
                  {option.description}
                </span>
              )}
            </Box>
          )
        }}
      />
    </RcSesFormControlWrapper>
  )
}

export default RcSesSelect
