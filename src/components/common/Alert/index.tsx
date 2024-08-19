import Alert from '@mui/material/Alert'

type Props = React.ComponentProps<typeof Alert>

function RcSesAlert(props: Props) {
  const { children, ...alertProps } = props

  return (
    <Alert {...alertProps} closeText='Uždaryti'>
      {children}
    </Alert>
  )
}

export default RcSesAlert
