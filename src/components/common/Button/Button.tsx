import { Button as MuiButton } from '@mui/material'

import { ButtonProps } from '@/types/buttons/ButtonProps'

const defaultProps = {
  color: 'primary' as ButtonProps['color'],
  disabled: false,
  variant: 'primary' as ButtonProps['variant'],
}

function Button(props: ButtonProps) {
  const { children, ...rest } = props

  return (
    <MuiButton {...defaultProps} {...rest}>
      {children}
    </MuiButton>
  )
}

export default Button
