import {
  FormControl,
  FormHelperText,
  FormLabel,
  OutlinedTextFieldProps as MuiOutlinedTextFieldProps,
  TextField as MuiTextField,
} from '@mui/material'

interface TextFieldProps extends MuiOutlinedTextFieldProps {
  label?: string
  description?: string
  variant: 'outlined'
}

function TextField(props: TextFieldProps) {
  const { label, description, variant, ...inputProps } = props

  return (
    <FormControl sx={{ width: '100%' }}>
      <FormLabel>{label}</FormLabel>
      <MuiTextField variant={variant} placeholder='Tekstas' {...inputProps} />
      {description && (
        <FormHelperText sx={{ mx: 0, mt: '0.2rem' }}>{description}</FormHelperText>
      )}
    </FormControl>
  )
}
TextField.defaultProps = {
  label: undefined,
  description: undefined,
}

export default TextField
