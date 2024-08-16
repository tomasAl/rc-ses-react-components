import { Radio as MuiRadio, RadioProps as MuiRadioProps } from '@mui/material'

import RadioOffIcon from '@/assets/icons/inputs/RadioV2OffIcon'
import RadioOnIcon from '@/assets/icons/inputs/RadioV2OnIcon'

export default function Radio(props: MuiRadioProps) {
  const { disabled, color } = props
  return (
    <MuiRadio
      {...props}
      icon={<RadioOffIcon disabled={disabled} color={color} />}
      checkedIcon={<RadioOnIcon disabled={disabled} color={color} />}
    />
  )
}
