import { Button as MuiButton } from '@mui/material'

import { ButtonProps } from '@/types/buttons/ButtonProps'

function Button(props: ButtonProps) {
  const { children, ...rest } = props

  return <MuiButton {...rest}>{children}</MuiButton>
}

Button.defaultProps = {
  color: 'primary' as ButtonProps['color'],
  disabled: false,
  variant: 'primary' as ButtonProps['variant'],
}

export default Button
