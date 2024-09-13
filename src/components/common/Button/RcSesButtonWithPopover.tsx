import { PopoverProps } from '@mui/material/Popover'
import { useState } from 'react'

import QuestionFillIcon from '@/assets/icons/QuestionFillIcon'
import QuestionIcon from '@/assets/icons/QuestionIcon'
import palette from '@/theme/palette'
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
  const [hovering, setHovering] = useState<boolean>(false)

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) =>
    setAnchorEl(event.currentTarget)

  const handleClose = () => setAnchorEl(null)

  const open = Boolean(anchorEl)
  const id = open ? 'simple-popover' : undefined

  return (
    <>
      <RcSesButton
        {...buttonProps}
        size='small'
        onClick={handleClick}
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
        sx={{
          height: 'unset',
          minWidth: 'unset',
          p: 0,
          'svg path': {
            fill: palette.grey['900'],
          },
          ':hover': {
            backgroundColor: 'transparent',
            'svg path': {
              fill: palette.primary['500'],
            },
          },
          ...buttonProps?.sx,
        }}
      >
        {children ?? (hovering ? <QuestionFillIcon /> : <QuestionIcon />)}
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
