import { IconButton } from '@mui/material'
import InputAdornment from '@mui/material/InputAdornment'
import type { OutlinedTextFieldProps } from '@mui/material/TextField'
import TextField from '@mui/material/TextField'
import { forwardRef, useState } from 'react'
import type { UseControllerProps } from 'react-hook-form'
import { useController } from 'react-hook-form'

import MagnifyingGlassIcon from '@/assets/icons/MagnifyingGlassIcon'
import XCircleFillIcon from '@/assets/icons/XCircleFillIcon'

import RcSesFormControlWrapper, {
  RcSesFormControlWrapperProps,
} from '../components/FormControlWrapper'

type ModalComponentProps = {
  open: boolean
  onSubmit: (value: string) => void
  onClose: () => void
}

type Props = {
  slotProps: {
    Controller: UseControllerProps<any, any>
    FormControlWrapper: Omit<RcSesFormControlWrapperProps, 'id' | 'children'>
    TextField: Omit<OutlinedTextFieldProps, 'variant'>
  }
  ModalComponent: React.JSXElementConstructor<ModalComponentProps>
}

const RcSesSearchableField = forwardRef<HTMLInputElement, Props>((props, ref) => {
  const { slotProps, ModalComponent } = props

  const [modalOpen, setModalOpen] = useState<boolean>(false)

  const id = slotProps.TextField.id ?? crypto.randomUUID()

  const {
    field: { onChange, value },
  } = useController({
    ...slotProps.Controller,
    shouldUnregister: true,
  })

  return (
    <>
      <RcSesFormControlWrapper id={id} {...slotProps.FormControlWrapper}>
        <TextField
          inputRef={ref}
          id={id}
          InputProps={{
            inputProps: {
              onClick: () => setModalOpen(true),
              sx: { cursor: 'pointer' },
            },
            readOnly: true,
            startAdornment: (
              <InputAdornment position='start' onClick={() => setModalOpen(true)}>
                <MagnifyingGlassIcon />
              </InputAdornment>
            ),
            endAdornment: !!value && (
              <InputAdornment position='end'>
                <IconButton onClick={() => onChange('')}>
                  <XCircleFillIcon />
                </IconButton>
              </InputAdornment>
            ),
            sx: { cursor: 'pointer' },
          }}
          fullWidth
          {...slotProps.TextField}
          value={value}
          label={undefined}
        />
      </RcSesFormControlWrapper>

      <ModalComponent
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        onSubmit={(val: string) => onChange(val)}
      />
    </>
  )
})

export default RcSesSearchableField
