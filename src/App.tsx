import {
  Button,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Stack,
  Typography,
} from '@mui/material'
import { Link } from 'react-router-dom'

import ServiceHeader from './components/layout/ServiceHeader'
import ServicePage from './components/layout/ServicePage'

export default function App() {
  const routes = [
    {
      title: 'Vieno žingsnio formos pavyzdys',
      routeTo: '/single-step-form',
    },
    {
      title: 'Formos su vedliu pavyzdys',
      routeTo: '/multi-step-form',
    },
  ]

  return (
    <ServicePage>
      <ServiceHeader
        breadcrumbsProps={{ path: [] }}
        title='Formų bei komponentų pavyzdžiai'
      >
        <Typography variant='body1'>
          <Stack direction='row' spacing={2}>
            {routes?.map((route) => (
              <Button
                component={Link}
                to={route.routeTo}
                color='primary'
                variant='contained'
                size='small'
              >
                {route.title}
              </Button>
            ))}
          </Stack>
        </Typography>
      </ServiceHeader>
    </ServicePage>
  )
}
