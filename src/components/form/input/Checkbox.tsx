import { Checkbox as MuiCheckbox, CheckboxProps as MuiCheckboxProps } from '@mui/material'

import CheckboxOffIcon from '@/assets/icons/inputs/CheckboxRoundOffIcon'
import CheckboxOnIcon from '@/assets/icons/inputs/CheckboxRoundOnIcon'

export default function Checkbox(props: MuiCheckboxProps) {
  const { disabled, color } = props
  return (
    <MuiCheckbox
      {...props}
      icon={<CheckboxOffIcon disabled={disabled} color={color} />}
      checkedIcon={<CheckboxOnIcon disabled={disabled} color={color} />}
    />
  )
}
