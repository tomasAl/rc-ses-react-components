import { Typography } from '@mui/material'
import { useForm } from 'react-hook-form'

import RcSesCheckboxInput from '@/components/form/input/CheckboxInput'

type FormModel = {
  agreement: boolean
}

function TermsAndConditionsForm() {
  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm<FormModel>({
    mode: 'all',
    defaultValues: {
      agreement: false,
    },
  })

  return (
    // eslint-disable-next-line no-console
    <form onSubmit={handleSubmit(console.debug)} noValidate>
      <RcSesCheckboxInput
        errors={errors?.agreement}
        {...register('agreement', { required: true })}
      >
        <Typography sx={{ fontWeight: 600, lineHeight: '1.3125rem !important' }}>
          Užsakydamas darbus esu susipažinęs su{' '}
          <a href='https://www.registrucentras.lt/p/775' target='_blank' rel='noreferrer'>
            darbų atlikimo ir atlyginimo tvarka
          </a>{' '}
          ir įsipareigoju apmokėti už užsakytus darbus. Esu informuotas, kad per nurodytą
          terminą neapmokėjus apskaičiuoto mokesčio, darbų užsakymas per pasiriktą terminą
          nebus įvykdytas.
        </Typography>
      </RcSesCheckboxInput>
    </form>
  )
}

export default TermsAndConditionsForm
