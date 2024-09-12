import { PopoverProps } from '@mui/material/Popover'
import { useState } from 'react'

import QuestionIcon from '@/assets/icons/QuestionIcon'
import { ButtonProps } from '@/types/buttons/ButtonProps'

import RcSesPopover from '../Popover'
import RcSesButton from './Button'

type Props = ButtonProps & {
  popoverHeader?: React.ReactNode
  popoverContent?: React.ReactNode
  slotProps?: {
    popover?: Partial<PopoverProps>
  }
}
function RcSesButtonWithPopover(props: Props) {
  const { children, popoverHeader, popoverContent, slotProps, ...buttonProps } = props

  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null)

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const open = Boolean(anchorEl)
  const id = open ? 'simple-popover' : undefined

  return (
    <>
      <RcSesButton
        {...buttonProps}
        size='small'
        onClick={handleClick}
        sx={{
          height: 'unset',
          minWidth: 'unset',
          p: 0,
          ':hover': { backgroundColor: 'transparent' },
        }}
      >
        {children ?? <QuestionIcon />}
      </RcSesButton>

      <RcSesPopover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        header={popoverHeader}
        {...slotProps?.popover}
      >
        {popoverContent}
      </RcSesPopover>
    </>
  )
}

export default RcSesButtonWithPopover
